import { test, expect } from '@playwright/test';
test("practice",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.locator("[id='name']").click();
    await  page.waitForTimeout(3000);

   let name =  await page.locator("[id='name']");
   await name.fill("kanika madan")

    await page.locator('[id="male"]').click();

    await page.locator('[id="female"]').click();

    await page.locator('[id="sunday"]').check();

    await page.locator('[id="monday"]').check();

    await page.locator('[id="sunday"]').uncheck();

    await page.locator('[id="country"]').selectOption("Brazil");

    await page.locator('#colors').selectOption(["Red","Blue"]);


    await page.locator('[class="dropbtn"]').hover();
    await page.locator('[class="dropbtn"]').dblclick
    

   
    await page.locator('[id="alertBtn"]').click();




page.on('dialog',dialog=>dialog.dismiss());
await page.locator('[id="confirmBtn"]').click();





  await  page.waitForTimeout(4000);
  

  
  




    

    



    

})