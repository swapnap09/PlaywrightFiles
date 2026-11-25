import { test, expect} from "@playwright/test";

let url = "https://testautomationpractice.blogspot.com/";
let email = "swapna.potnuru06@gmail.com";
let password = "Dadsangel@123";

test("ModernLocators", async({page}) =>
{
    await page.goto(url);
    // await page.getByPlaceholder("Enter Name").fill("swapna");
    // await page.getByPlaceholder("Enter EMail").fill("swapna.potnuru06@gmail.com");
    // await page.getByPlaceholder("Enter Phone").fill("9912890910")
    // await page.getByLabel("Address:").fill("Comments");
    // await page.getByLabel("Female").click();
    // await page.getByLabel("Sunday").click();
    // await page.getByLabel("Country:").selectOption("India");
    // await page.getByLabel("Colors:").selectOption(["Red","green","Yellow"]);
    // await page.waitForTimeout(3000);
    await page.locator("#singleFileInput").setInputFiles("tests/webtech_Questions.pdf");
    await page.locator("#multipleFilesInput").setInputFiles(["tests/webtech_Questions.pdf","tests/webtech_Questions1.pdf"]);
})