import{test,expect} from "@playwright/test";

test("keyboard actions",async({page})=>
{
    await page.goto("https://www.playwrightautomation.com/practice.html");
    await page.getByPlaceholder("Enter your name").fill("swapna");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(3000);
    
})