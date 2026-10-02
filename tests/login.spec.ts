import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/LoginPage Practise/);
  await page.locator('#username').fill('atul');
  await page.locator('#password').fill('Salman@123');
  await page.locator('#signInBtn').click();
  await page.locator('[style*=block]').textContent();
//   console.log(ErrorText);
  await expect(page.locator('[style*=block]')).toContainText('Incorrect username/password.');


});