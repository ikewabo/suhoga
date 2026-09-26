import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const screenshotsDir = path.join(rootDir, 'public', 'screenshots', 'agriculture');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function runAgricultureTests() {
  console.log('=== Starting Agriculture Verification & Screenshot Suite ===');
  const browser = await chromium.launch();

  const errors = [];

  try {
    // -------------------------------------------------------------
    // TEST 1: DESKTOP /agriculture (1440x900)
    // -------------------------------------------------------------
    console.log('\n--- 1. Testing Desktop /agriculture (1440x900) ---');
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const page = await desktopContext.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(`[Console Error] ${msg.text()}`);
        errors.push(`Console error: ${msg.text()}`);
      }
    });
    page.on('pageerror', err => {
      console.error(`[Page Error] ${err.message}`);
      errors.push(`Page error: ${err.message}`);
    });

    await page.goto('http://localhost:3000/agriculture', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Hero screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, 'desktop_01_agriculture_hero.png'),
    });
    console.log('Saved: desktop_01_agriculture_hero.png');

    // Scroll to From Ground Up
    const groundUp = page.locator('#from-the-ground-up');
    if (await groundUp.count() > 0) {
      await groundUp.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_02_ground_up.png'),
      });
      console.log('Saved: desktop_02_ground_up.png');
    }

    // Scroll to Work Started
    const workStarted = page.locator('#work-started');
    if (await workStarted.count() > 0) {
      await workStarted.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_03_work_started.png'),
      });
      console.log('Saved: desktop_03_work_started.png');
    }

    // Scroll to Ecosystem
    const ecosystem = page.locator('#ecosystem');
    if (await ecosystem.count() > 0) {
      await ecosystem.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_04_ecosystem.png'),
      });
      console.log('Saved: desktop_04_ecosystem.png');
    }

    // Scroll to Soap to Soil
    const soapToSoil = page.locator('#soap-to-soil');
    if (await soapToSoil.count() > 0) {
      await soapToSoil.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_05_soap_to_soil.png'),
      });
      console.log('Saved: desktop_05_soap_to_soil.png');
    }

    // Scroll to Impact Cycle
    const impactCycle = page.locator('#impact-cycle');
    if (await impactCycle.count() > 0) {
      await impactCycle.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_06_impact_cycle.png'),
      });
      console.log('Saved: desktop_06_impact_cycle.png');
    }

    // Scroll to Partner Section
    const partner = page.locator('#partner');
    if (await partner.count() > 0) {
      await partner.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_07_partner_form.png'),
      });
      console.log('Saved: desktop_07_partner_form.png');
    }

    // -------------------------------------------------------------
    // TEST 2: HOMEPAGE GATEWAY SECTION
    // -------------------------------------------------------------
    console.log('\n--- 2. Testing Homepage Gateway Section ---');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const gatewayHeading = page.getByRole('heading', { name: /A New Seed of/i });
    if (await gatewayHeading.count() > 0) {
      await gatewayHeading.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(screenshotsDir, 'desktop_08_homepage_gateway.png'),
      });
      console.log('Saved: desktop_08_homepage_gateway.png');
    } else {
      console.warn('Gateway heading not found on homepage!');
      errors.push('Homepage gateway heading not found');
    }

    // -------------------------------------------------------------
    // TEST 3: MOBILE EXPERIENCE (390x844)
    // -------------------------------------------------------------
    console.log('\n--- 3. Testing Mobile Experience (390x844) ---');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();

    await mobilePage.goto('http://localhost:3000/agriculture', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);

    await mobilePage.screenshot({
      path: path.join(screenshotsDir, 'mobile_01_hero.png'),
    });
    console.log('Saved: mobile_01_hero.png');

    // Open mobile menu
    const menuBtn = mobilePage.getByRole('button', { name: /open menu/i });
    if (await menuBtn.count() > 0) {
      await menuBtn.click();
      await mobilePage.waitForTimeout(400);
      await mobilePage.screenshot({
        path: path.join(screenshotsDir, 'mobile_02_nav_menu.png'),
      });
      console.log('Saved: mobile_02_nav_menu.png');
      // Close menu
      const closeBtn = mobilePage.getByRole('button', { name: /close menu/i }).first();
      if (await closeBtn.count() > 0) await closeBtn.click();
      await mobilePage.waitForTimeout(300);
    }

    // Scroll down to mobile ecosystem
    const mobileEcosystem = mobilePage.locator('#ecosystem');
    if (await mobileEcosystem.count() > 0) {
      await mobileEcosystem.scrollIntoViewIfNeeded();
      await mobilePage.waitForTimeout(500);
      await mobilePage.screenshot({
        path: path.join(screenshotsDir, 'mobile_03_ecosystem.png'),
      });
      console.log('Saved: mobile_03_ecosystem.png');
    }

    // Scroll down to mobile impact cycle
    const mobileCycle = mobilePage.locator('#impact-cycle');
    if (await mobileCycle.count() > 0) {
      await mobileCycle.scrollIntoViewIfNeeded();
      await mobilePage.waitForTimeout(500);
      await mobilePage.screenshot({
        path: path.join(screenshotsDir, 'mobile_04_impact_cycle.png'),
      });
      console.log('Saved: mobile_04_impact_cycle.png');
    }

    console.log('\n=== Verification Summary ===');
    if (errors.length === 0) {
      console.log('SUCCESS: All agriculture tests passed with 0 errors!');
    } else {
      console.log(`Completed with ${errors.length} issue(s):`);
      errors.forEach(e => console.log(' - ' + e));
    }
  } catch (err) {
    console.error('Test execution failed:', err);
  } finally {
    await browser.close();
  }
}

runAgricultureTests();
