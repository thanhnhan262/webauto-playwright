import { Page } from "playwright/test";
import ProfileNavigationComponent from "./components/profileNaviComponent";

export default class DigitalLibraryPage {    

    constructor(private page: Page){}
    
    //inherit
    profileNavigation = new ProfileNavigationComponent(this.page)

    //locators

}