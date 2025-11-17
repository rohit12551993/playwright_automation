import {test,expect} from '@playwright/test'

test("drag and drop" , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#draggable').dragTo(page.locator('#droppable'));


     await page.locator('#draggable').screenshot();
    



    

})