//import { test, expect } from '@playwright/test';
import { test, expect } from './supports/extenedTest'
import LandingPage from '../pages/landingPage';
import HourAndLocationsPage from '../pages/hourAndLocationsPage';
import SearchPage from '../pages/searchPage';
import SearchResultPage from '../pages/searchResultPage';

test("Search jobs @search",  async ({ page }) => {
    //access page
    await test.step("access website", async () => {
        await page.goto('/')
    })

    //click on link of Jobs at the Library
    await test.step("click on link of Jobs at the Library", async () => {
        const landingPage = new LandingPage(page)
        await landingPage.footerNavigation.jobAtLibraryLnk.click()
    })

    //verify job search page is open
    await test.step("verify job search page is open", async () => {
        await expect(page).toHaveTitle("Jobs at the Library | Calgary Public Library")
    })

})

test("About library @about", async ({ page }) => {
    await test.step("access page", async () => {
        await page.goto('/')
    })

    await test.step("go to Locations and Hour page", async () => {
        const landingPage = new LandingPage(page)
        await landingPage.footerNavigation.aboutLibraryLnk.click()
    })

    await test.step("verify About page is open", async () => {
        await expect(page).toHaveTitle("About the Library | Calgary Public Library")
    })
})

test("Contact us @contact", async ({ page }) => {
    await test.step("access page", async () => {
        await page.goto('/')
    })

    await test.step("go to Locations and Hour page", async () => {
        const landingPage = new LandingPage(page)
        await landingPage.footerNavigation.contactUsLnk.click()
    })

    await test.step("verify Contact Us page is open", async () => {
        await expect(page).toHaveTitle("Contact Us | Calgary Public Library")
    })
})

test("Hours and locations", async ({ page }) => {
    await test.step("access page", async () => {
        await page.goto('/')
    })

    await test.step("go to Locations and Hour page", async () => {
        const landingPage = new LandingPage(page)
        await landingPage.footerNavigation.hourAndLocationLnk.click()
    })

    await test.step("verify library locations and open hours", async () => {
        await expect(page).toHaveTitle("Locations | Calgary Public Library")
        const hourAndLocationsPage = new HourAndLocationsPage(page)
        await expect(hourAndLocationsPage.locationList).toHaveText(
            [
                "Memorial Park Library",
                "Village Square Library",
                "Signal Hill Library",
                "Southwood Library",
                "Shawnessy Library",
                "Seton Library",
                "Sage Hill Library",
                "Saddletowne Library",
                "Rocky Ridge Library",
                "Quarry Park Library",
                "Nose Hill Library",
                "Fish Creek Library",
                "Nicholls Family Library",
                "Louise Riley Library",
                "Judith Umbach Library",
                "Giuffre Family Library",
                "Forest Lawn Library",
                "Bowness Library",
                "Crowfoot Library",
                "Country Hills Library",
                "Central Library"
            ]
        )
        expect(await hourAndLocationsPage.readLibraryOpenTime("Memorial Park Library")).toBe("Open today: 10:00 AM - 8:00 PM")
        expect(await hourAndLocationsPage.readLibraryOpenTime("Village Square Library")).toBe("Open today: 9:00 AM - 9:00 PM")
        expect(await hourAndLocationsPage.readLibraryOpenTime("Shawnessy Library")).toBe("Open today: 9:00 AM - 9:00 PM")
    })

    await test.step("verify library shown on map", async () => {
        const hourAndLocationsPage = new HourAndLocationsPage(page)
        const library = "Southwood Library"
        await hourAndLocationsPage.clickLibrary(library)
        await expect(hourAndLocationsPage.mapLibraryNameLnk).toHaveText(library)
    })
})

test("Verify rearch result", async ({ page }) => {
    const keyword = "space"

    await test.step("access page", async () => {
        await page.goto('/')
    })

    await test.step("go to Search page", async () => {
        const landingPage = new LandingPage(page)
        await landingPage.headerNavigation.searchIcon.click()
    })

    await test.step("search", async () => {
        const searchPage = new SearchPage(page)
        await searchPage.searchBox.fill(keyword)
        await searchPage.catalogueOpt.click()
        await searchPage.searchBtn.click()
    })

    await test.step("verify search results", async () => {
        const searchResultPage = new SearchResultPage(page)
        await expect(searchResultPage.searchKeyword).toHaveText(keyword)
        const foundBooks = await searchResultPage.getFoundBookList()
        for (const book of foundBooks) {
            const text = book.title.toLowerCase() + " - " + book.subTitle.toLowerCase()
            expect(text).toContain(keyword)
        }
    })
})
