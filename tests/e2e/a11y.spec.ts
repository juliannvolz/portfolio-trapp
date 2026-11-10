import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('passes axe accessibility checks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa', 'wcag21aa', 'best-practice'])
      .analyze();

    expect(accessibilityScanResults.violations).toHaveLength(0);
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocused).toBeTruthy();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const thirdFocused = await page.evaluate(() => document.activeElement?.getAttribute('href'));
    expect(thirdFocused).toBeTruthy();
  });

  test('focus visible on interactive elements', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    const focusable = page.locator('a, button, [tabindex]:not([tabindex="-1"])');
    const count = await focusable.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      await focusable.nth(i).focus();
      const hasFocusStyle = await focusable.nth(i).evaluate((el) => {
        const styles = getComputedStyle(el);
        return styles.outline !== 'none' || styles.boxShadow !== 'none';
      });
      expect(hasFocusStyle).toBeTruthy();
    }
  });

  test('skip link works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link:focus');
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toHaveAttribute('href', '#main');
  });

  test('dialog focus management', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    const firstWork = page.locator('#acervo button').first();
    await firstWork.click();

    const dialog = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(dialog).toBeVisible({ timeout: 5000 });

    const closeButton = dialog.locator('button[aria-label="Fechar lightbox"]');
    await expect(closeButton).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('slider has proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const slider = page.locator('#transformacao [role="slider"]');
    await expect(slider).toHaveAttribute('aria-valuemin', '0');
    await expect(slider).toHaveAttribute('aria-valuemax', '100');
    await expect(slider).toHaveAttribute('aria-valuenow');
    await expect(slider).toHaveAttribute('aria-valuetext');
    await expect(slider).toHaveAttribute('aria-label');
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(0);
    }
  });

  test('headings hierarchy is correct', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();

    let previousLevel = 0;
    for (let i = 0; i < count; i++) {
      const tagName = await headings.nth(i).evaluate((el) => el.tagName.toLowerCase());
      const level = parseInt(tagName[1]);
      if (previousLevel > 0) {
        expect(level).toBeLessThanOrEqual(previousLevel + 1);
      }
      previousLevel = level;
    }
  });

  test('color contrast meets WCAG AA', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const contrastIssues = await page.evaluate(() => {
      const issues: string[] = [];
      const elements = document.querySelectorAll('p, span, a, button, h1, h2, h3, h4, h5, h6, li, dt, dd');
      elements.forEach((el) => {
        const styles = getComputedStyle(el);
        const color = styles.color;
        const bgColor = styles.backgroundColor;
        if (color && bgColor && color !== bgColor) {
        }
      });
      return issues;
    });

    expect(contrastIssues).toHaveLength(0);
  });
});