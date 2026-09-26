'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { suhogContent } from '@/data/suhogContent';

const TOTAL_FRAMES = 362;
const MAX_CACHE_SIZE = 80; // Bounded cache size to prevent memory leaks

// Key landmark frames across the four settled scenes
const KEY_LANDMARKS = [0, 125, 200, 342];

// Non-linear mapping from scroll progress [0, 1] to frame index [0, 361]
// Provides extended reading intervals at settled holds
function getTargetFrame(p: number): number {
  const clampP = Math.max(0, Math.min(1, p));

  if (clampP <= 0.16) {
    // Scene 1: Arrival hold (0 - 24)
    const local = clampP / 0.16;
    return Math.round(local * 24);
  } else if (clampP <= 0.34) {
    // Transit 1: Entering home (24 - 108)
    const local = (clampP - 0.16) / (0.34 - 0.16);
    return Math.round(24 + local * (108 - 24));
  } else if (clampP <= 0.50) {
    // Scene 2: Living room hold (108 - 144)
    const local = (clampP - 0.34) / (0.50 - 0.34);
    return Math.round(108 + local * (144 - 108));
  } else if (clampP <= 0.60) {
    // Transit 2: Approaching tablet (144 - 180)
    const local = (clampP - 0.50) / (0.60 - 0.50);
    return Math.round(144 + local * (180 - 144));
  } else if (clampP <= 0.76) {
    // Scene 3: Family call hold (180 - 228)
    const local = (clampP - 0.60) / (0.76 - 0.60);
    return Math.round(180 + local * (228 - 180));
  } else if (clampP <= 0.86) {
    // Transit 3: Moving to veranda (228 - 324)
    const local = (clampP - 0.76) / (0.86 - 0.76);
    return Math.round(228 + local * (324 - 228));
  } else {
    // Scene 4: Veranda hold (324 - 361)
    const local = (clampP - 0.86) / (1.00 - 0.86);
    return Math.round(324 + local * (361 - 324));
  }
}

// Opacity calculator for each settled text cue
function getSceneOpacity(p: number, start: number, end: number): number {
  if (p < start - 0.03 || p > end + 0.03) return 0;
  if (p < start) return (p - (start - 0.03)) / 0.03;
  if (p > end) return (end + 0.03 - p) / 0.03;
  return 1;
}

export const FilmScrollExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Cache of loaded HTMLImageElement keyed by frame index
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingSet = useRef<Set<number>>(new Set());
  const currentRenderedFrame = useRef<number>(-1);
  const targetFrameRef = useRef<number>(0);
  const posterImage = useRef<HTMLImageElement | null>(null);

  // Format frame index to filename path
  const getFrameUrl = useCallback((index: number) => {
    const padded = String(index + 1).padStart(4, '0');
    return `/frames/frame_${padded}.webp`;
  }, []);

  // Render a specific frame onto canvas
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;

    const imgAspect = imgW / imgH;
    const canvasAspect = w / h;

    let renderW = w;
    let renderH = h;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      // Screen is wider than 16:9
      renderW = w;
      renderH = w / imgAspect;
      offsetY = (h - renderH) / 2;
    } else {
      // Screen is narrower than 16:9 (tablets & mobile portrait)
      renderH = h;
      renderW = h * imgAspect;
      // On narrow screens, subjects (woman, companion, tablet, couple) are on the center-right (65-72%)
      const mobileShift = w < 768 ? 0.68 : 0.5;
      offsetX = (w - renderW) * mobileShift;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Preload a single frame
  const preloadFrame = useCallback(
    (index: number) => {
      if (
        index < 0 ||
        index >= TOTAL_FRAMES ||
        imageCache.current.has(index) ||
        loadingSet.current.has(index)
      ) {
        return;
      }

      loadingSet.current.add(index);
      const img = new Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        loadingSet.current.delete(index);
        imageCache.current.set(index, img);

        // Immediate progressive update: if this image is closer to the user's active target, draw it!
        const target = targetFrameRef.current;
        const currentDist =
          currentRenderedFrame.current === -1
            ? 9999
            : Math.abs(currentRenderedFrame.current - target);
        const newDist = Math.abs(index - target);

        if (newDist < currentDist) {
          drawFrame(img);
          currentRenderedFrame.current = index;
        }

        // Bounded Cache eviction: if cache exceeds MAX_CACHE_SIZE, evict furthest from target
        if (imageCache.current.size > MAX_CACHE_SIZE) {
          let furthestIdx = -1;
          let maxDist = -1;

          for (const key of imageCache.current.keys()) {
            // Keep landmark frames permanently cached to guarantee smooth jump scrolling
            if (KEY_LANDMARKS.includes(key)) continue;

            const dist = Math.abs(key - target);
            if (dist > maxDist) {
              maxDist = dist;
              furthestIdx = key;
            }
          }
          if (furthestIdx !== -1) {
            imageCache.current.delete(furthestIdx);
          }
        }
      };
      img.onerror = () => {
        loadingSet.current.delete(index);
      };
    },
    [getFrameUrl, drawFrame]
  );

  // Preload nearby window
  const preloadWindow = useCallback(
    (centerIndex: number) => {
      const windowBack = 15;
      const windowForward = 25;
      for (let i = centerIndex - windowBack; i <= centerIndex + windowForward; i++) {
        if (i >= 0 && i < TOTAL_FRAMES) {
          preloadFrame(i);
        }
      }
    },
    [preloadFrame]
  );

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Initialize poster image and landmark frames immediately on mount
  useEffect(() => {
    if (prefersReducedMotion) return;

    const poster = new Image();
    poster.src = '/frames/poster.webp';
    poster.onload = () => {
      posterImage.current = poster;
      if (currentRenderedFrame.current === -1) {
        drawFrame(poster);
      }
    };

    // Preload key scene landmark frames so rapid jumps immediately have high-res visuals
    KEY_LANDMARKS.forEach((frameIdx) => preloadFrame(frameIdx));

    // Preload initial 25 frames
    for (let i = 0; i < 25; i++) {
      preloadFrame(i);
    }
  }, [prefersReducedMotion, drawFrame, preloadFrame]);

  // Handle Resize
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Re-render current frame or nearest or poster
      if (
        currentRenderedFrame.current !== -1 &&
        imageCache.current.has(currentRenderedFrame.current)
      ) {
        drawFrame(imageCache.current.get(currentRenderedFrame.current)!);
      } else if (posterImage.current) {
        drawFrame(posterImage.current);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion, drawFrame]);

  // Scroll listener
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollDist = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const p = Math.max(0, Math.min(1, scrollDist / totalScrollable));
      setProgress(p);

      const targetIdx = getTargetFrame(p);
      targetFrameRef.current = targetIdx;
      preloadWindow(targetIdx);

      if (targetIdx !== currentRenderedFrame.current) {
        if (imageCache.current.has(targetIdx)) {
          const img = imageCache.current.get(targetIdx)!;
          drawFrame(img);
          currentRenderedFrame.current = targetIdx;
        } else {
          // Find nearest loaded frame
          let nearestIdx = -1;
          let minDiff = 9999;
          for (const loadedIdx of imageCache.current.keys()) {
            const diff = Math.abs(loadedIdx - targetIdx);
            if (diff < minDiff) {
              minDiff = diff;
              nearestIdx = loadedIdx;
            }
          }
          if (nearestIdx !== -1) {
            drawFrame(imageCache.current.get(nearestIdx)!);
            currentRenderedFrame.current = nearestIdx;
          } else if (posterImage.current) {
            drawFrame(posterImage.current);
          }
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, preloadWindow, drawFrame]);

  // Calculate live opacities for the 4 settled scenes
  const opArrival = getSceneOpacity(progress, 0.0, 0.16);
  const opLivingRoom = getSceneOpacity(progress, 0.34, 0.50);
  const opFamilyCall = getSceneOpacity(progress, 0.60, 0.76);
  const opVeranda = getSceneOpacity(progress, 0.86, 1.0);

  // REDUCED MOTION ACCESSIBILITY FALLBACK
  if (prefersReducedMotion) {
    return (
      <section className="w-full bg-[#0E1B20] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B85338] block mb-3">
              SuhoG Project
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight mb-4">
              Growing older should still feel like living.
            </h1>
            <p className="text-base text-white/80 leading-relaxed">
              Care, companionship and connection for older people and the families who love them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Scene 1 */}
            <div className="bg-[#0E1B20]/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col gap-4 text-white">
              <img
                src="/frames/scene_arrival.webp"
                alt="Arrival at SuhoG setting"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <span className="text-xs font-mono text-[#B85338]">Arrival</span>
              <h2 className="font-editorial text-2xl font-medium">A welcoming, dignified home.</h2>
              <p className="text-sm text-white/75">
                Care, companionship and connection for older people and the families who love them.
              </p>
              <div className="pt-2 flex gap-3">
                <a
                  href="#contact"
                  className="bg-[#B85338] text-white px-5 py-2.5 rounded-full text-xs font-medium"
                >
                  Enquire about care for a parent
                </a>
              </div>
            </div>

            {/* Scene 2 */}
            <div className="bg-[#0E1B20]/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col gap-4 text-white">
              <img
                src="/frames/scene_livingroom.webp"
                alt="Living room companionship"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <span className="text-xs font-mono text-[#B85338]">Living Room</span>
              <h2 className="font-editorial text-2xl font-medium">A life is more than its needs.</h2>
              <p className="text-sm text-white/75">
                Familiar routines, quiet conversation and seeing every person as a whole human being.
              </p>
            </div>

            {/* Scene 3 */}
            <div className="bg-[#0E1B20]/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col gap-4 text-white">
              <img
                src="/frames/scene_familycall.webp"
                alt="Family video call across distance"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <span className="text-xs font-mono text-[#B85338]">Family Call</span>
              <h2 className="font-editorial text-2xl font-medium">Close, even from far away.</h2>
              <p className="text-sm text-white/75">
                Reassurance for families living abroad, bridging the distance with warmth, respect and attentive everyday presence.
              </p>
            </div>

            {/* Scene 4 */}
            <div className="bg-[#0E1B20]/40 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col gap-4 text-white">
              <img
                src="/frames/scene_veranda.webp"
                alt="Afternoon tea on the veranda"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <span className="text-xs font-mono text-[#B85338]">Veranda</span>
              <h2 className="font-editorial text-2xl font-medium">Room for every new day.</h2>
              <p className="text-sm text-white/75">
                Unrushed afternoons, tea with good company and the peaceful dignity of home.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="bg-[#0E1B20] border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium inline-block"
                >
                  Speak with SuhoG
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DYNAMIC PINNED SCROLL EXPERIENCE
  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480vh] bg-[#0A1215]"
      aria-label="Scroll-driven visual film of SuhoG care setting"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Pinned Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ================================================================ */}
        {/* SCENE 1: ARRIVAL (0 - 2.5s) */}
        {/* ================================================================ */}
        <div
          className="absolute left-4 right-4 sm:left-10 sm:right-auto lg:left-16 top-1/2 -translate-y-1/2 w-auto sm:max-w-lg lg:max-w-xl transition-opacity duration-300 z-10"
          style={{
            opacity: opArrival,
            pointerEvents: opArrival > 0.4 ? 'auto' : 'none',
            transform: `translateY(${(1 - opArrival) * 16}px)`,
          }}
        >
          <div className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 lg:p-10 bg-[#0A1418]/35 md:bg-[#0A1418]/30 backdrop-blur-md md:backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-white">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#E68A75] mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Support Home of God Project</span>
            </span>

            <h1 className="font-editorial text-2xl sm:text-4xl lg:text-[44px] leading-[1.15] font-normal text-white tracking-tight mb-3 sm:mb-4 film-headline">
              Growing older should still feel like living.
            </h1>

            <p className="text-xs sm:text-base text-white/95 leading-relaxed font-normal mb-6 sm:mb-8 max-w-md film-subtext">
              Care, companionship and connection for older people and the families who love them.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B85338] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-[#A34730] transition-colors shadow-lg active:scale-[0.98]"
              >
                <span>Enquire about care for a parent</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Explore SuhoG’s work</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 2: LIVING ROOM (8.5 - 12s) */}
        {/* ================================================================ */}
        <div
          className="absolute left-4 right-4 sm:left-10 sm:right-auto lg:left-16 top-1/2 -translate-y-1/2 w-auto sm:max-w-lg lg:max-w-xl transition-opacity duration-300 z-10"
          style={{
            opacity: opLivingRoom,
            pointerEvents: opLivingRoom > 0.4 ? 'auto' : 'none',
            transform: `translateY(${(1 - opLivingRoom) * 16}px)`,
          }}
        >
          <div className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 lg:p-10 bg-[#0A1418]/35 md:bg-[#0A1418]/30 backdrop-blur-md md:backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E68A75] block mb-2 sm:mb-3">
              Living Room Companionship
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal text-white tracking-tight mb-3 sm:mb-4 film-headline">
              A life is more than its needs.
            </h2>

            <p className="text-xs sm:text-base text-white/95 leading-relaxed font-normal mb-5 sm:mb-6 film-subtext">
              Familiar routines, quiet conversation and seeing every person as a whole human being.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-white/90 font-mono film-subtext">
              <span className="w-2 h-2 rounded-full bg-[#E68A75]" />
              <span>Unrushed daily presence &bull; Respect for personal independence</span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 3: FAMILY CALL (14.5 - 18.5s) */}
        {/* ================================================================ */}
        <div
          className="absolute left-4 right-4 sm:left-10 sm:right-auto lg:left-16 top-1/2 -translate-y-1/2 w-auto sm:max-w-lg lg:max-w-xl transition-opacity duration-300 z-10"
          style={{
            opacity: opFamilyCall,
            pointerEvents: opFamilyCall > 0.4 ? 'auto' : 'none',
            transform: `translateY(${(1 - opFamilyCall) * 16}px)`,
          }}
        >
          <div className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 lg:p-10 bg-[#0A1418]/35 md:bg-[#0A1418]/30 backdrop-blur-md md:backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E68A75] block mb-2 sm:mb-3">
              Family Connection
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal text-white tracking-tight mb-3 sm:mb-4 film-headline">
              Close, even from far away.
            </h2>

            <p className="text-xs sm:text-base text-white/95 leading-relaxed font-normal mb-5 sm:mb-6 film-subtext">
              Reassurance for families living abroad, bridging the distance with warmth, respect and attentive everyday presence.
            </p>

            <div className="text-[11px] sm:text-xs text-white/90 bg-white/[0.08] rounded-2xl p-3 sm:p-4 border border-white/10 max-w-md film-subtext">
              Giving sons and daughters living outside Nigeria dependable local support and peace of mind.
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SCENE 4: VERANDA (26.5 - 30.2s) */}
        {/* ================================================================ */}
        <div
          className="absolute left-4 right-4 sm:left-10 sm:right-auto lg:left-16 top-1/2 -translate-y-1/2 w-auto sm:max-w-lg lg:max-w-xl transition-opacity duration-300 z-10"
          style={{
            opacity: opVeranda,
            pointerEvents: opVeranda > 0.4 ? 'auto' : 'none',
            transform: `translateY(${(1 - opVeranda) * 16}px)`,
          }}
        >
          <div className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 lg:p-10 bg-[#0A1418]/35 md:bg-[#0A1418]/30 backdrop-blur-md md:backdrop-blur-lg border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E68A75] block mb-2 sm:mb-3">
              Peace &amp; Well-kept Surroundings
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] font-normal text-white tracking-tight mb-3 sm:mb-4 film-headline">
              Room for every new day.
            </h2>

            <p className="text-xs sm:text-base text-white/95 leading-relaxed font-normal mb-6 sm:mb-8 max-w-md film-subtext">
              Unrushed afternoons, tea with good company and the peaceful dignity of home.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#B85338] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#A34730] transition-colors shadow-lg active:scale-[0.98]"
            >
              <span>Speak with SuhoG</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scroll Nudge Indicator */}
        <div
          className="absolute bottom-8 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: progress < 0.05 ? 1 : 0 }}
        >
          <div className="flex flex-col items-center gap-1 text-white/80">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-medium">
              Scroll to explore
            </span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#E68A75]" />
          </div>
        </div>
      </div>
    </div>
  );
};
