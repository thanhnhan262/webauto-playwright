import { test, expect } from '@playwright/test';
import { Accessment } from '../flows/accessment';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';

test('login and logout test', async ({ page }, testInfo) => {
    await page.goto('/')
    
    const accessment = new Accessment(page)
    const username = 'thanhnhan262'
    const password = '1234567'
    await accessment.login(username, password)
    
    const homePage = new HomePage(page) 
    await expect(homePage.pageHeading).toContainText('Welcome')
    await expect(homePage.pageHeading).toContainText(username)

    await homePage.accountDd.click()
    await homePage.logoutBtn.click()
    const loginPage = new LoginPage(page)
    await expect(loginPage.userNameTbx).toBeVisible()
})
