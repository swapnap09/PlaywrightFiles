import { test, expect} from "@playwright/test";

test("demoWebLogin @DemoWebLogin", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("test");
    await page.locator(".login-button").click();

    let message = await page.locator(".validation-summary-errors");
    await expect(message).toContainText("The credentials provided are incorrect");

    

})