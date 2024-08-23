import { test, expect } from '@playwright/test';

test('start new browser context', async ({ page }, testInfo) => {
    await page.goto('/')
    console.log('this is main TEST')
    //console.log('Hello ' + process.env.MY_ENV_VARIABLE)
    await testInfo.attach('my-screenshot', { body: await page.screenshot(), contentType: 'image/png' });
})
