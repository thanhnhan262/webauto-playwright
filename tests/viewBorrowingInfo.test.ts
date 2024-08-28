import { test, expect } from '@playwright/test';
import { Accessment } from '../flows/accessment';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { DigitalLibraryPage } from '../pages/digitalLibraryPage';
import { LandingPage } from '../pages/landingPage';
import { describe } from 'node:test';
import exp from 'node:constants';
import { CheckoutDetailPage } from '../pages/checkoutDetailPage';
import { executionAsyncId } from 'node:async_hooks';

test.beforeEach(async ({page}) => {
    await page.goto('/')
    await new Accessment(page).loginFromLandingPage(`${process.env.USERNAME}`, `${process.env.PASSWORD}`)
})

test.afterEach(async ({page})=> {
    await new Accessment(page).logout()
})

test.only("Verify borrowing info", async ({ page }) => {
    const homePage = new HomePage(page)
    const str = await homePage.checkoutNum.textContent()
    const num = str?.replace(/\s/g, "")
    expect(Number(num)).toBeGreaterThan(0)

    await homePage.checkoutNum.click()
    const checkOutDetail = new CheckoutDetailPage(page)
    await expect(checkOutDetail.checkedOutList.first()).toBeVisible()
    const count = await checkOutDetail.checkedOutList.count()
    expect(count).toBeGreaterThan(0)

    const checkedOutText = await checkOutDetail.checkedOutNum.textContent()
    expect(Number(checkedOutText)).toBeGreaterThan(0)

    const statusText = await checkOutDetail.statusLab.textContent()
    const statusText2 = statusText?.toString().split(" ", 1)
    expect(Number(statusText2)).toBeGreaterThan(0)

    const pagingText = await checkOutDetail.pagingLab.textContent()
    const pagingText2 = pagingText?.toString().split(" ")[4]
    expect(Number(pagingText2)).toBeGreaterThan(0)
})