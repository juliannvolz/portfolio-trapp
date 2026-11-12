import { test, expect } from '@playwright/test';

test.describe.skip('Visual regression screenshots (disabled - needs baseline snapshots)', () => {
  const viewports = [
    { width: 375, height: 667, name: 'mobile-375' },
    { width: 390, height: 844, name: 'mobile-390' },
    { width: 768, height: 1024, name: 'tablet-768' },
    { width: 1024, height: 768, name: 'desktop-1024' },
    { width: 1440, height: 900, name: 'desktop-1440' },
    { width: 1920, height: 1080, name: 'desktop-1920' },
  ];

  for (const vp of viewports) {
    test(`full page screenshot at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      await expect(page).toHaveScreenshot(`home-${vp.name}.png`, {
        fullPage: true,
        animations: 'disabled',
        threshold: 0.2,
      });
    });

    test(`above fold screenshot at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      await expect(page.locator('header, #inicio').first()).toHaveScreenshot(`above-fold-${vp.name}.png`, {
        animations: 'disabled',
        threshold: 0.2,
      });
    });
  }
});