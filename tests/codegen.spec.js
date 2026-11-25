import { test, expect } from '@playwright/test';

test('test @CodeGen', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('swapna.potnuru06@gmail.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Dadsangel@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});