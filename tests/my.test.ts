import { test, expect } from '@playwright/test';


test("Verify borrowing info", async ({ page }) => {
    let text = "6"
    expect(+text).toBeGreaterThan(6)
})

