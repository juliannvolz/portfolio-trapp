import { test, expect } from '@playwright/test';

test.describe('Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
  });

  test.describe('mobile viewport', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('mobile menu opens and closes', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1500);

      const menuButton = page.locator('button[aria-label="Abrir menu"]');
      await expect(menuButton).toBeVisible();
      await menuButton.click();

      const mobileNav = page.locator('#mobile-nav, nav[aria-label="Menu mobile"]');
      await expect(mobileNav).toBeVisible();

      await menuButton.click();
      await expect(mobileNav).toBeHidden();
    });
  });

  test('lightbox opens on work click', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    const firstWork = page.locator('#acervo button').first();
    await expect(firstWork).toBeVisible();
    await firstWork.click();

    const lightbox = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(lightbox).toBeVisible({ timeout: 5000 });

    await page.keyboard.press('Escape');
    await expect(lightbox).toBeHidden();
  });

  test('portfolio filters work', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const muralFilter = page.locator('button:has-text("MURAIS")');
    await expect(muralFilter).toBeVisible();
    await muralFilter.click();

    const count = await page.locator('#acervo button').count();
    expect(count).toBeGreaterThan(0);
  });

  test('BeforeAfter slider works with mouse', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const slider = page.locator('#transformacao [role="slider"]');
    await expect(slider).toBeVisible();

    const box = await slider.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width * 0.8, box.y + box.height / 2);
      await page.mouse.up();

      const position = await slider.getAttribute('aria-valuenow');
      expect(parseInt(position || '0')).toBeGreaterThan(20);
    }
  });

  test('BeforeAfter slider works with keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const slider = page.locator('#transformacao [role="slider"]');
    await slider.focus();

    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');

    const position = await slider.getAttribute('aria-valuenow');
    expect(parseInt(position || '0')).toBeGreaterThanOrEqual(10);
  });

  test('SoundToggle toggles sound', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const soundToggle = page.locator('button[aria-label*="som"], button[aria-label*="Som"]').first();
    await expect(soundToggle).toBeVisible();

    const initialState = await soundToggle.getAttribute('aria-pressed');
    await soundToggle.click();
    const newState = await soundToggle.getAttribute('aria-pressed');

    expect(newState).not.toBe(initialState);
  });
});