import {test,expect} from "@playwright/test";

let context;
let page;

test.beforeEach(async({browser})=>
{
context = await browser.newContext();
page = await context.newPage();
await page.goto("https://demowebshop.tricentis.com/");
await page.locator(".ico-login").click();
await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
await page.locator("#Password").fill("Dadsangel@123");
await page.waitForTimeout(3000);
await page.locator(".login-button").click();
})

test("books @reg",async()=>
{
    await page.locator("a[href='/books']").first().click();
    await page.locator("h2 a[href='/health']").click();
    await page.locator("#add-to-cart-button-22").click();
    let msg1 = await page.locator(".content");
    await expect(msg1).toContainText("The product has been added to your ");
})

test("shopping cart @reg",async()=>
{
    await page.locator("#topcartlink").click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/cart");
    let msg = await page.locator(".page-title")
    await expect(msg).toContainText("Shopping cart");
    await page.locator(".country-input").selectOption("India");
    await page.locator("#ZipPostalCode").fill("530046");
    await page.locator("#termsofservice").check();
    await page.locator("#checkout").click();
})