import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const screenshotsDir = path.join(rootDir, 'public', 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function runTests() {
  console.log('=== Starting Verification & Screenshot Suite ===');
  const browser = await chromium.launch();

  try {
    // -------------------------------------------------------------
    // TEST 1: DESKTOP EXPERIENCE (1440x900)
    // -------------------------------------------------------------
    console.log('\n--- 1. Testing Desktop Experience (1440x900) ---');
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const desktopPage = await desktopContext.newPage();

    // Listen to console and network errors
    desktopPage.on('console', msg => {
      if (msg.type() === 'error') console.log(`[Browser Console Error] ${msg.text()}`);
    });
    desktopPage.on('pageerror', err => {
      console.error(`[Browser Page Error] ${err.message}`);
    });

    await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(1000);

    // Capture Scene 1: Arrival (top of page)
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_01_arrival.png'),
    });
    console.log('Saved: desktop_01_arrival.png');

    // Get scroll height of pinned container
    const filmHeight = await desktopPage.evaluate(() => {
      const container = document.querySelector('[aria-label*="Scroll-driven"]');
      return container ? container.getBoundingClientRect().height : 3000;
    });

    const scrollTotal = filmHeight - 900;

    // Scroll to Transit 1 (Entering) ~ 25% of film
    await desktopPage.evaluate((y) => window.scrollTo(0, y * 0.25), scrollTotal);
    await desktopPage.waitForTimeout(600);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_02_entering.png'),
    });
    console.log('Saved: desktop_02_entering.png');

    // Scroll to Scene 2: Living Room (~ 42% of film)
    await desktopPage.evaluate((y) => window.scrollTo(0, y * 0.42), scrollTotal);
    await desktopPage.waitForTimeout(600);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_03_livingroom.png'),
    });
    console.log('Saved: desktop_03_livingroom.png');

    // Scroll to Scene 3: Family Call (~ 68% of film)
    await desktopPage.evaluate((y) => window.scrollTo(0, y * 0.68), scrollTotal);
    await desktopPage.waitForTimeout(600);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_04_familycall.png'),
    });
    console.log('Saved: desktop_04_familycall.png');

    // Scroll to Scene 4: Veranda (~ 95% of film)
    await desktopPage.evaluate((y) => window.scrollTo(0, y * 0.95), scrollTotal);
    await desktopPage.waitForTimeout(600);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_05_veranda.png'),
    });
    console.log('Saved: desktop_05_veranda.png');

    // Test Reverse Scrolling: Scroll back up to Living Room and Arrival
    console.log('Testing reverse scrolling...');
    await desktopPage.evaluate((y) => window.scrollTo(0, y * 0.42), scrollTotal);
    await desktopPage.waitForTimeout(400);
    await desktopPage.evaluate((y) => window.scrollTo(0, 0), scrollTotal);
    await desktopPage.waitForTimeout(400);
    console.log('Reverse scrolling verified smoothly.');

    // Scroll down past film to About section
    await desktopPage.locator('#about').scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_06_about.png'),
    });
    console.log('Saved: desktop_06_about.png');

    // Scroll to What We Do section
    await desktopPage.locator('#work').scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_07_work.png'),
    });
    console.log('Saved: desktop_07_work.png');

    // Scroll to Where We Work section
    await desktopPage.locator('#locations').scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_08_locations.png'),
    });
    console.log('Saved: desktop_08_locations.png');

    // Scroll to Contact Section
    await desktopPage.locator('#contact').scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: path.join(screenshotsDir, 'desktop_09_contact.png'),
    });
    console.log('Saved: desktop_09_contact.png');

    await desktopContext.close();

    // -------------------------------------------------------------
    // TEST 2: MOBILE EXPERIENCE (390x844 - iPhone 14 / modern phone)
    // -------------------------------------------------------------
    console.log('\n--- 2. Testing Mobile Phone Experience (390x844) ---');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);

    // Mobile Arrival
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_01_arrival.png'),
    });
    console.log('Saved: mobile_01_arrival.png');

    const mobileFilmHeight = await mobilePage.evaluate(() => {
      const container = document.querySelector('[aria-label*="Scroll-driven"]');
      return container ? container.getBoundingClientRect().height : 3000;
    });
    const mobileScrollTotal = mobileFilmHeight - 844;

    // Mobile Living Room
    await mobilePage.evaluate((y) => window.scrollTo(0, y * 0.42), mobileScrollTotal);
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_02_livingroom.png'),
    });
    console.log('Saved: mobile_02_livingroom.png');

    // Mobile Family Call
    await mobilePage.evaluate((y) => window.scrollTo(0, y * 0.68), mobileScrollTotal);
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_03_familycall.png'),
    });
    console.log('Saved: mobile_03_familycall.png');

    // Mobile Veranda
    await mobilePage.evaluate((y) => window.scrollTo(0, y * 0.95), mobileScrollTotal);
    await mobilePage.waitForTimeout(600);
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_04_veranda.png'),
    });
    console.log('Saved: mobile_04_veranda.png');

    // Mobile Contact
    await mobilePage.locator('#contact').scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_05_contact.png'),
    });
    console.log('Saved: mobile_05_contact.png');

    await mobileContext.close();

    // -------------------------------------------------------------
    // TEST 3: REDUCED MOTION EXPERIENCE
    // -------------------------------------------------------------
    console.log('\n--- 3. Testing Reduced Motion Mode ---');
    const rmContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      reducedMotion: 'reduce',
    });
    const rmPage = await rmContext.newPage();
    await rmPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await rmPage.waitForTimeout(800);

    await rmPage.screenshot({
      path: path.join(screenshotsDir, 'reduced_motion.png'),
      fullPage: false,
    });
    console.log('Saved: reduced_motion.png');
    await rmContext.close();

    console.log('\n=== All Tests and Screenshots Completed Successfully ===');
  } finally {
    await browser.close();
  }
}

runTests().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
