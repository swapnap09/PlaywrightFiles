import {test, expect} from "@playwright/test";

test("Login Test2", async({page}) =>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();

    //Verify error message is displayed
    await page.locator("#error").isVisible();

    //Verify error message text is Your username is invalid!
    let error = await page.locator("#error");
    await expect(error).toHaveText("Your password is invalid!");
})