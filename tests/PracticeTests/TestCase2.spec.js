// Test case 2: Negative username test
// Open page
// Type username incorrectUser into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your username is invalid!

import{test,expect} from "@playwright/test";

test("TestCase2",async({page})=>
{

await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator("#username").fill("incorrectUser");
await page.locator("#password").fill("Password123");
await page.locator("#submit").click();

// Verify error message is displayed

let error = await page.locator("#error");
await expect(error).toBeVisible();

// Verify error message text is Your username is invalid!
let errormsg = await page.locator("#error");
await expect(errormsg).toHaveText("Your username is invalid!");

})