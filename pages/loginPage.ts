import { Page } from "playwright/test";

export class LoginPage{

    constructor(private page: Page){}

    userNameTbx = this.page.getByTestId("field_username")
    passwordTbx = this.page.getByTestId("field_userpin")
    loginBtn = this.page.getByTestId("button_login")

}