import { Page } from "playwright/test";
import Book from "./components/book";

export default class SearchResultPage{

    constructor(private page: Page){}

    searchKeyword = this.page.locator("//*[@data-test-id='searchTitle']/strong")
    foundBookLocatorList = this.page.locator("//div[@class='cp-search-result-item-content']")
    
    async getFoundBookList(){
        let books =  new Array<Book>
        for(const locator of await this.foundBookLocatorList.all()){
            let book = new Book()
            const titleLocator = locator.locator("//a/span[@class='title-content']")
            book.title = await titleLocator.textContent() ?? ""
            const subTitleLocator = locator.locator("//span[@class='cp-subtitle']")
            if(await subTitleLocator.isVisible()){
                book.subTitle = await subTitleLocator.textContent() ?? ""
            }
            books.push(book)
        }        
        return books 
    }

    async clickOnBook(bookName: string){
        const locator = this.page.locator("//li[@data-test-id='searchResultItem']//a[@data-key='bib-title']", {hasText: bookName})
        await locator.click()
    }
}