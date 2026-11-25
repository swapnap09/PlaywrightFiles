import { test , expect} from "@playwright/test";

test ("Login Test1", async({page}) =>
{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    //await page.waitForTimeout(5000);
    await page.locator("#submit").click();

    //Verify new page URL contains practicetestautomation.com/logged-in-successfully/
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

    //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    let message = await page.locator(".post-title");
    await expect(message).toContainText("Successfully");

    //Verify button Log out is displayed on the new page
    let logout = await page.locator(".wp-block-button__link");
    await expect(logout).toBeVisible();

})