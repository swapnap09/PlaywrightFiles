import {test,expect} from "@playwright/test";
let url ="https://vinothqaacademy.com/iframe/";

test("innerframes2",async({browser})=>
{
let context = await browser.newContext();
let page = await context.newPage();

await page.goto(url);

let frame3 = await page.frameLocator("iframe[title='Registration Form']");
await frame3.getByLabel("First Name  ").fill("Swapna");
await frame3.getByLabel("Last Name  ").fill("Rajapatruni");
await frame3.getByLabel("Female").click();
await frame3.getByLabel("Selenium WebDriver").click();
await frame3.getByLabel("Email  ").fill("swapna.potnuru06@gmail.com");
await frame3.getByLabel("Date of Demo ").click();
await frame3.locator(".ui-state-default.ui-state-highlight").click();
await frame3.getByLabel("Please enter two digits as displayed in Example ").fill("33");
await frame3.locator(".vfb-submit ").click();
await page.waitForTimeout(3000);
})