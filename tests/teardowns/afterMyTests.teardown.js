import { expect, test as teardown} from '@playwright/test'
import { HomePage } from '../../pages/hompage'

teardown('DB cleanup', async () => {
    console.log('this is DB clean up')
    // const homePage = new HomePage(page)
    // await homePage.logoutButton.click()
    // await expect(page).toHaveURL('https://the-internet.herokuapp.com/login')
})