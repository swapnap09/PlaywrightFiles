import { test, expect} from "@playwright/test";

test("demoWebLogin", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("Dadsangel@123");
    await page.locator(".login-button").click();
    
    await page.locator("a[href='/books']").first().click();
   
})