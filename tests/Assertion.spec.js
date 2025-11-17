import{test,expect} from '@playwright/test';

test("Assertion",async({page})=>{
    await page.goto('https://www.google.com/');
    let logo = page.locator('[class="lnXdpd"]');
    await expect(logo).toBeVisiblee();
    
    

})