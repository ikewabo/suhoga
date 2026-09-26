import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const videoPath = path.join(rootDir, 'assets', 'hero1.mp4');
const masterPngDir = path.join(rootDir, 'assets', 'frames_master_png');
const webpDir = path.join(rootDir, 'public', 'frames');

console.log('=== SuhoG Scroll Site: Frame Extraction & Optimization Pipeline ===');
console.log(`Video source: ${videoPath}`);

if (!fs.existsSync(videoPath)) {
  console.error(`Error: Video not found at ${videoPath}`);
  process.exit(1);
}

// 1. Ensure target directories exist
if (!fs.existsSync(masterPngDir)) {
  fs.mkdirSync(masterPngDir, { recursive: true });
}
if (!fs.existsSync(webpDir)) {
  fs.mkdirSync(webpDir, { recursive: true });
}

const FPS = 12; // 12 frames per second
const WIDTH = 1280;
const HEIGHT = 720;
const QUALITY = 72;

console.log(`\nStep 1: Extracting master PNG sequence at ${FPS} fps...`);
const extractPngCmd = `ffmpeg -y -i "${videoPath}" -vf "fps=${FPS}" "${path.join(masterPngDir, 'frame_%04d.png')}"`;
execSync(extractPngCmd, { stdio: 'inherit' });

const pngFiles = fs.readdirSync(masterPngDir).filter(f => f.endsWith('.png')).sort();
console.log(`Extracted ${pngFiles.length} master PNG frames.`);

console.log(`\nStep 2: Encoding optimized WebP frames (${WIDTH}x${HEIGHT}, quality ${QUALITY})...`);
const encodeWebpCmd = `ffmpeg -y -i "${videoPath}" -vf "fps=${FPS},scale=${WIDTH}:${HEIGHT}" -c:v libwebp -quality ${QUALITY} "${path.join(webpDir, 'frame_%04d.webp')}"`;
execSync(encodeWebpCmd, { stdio: 'inherit' });

const webpFiles = fs.readdirSync(webpDir).filter(f => f.endsWith('.webp') && f.startsWith('frame_')).sort();
console.log(`Encoded ${webpFiles.length} WebP frames.`);

console.log('\nStep 3: Extracting high-fidelity scene stills and poster...');
// Poster (First settled exterior arrival shot)
const posterCmd = `ffmpeg -y -ss 00:00:01.0 -i "${videoPath}" -vf "scale=${WIDTH}:${HEIGHT}" -vframes 1 -c:v libwebp -quality 85 -update 1 "${path.join(webpDir, 'poster.webp')}"`;
execSync(posterCmd, { stdio: 'inherit' });

// 4 Settled Scene Stills for reduced-motion and immediate display
const sceneArrivalCmd = `ffmpeg -y -ss 00:00:01.2 -i "${videoPath}" -vf "scale=${WIDTH}:${HEIGHT}" -vframes 1 -c:v libwebp -quality 85 -update 1 "${path.join(webpDir, 'scene_arrival.webp')}"`;
const sceneLivingRoomCmd = `ffmpeg -y -ss 00:00:10.5 -i "${videoPath}" -vf "scale=${WIDTH}:${HEIGHT}" -vframes 1 -c:v libwebp -quality 85 -update 1 "${path.join(webpDir, 'scene_livingroom.webp')}"`;
const sceneFamilyCallCmd = `ffmpeg -y -ss 00:00:15.8 -i "${videoPath}" -vf "scale=${WIDTH}:${HEIGHT}" -vframes 1 -c:v libwebp -quality 85 -update 1 "${path.join(webpDir, 'scene_familycall.webp')}"`;
const sceneVerandaCmd = `ffmpeg -y -ss 00:00:28.5 -i "${videoPath}" -vf "scale=${WIDTH}:${HEIGHT}" -vframes 1 -c:v libwebp -quality 85 -update 1 "${path.join(webpDir, 'scene_veranda.webp')}"`;

execSync(sceneArrivalCmd, { stdio: 'inherit' });
execSync(sceneLivingRoomCmd, { stdio: 'inherit' });
execSync(sceneFamilyCallCmd, { stdio: 'inherit' });
execSync(sceneVerandaCmd, { stdio: 'inherit' });

console.log('\nStep 4: Calculating payload metrics and writing manifest.json...');
let totalWebpBytes = 0;
for (const file of webpFiles) {
  const stat = fs.statSync(path.join(webpDir, file));
  totalWebpBytes += stat.size;
}

const avgFrameBytes = Math.round(totalWebpBytes / (webpFiles.length || 1));
const totalMb = (totalWebpBytes / (1024 * 1024)).toFixed(2);

const manifest = {
  version: '1.0.0',
  fps: FPS,
  totalFrames: webpFiles.length,
  durationSeconds: +(webpFiles.length / FPS).toFixed(2),
  dimensions: { width: WIDTH, height: HEIGHT },
  quality: QUALITY,
  totalBytes: totalWebpBytes,
  totalMegabytes: +totalMb,
  avgFrameBytes,
  framePattern: '/frames/frame_%04d.webp',
  frames: webpFiles.map(f => `/frames/${f}`),
  stills: {
    poster: '/frames/poster.webp',
    arrival: '/frames/scene_arrival.webp',
    livingRoom: '/frames/scene_livingroom.webp',
    familyCall: '/frames/scene_familycall.webp',
    veranda: '/frames/scene_veranda.webp'
  },
  scenes: [
    {
      id: 'arrival',
      name: 'Arrival & Welcome',
      startTime: 0.0,
      endTime: 2.5,
      startFrame: 0,
      endFrame: Math.min(30, webpFiles.length - 1),
      heading: 'Growing older should still feel like living.',
      subheading: 'Care, companionship and connection for older people and the families who love them.',
      primaryCta: { label: 'Enquire about care for a parent', href: '#contact' },
      secondaryCta: { label: 'Explore SuhoG’s work', href: '#work' }
    },
    {
      id: 'entering',
      name: 'Entering the Home',
      startTime: 2.5,
      endTime: 8.5,
      startFrame: 30,
      endFrame: Math.min(102, webpFiles.length - 1),
      heading: null,
      subheading: null
    },
    {
      id: 'livingroom',
      name: 'Living Room Companionship',
      startTime: 8.5,
      endTime: 12.0,
      startFrame: 102,
      endFrame: Math.min(144, webpFiles.length - 1),
      heading: 'A life is more than its needs.',
      subheading: 'Familiar routines, quiet conversation and seeing every person as a whole human being.'
    },
    {
      id: 'approaching',
      name: 'Approaching the Call',
      startTime: 12.0,
      endTime: 14.5,
      startFrame: 144,
      endFrame: Math.min(174, webpFiles.length - 1),
      heading: null,
      subheading: null
    },
    {
      id: 'familycall',
      name: 'Family Connection',
      startTime: 14.5,
      endTime: 18.5,
      startFrame: 174,
      endFrame: Math.min(222, webpFiles.length - 1),
      heading: 'Close, even from far away.',
      subheading: 'Reassurance for families living abroad, bridging distances with warmth and attentive daily presence.'
    },
    {
      id: 'transiting',
      name: 'Transitioning to the Veranda',
      startTime: 18.5,
      endTime: 26.5,
      startFrame: 222,
      endFrame: Math.min(318, webpFiles.length - 1),
      heading: null,
      subheading: null
    },
    {
      id: 'veranda',
      name: 'Veranda & Peace',
      startTime: 26.5,
      endTime: 30.17,
      startFrame: 318,
      endFrame: webpFiles.length - 1,
      heading: 'Room for every new day.',
      subheading: 'Dignified community life in a peaceful, supportive environment.',
      primaryCta: { label: 'Speak with SuhoG', href: '#contact' }
    }
  ]
};

fs.writeFileSync(
  path.join(webpDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf-8'
);

console.log(`Manifest written to ${path.join(webpDir, 'manifest.json')}`);
console.log(`Total payload for all ${webpFiles.length} frames: ${totalMb} MB (Average ${Math.round(avgFrameBytes / 1024)} KB/frame)`);
console.log('=== Frame extraction & encoding complete ===');
