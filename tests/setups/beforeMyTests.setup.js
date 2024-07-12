import { test as setup, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login'

setup('env setup', async ({ page }) => {
    console.log('this is Env setup')
})

setup('db setup', async () => {
    console.log('this is DB setup')
})