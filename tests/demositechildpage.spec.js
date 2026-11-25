import {test,expect} from "@playwright/test";

let url="https://practicetestautomation.com/courses/";

test("demo site child page @ChildPage",async({browser})=>
{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto(url);

    let [childpage]=await Promise.all([context.waitForEvent('page'),
    page.getByRole("link",{name: "Selenium WebDriver with Java: AI-Powered Test Automation"}).click()]);

    await childpage.getByText("Udemy Business").click();
    await childpage.waitForTimeout(3000);
    

})