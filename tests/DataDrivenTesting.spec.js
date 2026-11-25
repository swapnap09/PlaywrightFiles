import { test, expect} from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";
let product = ["book","computer","jewelry","gift card"];

for(let item of product)
{
test(`search for product ${item} @DataDrivenTesting`, async({page}) =>
{
    await page.goto(url);
    await page.getByRole("link",{name:"Log in"}).click();
    await page.getByLabel("Email:").fill(email);
    await page.getByLabel("Password:").fill(password);
    await page.getByRole("button",{name:'Log in'}).click();
    await page.locator("#small-searchterms").fill(item);
    await page.getByRole("button",{name: "Search"}).click();
    await page.waitForTimeout(5000); 
});
}