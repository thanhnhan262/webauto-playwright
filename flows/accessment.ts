import { Page } from "playwright/test";
import { LandingPage } from "../pages/landingPage";
import { LoginPage } from "../pages/loginPage";

export class Accessment {
    constructor(private page: Page){}
    async login(user: string, pass: string) {
        const landingPage = new LandingPage(this.page)
        await landingPage.profileIcon.click()
        await landingPage.signInBtn.click()
        const loginPage = new LoginPage(this.page)
        await loginPage.userNameTbx.fill(user)
        await loginPage.passwordTbx.fill(pass)
        await loginPage.loginBtn.click()
    }
}
