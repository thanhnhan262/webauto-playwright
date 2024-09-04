import { Page } from "playwright/test";

export default class SearchPage{

    constructor(private page: Page){}

    searchBox = this.page.locator("//input[@type='search']")
    websiteOpt = this.page.locator("//input[@type='radio' and @value='website']")
    catalogueOpt = this.page.locator("//label[@for='full-search-catalogue-option']")
    searchBtn = this.page.locator("//button[.//text()='Search']")

}