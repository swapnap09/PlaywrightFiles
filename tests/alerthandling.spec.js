import { test,expect } from "@playwright/test";

let url="https://testautomationpractice.blogspot.com/";

// test("Simple Alert",async({page})=>
// {
//     page.on("dialog",(dialog) =>
//     {
//         dialog.accept();
//     })
//     await page.goto(url);
//     await page.getByRole("button",{name: "Simple Alert"}).click();
// })
// test("Confirmation Alert",async({page})=>
// {
//     page.on("dialog",(dialog) =>
//     {
//         dialog.dismiss();
//     })
//     await page.goto(url);
//     await page.getByRole("button",{name: "Confirmation Alert"}).click();
// })
test("Prompt Alert @AlertHandling",async({page})=>
{
    page.on("dialog",(dialog) =>
    {
        dialog.accept("swapna");
    })
    await page.goto(url);
    await page.getByRole("button",{name: "Prompt Alert"}).click();

    let msg=await page.locator("#demo");
    await expect(msg).toHaveText("Hello swapna! How are you today?");

    //shadow root handling
    await page.getByRole("button",{name:"Choose File"}).last().setInputFiles("tests/webtech_Questions.pdf");
    await page.waitForTimeout(8000);
    
})