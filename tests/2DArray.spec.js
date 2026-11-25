import { test, expect} from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let users = [["bharat1234@gmail.com" , "Bharat@123"] ,
["swapna.potnuru07@gmail.com" , "Password@123"] ,
["himanitest@gmail.com" , "htest@123"] ,
["renukamani1999@gmail.com" , "Renuka@1499"],
["sontest123@gmail.com" , "sontest123"],
["manojrasetty2005@gmail.com" , "manoj@012"],
["manishmarley222gmail.com" , "mani1316"],
["pradeeshp034@gmail.com" , "pradeeshp03"]]

for(let [email,password] of users)
{
test(`login for user ${email} @2Darray`, async({page}) =>
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