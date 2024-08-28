import { Page } from "playwright/test";
import ProfileNavigationComponent from "./components/profileNaviComponent";

export class LandingPage {    

    constructor(private page: Page){}
    
    //inherit
    profileNavigation = new ProfileNavigationComponent(this.page)

    //locators
    digitalLibraryLnk = this.page.locator("//li[contains(@class, 'cpl-icon-list-item')]//*[text()='Digital Library']")
}