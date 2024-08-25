import { Page } from "playwright/test";

export class LoginPage{

    constructor(private page: Page){}

    userNameTbx = this.page.getByTestId("field_username")
    passwordTbx = this.page.getByTestId("field_userpin")
    loginBtn = this.page.getByTestId("button_login")
    messageBox = this.page.locator("//p[@class='message-text']")

    async login(user: string, pass: string) {
        await this.userNameTbx.fill(user)
        await this.passwordTbx.fill(pass)
        await this.loginBtn.click()
    }
    
}