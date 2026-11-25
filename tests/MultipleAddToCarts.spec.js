import { test, expect} from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";

test("demoWebLogin", async({page}) =>
{
    await page.goto(url);
    await page.locator(".ico-login").click();
    
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password);
    await page.locator(".login-button").click();

    await page.locator("a[href='/books']").first().click();

    await page.locator(".product-item").filter({hasText:"Health Book"})
    .locator(".product-box-add-to-cart-button").click();
 })