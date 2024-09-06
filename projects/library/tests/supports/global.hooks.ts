import { TestInfo } from "@playwright/test";

export function beforeEachTest() {
    console.log("test is running on: " + process.env.LOCAL_BASE_URL)
}

export function afterEachTest(testInfo: TestInfo) {
    console.log(testInfo.title + ": " + testInfo.status)
}
