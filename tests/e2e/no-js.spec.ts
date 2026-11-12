import { test, expect } from '@playwright/test';

test.describe('No-JS fallback', () => {
  test.use({ javaScriptEnabled: false });

  test('content visible without JavaScript', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('header a[aria-label="Ruan Trapp - Início"]')).toBeVisible();
  });

  test('navigation accessible without JS', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav.mobile-nav').first();
    await expect(nav).toBeVisible();
  });

  test('BeforeAfter fallback visible without JS', async ({ page }) => {
    await page.goto('/');
    const beforeAfter = page.locator('#transformacao .ba-fallback, #transformacao [role="img"]');
    await expect(beforeAfter.first()).toBeVisible();
  });
});