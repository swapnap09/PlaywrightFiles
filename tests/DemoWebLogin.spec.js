import { test, expect} from "@playwright/test";

test("demoWebLogin @DemoWebLogin", async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
    await expect(page).toHaveURL(/.*login/);
})