import { test } from "./MyFixture.js";

test("login test" ,async({WebPage})=>
{
    await WebPage.waitForTimeout(3000);
});