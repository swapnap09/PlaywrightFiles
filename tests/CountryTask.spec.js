import { test, expect} from "@playwright/test";

test("demoWebLogin @CountryTask", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#country").selectOption("india");
    await page.locator("button[ondblclick='myFunction1()']").dblclick();

    await page.waitForTimeout(10000);

})
