import { Page } from "playwright/test";

export class AccountNaviComponent {
    
    constructor(private page: Page){}

    accountBar = this.page.locator("//div[contains(@class, 'biblio_bar_my_account')]/a")

    logoutBtn = this.page.getByTestId("biblionav_logout")
    checkedOutLnk = this.page.getByTestId("biblionav_checkedout")
}