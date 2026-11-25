import { test, expect} from "@playwright/test";

test.describe("group1",()=>
{
test("demoWebLogin", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

})
test("demoWebLogin1", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("test");
    await page.locator(".login-button").click();

    let message = await page.locator(".validation-summary-errors");
    await expect(message).toContainText("The credentials provided are incorrect");
})
})
test.describe("group2",()=>
{
test("demoWebLogin2", async({page}) =>
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
})
