import{test,expect} from '@playwright/test'
import { google } from '../PAGES/google'
test("google",async({page})=>{

    const a = new Google(page);
    await a.login();

})