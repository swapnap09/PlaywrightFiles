import { test ,expect } from "@playwright/test";

test("Launch browser", async({page})=>{

        await page.goto("https://demowebshop.tricentis.com/");
        await page.waitForTimeout(5000);
})
