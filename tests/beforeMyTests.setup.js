import { test as setup } from '@playwright/test'

setup('env setup', async () => {
    console.log('this is Env SETUP')
})

setup('db setup', async () => {
    console.log('this is DB SETUP')
})