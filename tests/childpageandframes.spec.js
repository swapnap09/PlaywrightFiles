import { test,expect } from "@playwright/test";
//let url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
//let url="https://ui.vision/demo/iframes";
let url="https://demo.automationtesting.in/Frames.html";

test("Child page @ChildPage",async({browser})=>
{
let context = await browser.newContext();
let page = await context.newPage();
await page.goto(url);

let [childpage] = await Promise.all([context.waitForEvent('page'),
page.getByRole("link",{name:"OrangeHRM, Inc"}).click()]);

await childpage.getByRole("button",{name: "Contact Sales"}).click();
await childpage.waitForTimeout(4000);

})

test("frame handling @FrameHandling",async({browser}) =>
{
let context = await browser.newContext();
let page = await context.newPage();

await page.goto(url);

let frame1 = await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"});
await frame1.locator(".AB7Lab.Id5V1").first().click();
await page.setDefaultTimeout(3000);
})

test.only("another frame handling @FrameHandling",async({browser}) =>
{
let context = await browser.newContext();
let page = await context.newPage();
await page.goto(url);
let frame2 = await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"});
await frame2.locator("input[type=text]").fill("swapna");
await page.waitForTimeout(3000);
})
