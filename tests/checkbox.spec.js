import { test, expect } from '@playwright/test';

test("checkbox", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const sundayCheckbox = page.locator('#sunday');

  await sundayCheckbox.check();
  await page.waitForTimeout(5000);

  if (await sundayCheckbox.isChecked()) {
    await sundayCheckbox.uncheck();
  }

  await expect(sundayCheckbox).toBeVisible();
});
