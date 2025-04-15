import { test, expect } from '@playwright/test';

test('index page', async ({ page }) => {
  await page.goto('http://localhost:8080');

  const pageSign = page.locator('svg');

  await expect(pageSign).toHaveText('PORTFOLIO');
});
