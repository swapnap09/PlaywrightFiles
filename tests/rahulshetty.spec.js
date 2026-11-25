import { test, expect} from "@playwright/test";

let url = "https://rahulshettyacademy.com/client/#/auth/login";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";

test("demoWebLogin", async({page}) =>
{
    await page.goto(url);
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    
    await page.locator("#login").click();

    let signout = await page.locator(".fa.fa-sign-out");
    await expect(signout).toBeVisible();
    
    await page.locator(".card").filter({hasText:"ZARA COAT 3"})
    .locator(".btn.w-10.rounded").click();

   let addedcart= await page.locator(".toast-container");
   await expect(addedcart).toBeVisible();

   await page.locator("button[routerlink='/dashboard/cart']").click();

   await page.locator(".btn-primary").last().click();

   await page.locator(".input.ddl").first().selectOption("05");
   await page.locator(".input.ddl").last().selectOption("23");

   await page.locator(".input[placeholder='Select Country']").pressSequentially("India");
   await page.locator(".ta-item").last().click();
   await page.waitForTimeout(1000);
   
   })
    
