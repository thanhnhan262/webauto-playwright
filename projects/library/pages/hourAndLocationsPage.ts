import { Page } from "playwright/test";

export default class HourAndLocationsPage {

    constructor(private page: Page) { }

    locationList = this.page.locator("//ul[@id='locations-list']/li/div/a")
    mapLibraryNameLnk = this.page.locator("//div[@id='locations-list-map']//*[@role='dialog']//a[@class='location-name']")

    async readLibraryStatus(libraryName: string) {
        const locator = this.page.locator("//ul[@id='locations-list']/li[.//text()='" + libraryName.trim() + "']/div[@class='location-open-day']/div[1]")
        return (await locator.textContent())?.trim()
    }

    async readLibraryOpenTime(libraryName: string) {
        const locator = this.page.locator("//ul[@id='locations-list']/li[.//text()='" + libraryName.trim() + "']/div[@class='location-open-day']/div[2]")
        return (await locator.textContent())?.trim()
    }

    async clickLibrary(libraryName: string){
        const locator = this.page.locator("//ul[@id='locations-list']/li/div/a", {hasText: libraryName})
        await locator.click()
    }

}

