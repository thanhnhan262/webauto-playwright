import { Page } from "playwright/test";

export default class FooterNavigationComponent {
    
    constructor(private page: Page){}

    aboutLibraryLnk = this.page.locator("//li[@class='footer-menu-item']/a[text()='About the Library']")
    jobAtLibraryLnk = this.page.locator("//li[@class='footer-menu-item']/a[text()='Jobs at the Library']")
    contactUsLnk = this.page.locator("//li[@class='footer-menu-item']/a[text()='Contact Us']")
    hourAndLocationLnk = this.page.locator("//li[@class='footer-menu-item']/a[text()='Hours & Locations']")

    accessibilityLnk = this.page.locator("//li[@class='utility-menu-item']/a[text()='Accessibility']")
    libraryServicesAgreementLnk = this.page.locator("//li[@class='utility-menu-item']/a[text()='Library Services Agreement']")
    privacyLnk = this.page.locator("//li[@class='utility-menu-item']/a[text()='Privacy']")
    termsOfUselnk = this.page.locator("//li[@class='utility-menu-item']/a[text()='Terms of Use']")
}   