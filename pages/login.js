const { parseArgs } = require("util");

export class LoginPage{
    constructor(page){
        this.page = page;
        this.username = this.page.getByLabel('Username')
        this.password = this.page.getByLabel('Password')
        this.loginButton = this.page.getByRole('button', { name: ' Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}