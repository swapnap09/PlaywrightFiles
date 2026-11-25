import { test, expect} from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";

test("ModernLocators", async({page}) =>
{
    await page.goto(url);
    await page.getByRole("link",{name:"Log in"}).click();
    
    await page.getByLabel("Email:").fill(email);
    await page.getByLabel("Password:").fill(password);
    await page.getByRole("button",{name:'Log in'}).click();
    
    let logout = await page.getByRole("link",{name:'Log out'});
    await expect(logout).toBeVisible();
    await page.waitForTimeout(3000);

    //click on books and navigate to books page
    await page.getByRole("link",{name: "Books "}).first().click();

    //click on add to cart book of HealthBook
    await page.locator(".product-item").filter({hasText :'Health Book'}).getByRole("button",{name: "Add to cart"}).click();

    //Write an assertion to check whether confirmation message is displayed

    let confirmationMsg = await page.getByText("The product has been added to your ");
    await expect(confirmationMsg).toBeVisible();
    
    //display the text in the confirmation message
    let displayMsg = await page.getByText("The product has been added to your ").textContent();
    console.log(displayMsg);
    





   
})
