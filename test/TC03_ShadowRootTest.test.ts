import {test , expect } from "@playwright/test"
 
test("Shadow Root" , async ({page}) => {
        await page.goto("https://books-pwakit.appspot.com/explore?q=");
        await page.locator("#input").fill("Hello");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(2000);
    })