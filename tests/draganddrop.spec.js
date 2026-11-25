import { test,expect } from "@playwright/test";

let url="https://testautomationpractice.blogspot.com/";

test.skip("DragAndDrop1 @DragAndDrop",async({page})=>
{
    await page.goto(url);
    let source = await page.locator("#draggable");
    let target = await page.locator("#droppable");
    await source.dragTo(target);
    await page.waitForTimeout(3000);

})
test.fixme("DragAndDrop2",async({page})=>
{
    await page.goto(url);
    await page.dragAndDrop("#draggable","#droppable");
    await page.waitForTimeout(3000);

})
test.only("DragAndDrop3",async({page})=>
{
    await page.goto(url);
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);

})