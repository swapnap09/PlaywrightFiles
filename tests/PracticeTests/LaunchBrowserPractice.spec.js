import {test,expect} from "@playwright/test";

test("launchBrowser",async({page}) =>
{
 await page.goto("https://demowebshop.tricentis.com/");
 await page.waitForTimeout(3000);
})