const {test : Base} = require("@playwright/test");

export const test =Base.extend({
    WebPage : async({page}, use) =>
    {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("swapna.potnuru06@gmail.com");
    await page.locator("#Password").fill("Dadsangel@123");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click();
    await use(page);
    await console.log("test completed");//tear down 
    }
});

