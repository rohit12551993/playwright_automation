import { test, expect } from '@playwright/test';
test("clickType",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[name="start"]').click();
    await page.locator('#name').fill("ROHIT MADAN IS A GOOD BOY")
   

})