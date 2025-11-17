import {test,expect} from '@playwright/test'

test("demo",async({page})=>{

    await page.goto("https://www.makemytrip.com/");

   // await page.locator("data-cy=closeModal").click();

   await page.locator("#fromCity").click();

   await page.locator("[placeholder=From]").fill("Mumbai")

   await page.locator("id=react-autowhatever-1-section-0-item-0").click();

   await page.locator("#toCity").click();

   await page.locator("placeholder=To").fill("Delhi");


/*await page.locator("[id=react-autowhatever-1-section-0-item-0]").click();

await page.locator("id=departure").click();



  const today = new Date();
  today.setDate(today.getDate()+2);

  await page.locator(today).click();*/



    


})