import {test , expect } from "@playwright/test"

test("Visual Compare" , async({page})=>{
        await page.goto("https://letcode.in/login")
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        expect(await page.screenshot()).toMatchSnapshot("letcode.png");
    })