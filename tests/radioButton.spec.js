import {test,expect} from '@playwright/test'

test("radio buttons",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#male').check();
   
    await page.waitForTimeout(5000);
    

})
