

//================================================================
// Test Case 14: Place Order: Register while Checkout
import { test, expect} from "@playwright/test";

let url = "http://automationexercise.com";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";
let Uname  = "Swapna Rajapatruni";

test("ModernLocators", async({page}) =>
{
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await page.goto(url);
    //3. Verify that home page is visible successfully
    let logo = await page.getByRole("img",{name : "Website for automation practice"});
    await expect(logo).toBeVisible();
    //4. Add products to cart
    await page.locator(".single-products").filter({ hasText:"Blue Top"}).locator(".btn.btn-default.add-to-cart").first().click();
    //5. Click 'Cart' button
    await page.locator("a[href='/view_cart']").last().click();
    //6. Verify that cart page is displayed
    let cartpage = await page.getByText("Shopping Cart");
    await expect(cartpage).toBeVisible();
    //7. Click Proceed To Checkout
    //await page.getByRole("link",{name:'Proceed To Checkout'}).click();
    await page.locator(".btn.btn-default.check_out").click();
    //8. Click 'Register / Login' button
    await page.getByText("Register / Login").last().click();
    //9. Fill all details in Signup and create account
    await page.getByPlaceholder("Name").fill(Uname);
    await page.locator("input[data-qa='signup-email']").fill(email);
    await page.getByRole("button",{name: "Signup"}).click();

    //Enter Account information page filling details
    await page.getByRole("radio",{name:"Mrs"}).click();
    await page.getByLabel("Password ").fill(password);
    await page.locator("#days").selectOption("23");
    await page.locator("#months").selectOption("May");
    await page.locator("#years").selectOption("1986");
    await page.getByLabel("Sign up for our newsletter!").click();
    await page.getByLabel("Receive special offers from our partners!").click();
    //Filling Address Information

    await page.getByLabel("First name ").fill("Swapna");
    await page.getByLabel("Last name ").fill("rajapatruni");

    let Address = await page.getByLabel("Address ").first().fill("MSR Silicon Spring");
    await page.getByLabel("Country ").selectOption("India");
    //await page.locator("#country").selectOption("India");

    await page.getByLabel("State ").fill("Karnataka");
    await page.getByLabel("City ").fill("Bengaluru");
    // as label zipcode is pointing to city we are using locator
    await page.locator("#zipcode").fill("560067");
    await page.getByLabel("Mobile Number ").fill("9912890910");
    await page.getByRole("button",{name: "Create Account"}).click();

    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    let accountcreation=await page.getByText("Account Created!");
    await expect(accountcreation).toBeVisible();
    await page.getByRole("button", {name:'Continue'}).click();
    // 11. Verify ' Logged in as username' at top
    let loggedin = await page.getByText("Logged in as ");
    await expect(loggedin).toBeVisible();
    let username= await page.getByText("Swapna Rajapatruni");
    await expect(username).toContainText(Uname);
    // 12.Click 'Cart' button
    await page.locator("a[href='/view_cart']").last().click();
    // 13. Click 'Proceed To Checkout' button
    await page.locator(".btn.btn-default.check_out").click();
    // 14. Verify Address Details and Review Your Order
    let verifyaddress=await page.getByText("Msr silicon spring");
    await expect(verifyaddress).toContainText(Address);
    // 15. Enter description in comment text area and click 'Place Order'
    await page.locator(".form-control").fill("comments");
    await page.getByRole("button",{name: "Place Order"}).click();
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator("input[name='name_on_card']").fill("Swapna Rajapatruni");
    await page.locator(".form-control.card-number").fill("12345678");
    await page.locator(".form-control.card-cvc").fill("123");
    await page.locator(".form-control.card-expiry-month").fill("03");
    await page.locator(".form-control.card-expiry-year").fill("2029");
    // 17. Click 'Pay and Confirm Order' button
    await page.getByRole("button",{name : "Pay and Confirm Order"}).click();
    // 18. Verify success message 'Your order has been placed successfully!
    let ordersuccess = await page.getByText("Order Placed!");
    await expect(ordersuccess).toBeVisible();
    // 19. Click 'Delete Account' button
    await page.getByRole("link",{name: " Delete Account"}).click();
    //await page.locator("a[href='/delete_account']").click();
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    let accountdeleted=await page.getByText("Account Deleted!");
    await expect(accountdeleted).toBeVisible();
    await page.getByRole("link",{name:"Continue"}).click();











})