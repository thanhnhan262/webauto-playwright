import { TestInfo } from "@playwright/test";

export function beforeEachTest(){
    console.log("before running each test")
}

export function afterEachTest(testInfo: TestInfo){
    console.log("test result: " + testInfo.status)
}
