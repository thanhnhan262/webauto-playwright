import {test, expect, devices} from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/hompage'

test.use({
    myFirtApp: async ({browser}, use) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')

        const homePage = new HomePage(page)
        await use(homePage)

        await homePage.logoutButton.click()
    },

    mySecondApp: async ({browser}, use) => {
        const iphone = await browser.newContext({...devices['iPhone 13']})
        const page = await iphone.newPage()

        const loginPage = new LoginPage(page)
        await loginPage.gotoLoginPage()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')

        await use(loginPage)

        const homePage = new HomePage(page)
        await homePage.logoutButton.click()

    }
})

test('verify on 2 apps', async ({myFirtApp, mySecondApp}) => {
    await expect(myFirtApp.subHeader, "check content text").toHaveText('Welcome to the Secure Area. When you are done click logout below.')
    await expect(mySecondApp.page, "check page title").toHaveTitle('The Internet aaa')
})