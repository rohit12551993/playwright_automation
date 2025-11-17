import { test, expect } from '@playwright/test';

test("Locators", async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill("rohitmadan1993@gmail.com");
  await page.locator('#loginpassword').fill("Password@123");

  const button = page.locator('button[onclick="logIn()"]');
  await expect(button).toBeVisible(); // ✅ Fix: add () to toBeVisible
});
