import { Page } from "playwright/test";

export default class BookDetailPage {    

    constructor(private page: Page){}

    bookName = this.page.locator("//div[contains(@class, 'main-info')]//div[@class='title-wrapper']/h1")
    
}