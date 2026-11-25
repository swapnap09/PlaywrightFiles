import{test,expect} from"@playwright/test";

test("Launch browser2",async({browser}) =>
{
    let context = await browser.newContext();
    let page1 = await context.newPage();
    let page2 = await context.newPage();

    await page1.goto("https://demowebshop.tricentis.com/");
    await page1.waitForTimeout(3000);
    await page2.goto("https://practicetestautomation.com/practice-test-login/");
})