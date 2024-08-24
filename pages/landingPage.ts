import { Page } from "playwright/test";
import { ProfileNavigationComponent } from "./components/profileNavigatioComponent";

export class LandingPage {    

    constructor(private page: Page){}
    
    profileNavigation = new ProfileNavigationComponent(this.page)

}