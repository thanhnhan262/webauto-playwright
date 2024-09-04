import { Page } from "playwright/test";
import HeaderNavigationComponent from "./components/headerNavigationComponent"
import FooterNavigationComponent from "./components/footerNavigationComponent"

export default class LandingPage {    

    constructor(private page: Page){}
    
    //inherit
    headerNavigation = new HeaderNavigationComponent(this.page)
    footerNavigation = new FooterNavigationComponent(this.page)

    //locators
    digitalLibraryLnk = this.page.locator("//li[contains(@class, 'cpl-icon-list-item')]//*[text()='Digital Library']")
}