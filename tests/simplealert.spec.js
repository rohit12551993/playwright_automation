import{test,expect} from '@playwright/test';

test("simple alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog',async dialog =>{
     
     await dialog.accept();
     await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);

    await page.locator('#alertBtn').

})

   

})