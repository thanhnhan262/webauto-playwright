import { Page } from "playwright/test";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import AccountNavigationComponent from "../pages/components/acountNaviComponent";

export default class Accessment {
    constructor(private page: Page){}
    async loginFromLandingPage(user: string, pass: string) {
        const landingPage = new LandingPage(this.page)
        await landingPage.profileNavigation.profileIcon.click()
        await landingPage.profileNavigation.signInBtn.click()
        const loginPage = new LoginPage(this.page)
        await loginPage.userNameTbx.fill(user)
        await loginPage.passwordTbx.fill(pass)
        await loginPage.loginBtn.click()
    }

    async logout() {
        const profileNav = new AccountNavigationComponent(this.page)
        await profileNav.accountBar.click()
        await profileNav.logoutBtn.click()
    }
}
