import { Page } from "playwright/test";
import ProfileNaviComponent from "./components/profileNaviComponent"
import FooterNaviComponent from "./components/footerNaviComponent"

export default class LandingPage {    

    constructor(private page: Page){}
    
    //inherit
    profileNavigation = new ProfileNaviComponent(this.page)
    footerNavigation = new FooterNaviComponent(this.page)

    //locators
    digitalLibraryLnk = this.page.locator("//li[contains(@class, 'cpl-icon-list-item')]//*[text()='Digital Library']")
}