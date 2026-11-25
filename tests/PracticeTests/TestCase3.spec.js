// Test case 3: Negative password test
// Open page
// Type username student into Username field
// Type password incorrectPassword into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your password is invalid!

import{test,expect} from "@playwright/test";

test("TestCase3", async({page})=>
{
await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator("#username").fill("student");
await page.locator("#password").fill("incorrectPassword");
await page.locator("#submit").click();

// Verify error message is displayed

let error = await page.locator("#error");
await expect(error).toBeVisible();

// Verify error message text is Your username is invalid!
let errormsg = await page.locator("#error");
await expect(errormsg).toHaveText("Your password is invalid!");
})