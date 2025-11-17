import {test,expect} from '@playwright/test'
test("input box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    let inputbox =  page.locator('#name')
     await expect(inputbox).toBeVisible();


    await page.locator('#name').fill("rohit madan")

})