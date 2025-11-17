const { test, expect } = require('@playwright/test');

test('homepage', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Wait for the page title and URL to resolve (they are promises)
  const title = await page.title();
  console.log('Title:', title);

  const url = page.url(); // This is not a promise, no need for await
  console.log('URL:', url);

  await page.close();
});
