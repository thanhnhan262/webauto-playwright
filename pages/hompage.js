export class HomePage{

    constructor(page){
        this.page = page
        this.logoutButton = this.page.locator("xpath=//i[contains(@class, 'icon-signout')]")
    }
    
}