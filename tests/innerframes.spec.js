import {test,expect} from "@playwright/test";
let url="https://demo.automationtesting.in/Frames.html";

test("another frame handling",async({browser}) =>
{
let context = await browser.newContext();
let page = await context.newPage();
await page.goto(url);
await page.getByRole("link",{name : "Iframe with in an Iframe"}).click();

let mainFrame = await page.frame({url: "https://demo.automationtesting.in/MultipleFrames.html"});
let multiFrames =await mainFrame.childFrames();

let childFrame1 = await multiFrames[0];
 await childFrame1.getByRole("textbox").fill("Swapna");
 await childFrame1.waitForTimeout(4000);

})
