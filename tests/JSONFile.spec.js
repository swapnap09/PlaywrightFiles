import{test,expect} from "@playwright/test";
import fs from "fs";

let url = "https://demowebshop.tricentis.com/";
let jsonPath = "TestData/Data.json";
let loginData = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

for(let {email,password} of loginData)
{
test(`login for user ${email}`, async({page}) =>
{
    await page.goto(url);
    await page.getByRole("link",{name:"Log in"}).click();
    await page.getByLabel("Email:").fill(email);
    await page.getByLabel("Password:").fill(password);
    await page.getByRole("button",{name:'Log in'}).click();
    
    let logout = await page.getByRole("link",{name:'Log out'});
    await expect(logout).toBeVisible();
    await page.waitForTimeout(5000);
    
});
}
