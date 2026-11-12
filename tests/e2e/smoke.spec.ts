import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('page loads with correct title and H1', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ruan Trapp/);
    await expect(page.locator('h1, .hero-title')).toContainText('RUAN TRAPP');
  });

  test('CTAs present and link to WhatsApp', async ({ page }) => {
    await page.goto('/');
    // Check for WhatsApp links that are visible (not in hidden mobile nav)
    const whatsappLinks = page.locator('a[href*="wa.me/554792242056"]:visible');
    await expect(whatsappLinks.first()).toBeVisible();
    await expect(whatsappLinks.first()).toHaveAttribute('href', /wa\.me\/554792242056/);
  });

  test('Instagram link present', async ({ page }) => {
    await page.goto('/');
    const instagramLink = page.locator('a[href*="instagram.com/ruantrapp"]').first();
    await expect(instagramLink).toBeVisible();
  });

  test('no console errors (excluding 404 for missing images)', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('404')) {
        errors.push(msg.text());
      }
    });
    page.on('pageerror', (err) => {
      errors.push(err.message);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    expect(errors).toHaveLength(0);
  });
});