import{test,expect} from "@playwright/test";
import fs from "fs";
import {parse} from "csv-parse/sync";

let url = "https://demowebshop.tricentis.com/";
let csvPath = "TestData/Data.csv";

let data =fs.readFileSync(csvPath,"utf-8");
let records = parse(data,
    {
        columns : true,
        skip_empty_lines : true
})
for(let csvData of records)
{
    test(`login for user ${csvData.email} @CSVFile`, async({page}) =>
    {
        await page.goto(url);
        await page.getByRole("link",{name:"Log in"}).click();
        await page.getByLabel("Email:").fill(csvData.email);
        await page.getByLabel("Password:").fill(csvData.password);
        await page.getByRole("button",{name:'Log in'}).click();
        
        let logout = await page.getByRole("link",{name:'Log out'});
        await expect(logout).toBeVisible();
        await page.waitForTimeout(5000);
        
    });
 }
