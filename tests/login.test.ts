import { test, expect } from '@playwright/test';
import { Accessment } from '../flows/accessment';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { DigitalLibraryPage } from '../pages/digitalLibraryPage';
import { LandingPage } from '../pages/landingPage';

test('Successful login', async ({ page }) => {
    await page.goto('/')
    
    const accessment = new Accessment(page)
    const username = 'thanhnhan262'
    const password = '1234567'
    await accessment.loginFromLandingPage(username, password)
    
    const homePage = new HomePage(page) 
    await expect(homePage.pageHeading).toContainText('Welcome')
    await expect(homePage.pageHeading).toContainText(username)

    await homePage.accountDd.click()
    await homePage.logoutBtn.click()
    const loginPage = new LoginPage(page)
    await expect(loginPage.userNameTbx).toBeVisible()
})

test('Failed credentials login', async ({page})=>{
    await page.goto('/')
    const landingPage = new LandingPage(page)
    await landingPage.profileNavigation.profileIcon.click()
    await landingPage.profileNavigation.signInBtn.click()

    const username = 'thanhnhan262'
    const password = 'wrongpass'
    const loginPage = new LoginPage(page)
    await loginPage.login(username, password)
    await expect(loginPage.messageBox).toHaveText('The username or PIN is incorrect. Please try again')
})

test('Login from digital library page', async ({ page }) => {
    await page.goto('/')
    
    const landingPage = new LandingPage(page)
    await landingPage.digitalLibraryLnk.click()

    const digitalPage = new DigitalLibraryPage(page)
    await digitalPage.profileNavigation.profileIcon.click()
    await digitalPage.profileNavigation.signInBtn.click()

    const username = 'thanhnhan262'
    const password = '1234567'
    const loginPage = new LoginPage(page)
    await loginPage.login(username, password)
    
    const homePage = new HomePage(page) 
    await expect(homePage.pageHeading).toContainText('Welcome')
    await expect(homePage.pageHeading).toContainText(username)

    await homePage.accountDd.click()
    await homePage.logoutBtn.click()
    await expect(loginPage.userNameTbx).toBeVisible()
})
