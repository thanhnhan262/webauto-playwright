import { test, expect } from '@playwright/test';

test('start new browser context', async ({ page, baseURL }, testInfo) => {
    await page.goto('/')
    console.log('this is main TEST')
    console.log('running on:  ' + baseURL)
    //console.log('Hello ' + process.env.MY_ENV_VARIABLE)
    await testInfo.attach('my-screenshot', { body: await page.screenshot(), contentType: 'image/png' });
})
