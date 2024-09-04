import { test as base } from "@playwright/test";
import { afterEachTest, beforeEachTest } from "./global.hooks";

export const test = base.extend<{ testHook: void }>({
  testHook: [
    async ({}, use, testInfo) => {
        beforeEachTest()
    
        await use(); //default of playwright which including local test.afterEach(), ...

        afterEachTest(testInfo)
    },
    { auto: true },
  ]
});

export { expect } from "@playwright/test"; //Exporting 'expect' from the base test so you have access in your spec.ts file.