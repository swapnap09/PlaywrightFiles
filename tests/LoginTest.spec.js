import {test, expect} from "@playwright/test";

test("Login Test" , async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("Dadsangel@123");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click();

    //assertions
    let logout = await page.locator(".ico-logout");
    await expect(logout).toHaveText("Log out");
    
})