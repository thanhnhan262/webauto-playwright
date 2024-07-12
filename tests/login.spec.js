import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { HomePage } from '../pages/hompage';

// test.afterEach(async ({page}, testInfo) => {
//     if(testInfo.status !== testInfo.expectedStatus){
//         const filePath = `./screenshots/${testInfo.title}.failed.png`
//         await page.screenshot({
//             path: filePath
//         })
//         testInfo.attachments.push({name: 'download', contentType: "image/png", path: filePath})
//     }
// })

let cleanedId = 0;

test.afterEach('clean up test data', async () => {
    try {
        if (cleanedId < 10) {
            throw new Error()
        }
        console.log('i am clean up data for you: '+ cleanedId)
    } catch (error) {
        console.log(error)
    }
    
})

test('test1', async ({page})=> {
    const loginPage = new LoginPage(page)
    await loginPage.gotoLoginPage()
    await expect(page).toHaveTitle("The Internet")

    await loginPage.login('tomsmith', 'SuperSecretPassword!')
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure')

    //create data with id = 10
    cleanedId = 10
})

