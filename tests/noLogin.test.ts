//import { test, expect } from '@playwright/test';
import {test, expect} from '../tests/supports/extenedTest'
import LandingPage from '../pages/landingPage';

test("Search jobs", async ({ page }) => {
    //access page
    await page.goto('/')

    //click on link of Jobs at the Library
    const landingPage = new LandingPage(page)
    await landingPage.footerNavigation.jobAtLibraryLnk.click()

    //verify job search page is open
    await expect(page).toHaveTitle("Jobs at the Library | Calgary Public Library")
})

test("About library", async ({ page }) => {
    //access page
    await page.goto('/')

    //click on link
    const landingPage = new LandingPage(page)
    await landingPage.footerNavigation.aboutLibraryLnk.click()

    //verify page is open
    await expect(page).toHaveTitle("About the Library | Calgary Public Library")
})

test("Contact us", async ({ page }) => {
    //access page
    await page.goto('/')

    //click on link
    const landingPage = new LandingPage(page)
    await landingPage.footerNavigation.contactUsLnk.click()

    //verify page is open
    await expect(page).toHaveTitle("Contact Us | Calgary Public Library")
})

test("Hours and locations", async ({ page }) => {
    //access page
    await page.goto('/')

    //click on link
    const landingPage = new LandingPage(page)
    await landingPage.footerNavigation.hourAndLocationLnk.click()

    //verify page is open
    await expect(page).toHaveTitle("Locations | Calgary Public Library")
})

