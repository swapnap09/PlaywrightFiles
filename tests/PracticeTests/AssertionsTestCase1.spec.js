// Test case 1: Positive LogIn test
// Open page
// Type username student into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify new page URL contains practicetestautomation.com/logged-in-successfully/
// Verify new page contains expected text ('Congratulations' or 'successfully logged in')
// Verify button Log out is displayed on the new page

import {test,expect} from "@playwright/test";

test ("Assertions",async({page})=>
{
await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator("#username").fill("student");
await page.locator("#password").fill("Password123");
await page.locator("#submit").click();

//URL Assertion
// Verify new page URL contains practicetestautomation.com/logged-in-successfully/

await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

//Text Assertion
// Verify new page contains expected text ('Congratulations' or 'successfully logged in')

let msg  = await page.locator(".post-title");
await expect(msg).toHaveText("Logged In Successfully");

//Button Assertion
// Verify button Log out is displayed on the new page
let element = await page.locator(".wp-block-button__link");
await expect(element).toBeVisible();
})

