import { test as teardown} from '@playwright/test'

teardown('DB cleanup', async () => {
    console.log('this is DB CLEAN UP')
})