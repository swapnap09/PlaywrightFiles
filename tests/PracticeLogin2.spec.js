import {test, expect} from "@playwright/test";

test("Login Test2", async({page}) =>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUser");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    //Verify error message is displayed
    let error = await page.locator("#error");
    await expect(error).toBeVisible();

    //Verify error message text is Your username is invalid!
    let errormsg = await page.locator("#error");
    await expect(errormsg).toHaveText("Your username is invalid!");
})