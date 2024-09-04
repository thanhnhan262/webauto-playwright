import { Page } from "playwright/test";

export default class CheckoutDetailPage {    

    constructor(private page: Page){}

    checkedOutNum = this.page.locator("//div[contains(@class, 'cp-checked-out-status')]//div[@class='count']")
    checkedOutList = this.page.locator("//div[@class='cp-item-list']/*")
    statusLab = this.page.locator("//div[@class='cp-borrowing-list']//div[@class='status-icon-wrapper']/following-sibling::*")
    pagingLab = this.page.locator("//div[@class='cp-borrowing-list']//div[@class='bottom-row']//span[@class='cp-pagination-label']")
    
}