import { test, expect } from '@playwright/test';

test.describe('Reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('no flash animations when reduced motion', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const flashElements = await page.locator('.fixed.inset-0.z-\\[100\\]').count();
    expect(flashElements).toBe(0);
  });

  test('no pinned sections when reduced motion', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const pinnedElements = await page.locator('[style*="position: fixed"][style*="top: 0"]').count();
    expect(pinnedElements).toBe(0);
  });
});