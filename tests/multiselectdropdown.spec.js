import{test,expect} from '@playwright/test'
test("multi select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#colors').selectOption(['Blue' , 'Red'])

    await page.waitForTimeout(5000)

})