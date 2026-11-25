import { test, expect} from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";

test("ModernLocators", async({page}) =>
{
    await page.goto(url);
    //await page.screenshot({path : "screen1.jpg"});
   // await page.screenshot({path : "screen2.jpg", fullPage :true});
    await page.getByRole("img",{name : "Tricentis Demo Web Shop"}).screenshot({path : "screenshots/screen3.png"});
})