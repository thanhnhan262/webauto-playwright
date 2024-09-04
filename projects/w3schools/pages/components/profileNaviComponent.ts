import { Page } from "playwright/test";

export default class HeaderNavigationComponent {
    
    constructor(private page: Page){}

    //right navigation bar items
    locationIcon = this.page.locator("//div[@class='uk-navbar-right']//li[@class='location-icon']")
    profileIcon = this.page.locator("//div[@class='uk-navbar-right']//li[@class='profile-icon']")
    searchIcon = this.page.locator("//div[@class='uk-navbar-right']//li[@class='search-icon']")
    //profile menu items
    signInBtn = this.page.locator("//div[@class='anonymous-menu']//a[contains(@class, 'sign-in')]")
    signUpLnk = this.page.locator("//div[@class='anonymous-menu']//ul//a[contains(text(), 'Sign Up')]")
    membershipBenefitLnk = this.page.locator("//div[@class='anonymous-menu']//ul//a[contains(text(), 'Membership Benefits')]")
    updateContactInfoLnk = this.page.locator("//div[@class='anonymous-menu']//ul//a[contains(text(), 'Update Contact Info')]")
}