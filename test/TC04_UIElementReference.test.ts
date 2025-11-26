import { test , expect } from "@playwright/test"

test.only("Using UI Visible Selecters" , async ({page}) =>{
    await page.goto("https://github.com/login");
    await page.fill("input:below(:text('Username or'))" , "Test User");
    await page.fill("#password:above(:text('Sign in'))" , "Test Pass");
    await page.click("a:near(:text('Password'))");
    expect(page.url()).toBe("https://github.com/password_reset");
    await page.waitForTimeout(2000);
})

test("Another Example" , async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.waitForLoadState("networkidle");
    await page.check("label:left-of(:text('Male'))");
    await page.check("label:right-of(:text('Male'))");
    // await page.fill("input:below(:text('Gender')):down('Mobile')" , "9098765435");
})