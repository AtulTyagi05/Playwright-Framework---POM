import { test, expect } from '@playwright/test';
import { loginpage } from '../pages/loginPage';
import { Base_URL, UserName, Password } from '../utils/envConfig';

test.only('has title', async ({ page }) => {

  const loginPage = new loginpage(page);  
  await page.goto(Base_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/LoginPage Practise/);
  loginPage.login(UserName, Password);
  await page.locator('[style*=block]').textContent();
  await expect(page.locator('[style*=block]')).toContainText('Incorrect username/password.');


});





