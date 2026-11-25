import { test, expect} from "@playwright/test";

test("demoWebLogin @DemoWebLogin", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("dadsangel@123");
    await page.locator(".login-button").click();
    //await page.locator(".ico-logout").isVisible();

    let logout = await page.locator(".ico-logout");
    await expect(logout).toBeVisible();

   
})
