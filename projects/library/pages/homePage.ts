import { Page } from "playwright/test";

export default class HomePage {

    constructor(private page: Page) { }

    pageHeading = this.page.getByTestId("user_dashboard_page_heading")

    //top-right navigation items
    accountDd = this.page.locator("//div[@class='bc_my_account_nav']")
    //account navigation items
    logoutBtn = this.page.getByTestId("biblionav_logout")
    myProfileLnk = this.page.getByTestId("biblionav_myprofile")
    mySettingsLnk = this.page.getByTestId("biblionav_mysettings")
    //my borrowing
    checkoutNum = this.page.locator("//div[@testid='borrowing_widget']//a[@data-section='checkedout']/span")
    onHoldNum = this.page.locator("//div[@testid='borrowing_widget']//a[@data-section='holds']/span")
    borrowHistoryNum = this.page.locator("//div[@testid='borrowing_widget']//a[@data-section='recently_returned']/span")
    feeNum = this.page.locator("//div[@testid='borrowing_widget']//a[@data-section='fines']/span")


}