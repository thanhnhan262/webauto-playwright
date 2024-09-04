import { test, expect } from '@playwright/test';
import Accessment from '../flows/accessment';
import HomePage from '../pages/homePage';
import CheckoutDetailPage from '../pages/checkoutDetailPage';


test.beforeEach(async ({page}) => {
    await test.step("log in to website", async () => {
        await page.goto('/')
        await new Accessment(page).loginFromLandingPage(`${process.env.USERNAME}`, `${process.env.PASSWORD}`)
    })
})


test.afterEach(async ({page})=> {
    await test.step("log out", async () => {
        await new Accessment(page).logout()
    })
})

test("Verify borrowing info", async ({ page }) => {
    await test.step("check the number of checked out book in home page", async () => {
        const homePage = new HomePage(page)
        const str = await homePage.checkoutNum.textContent()
        const num = str?.replace(/\s/g, "")
        expect(Number(num)).toBeGreaterThan(0)
    })
    
    await test.step("go to checked out detail page", async () => {
        const homePage = new HomePage(page)
        await homePage.checkoutNum.click()
    })
    
    await test.step("check checked out book list", async () => {
        const checkOutDetail = new CheckoutDetailPage(page)
        await expect(checkOutDetail.checkedOutList.first()).toBeVisible()
        checkOutDetail.checkedOutList.all()
        const count = await checkOutDetail.checkedOutList.count()
        expect(count).toBeGreaterThan(0)
    })

    await test.step("check indicators of the number of checked out books", async () => {
        const checkOutDetail = new CheckoutDetailPage(page)
        const checkedOutText = await checkOutDetail.checkedOutNum.textContent()
        expect(Number(checkedOutText)).toBeGreaterThan(0)

        const statusText = await checkOutDetail.statusLab.textContent()
        const statusText2 = statusText?.toString().split(" ", 1)
        expect(Number(statusText2)).toBeGreaterThan(0)

        const pagingText = await checkOutDetail.pagingLab.textContent()
        const pagingText2 = pagingText?.toString().split(" ")[4]
        expect(Number(pagingText2)).toBeGreaterThan(0)
    })
})