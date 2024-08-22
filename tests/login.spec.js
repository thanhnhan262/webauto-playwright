import { test, expect } from '@playwright/test';

test('start new browser context', async ({ page }) => {
    await page.goto('/')
    console.log('this is main TEST')
    //console.log('Hello ' + process.env.MY_ENV_VARIABLE)
})
