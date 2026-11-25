import {test,expect} from"@playwright/test";

test("Frames Practice",async({browser})=>
{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Frames.html");
    let SingleFrame = await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"});

    await SingleFrame.getByRole("textbox").fill("swapna");

})