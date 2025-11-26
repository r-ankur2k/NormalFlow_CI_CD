import { test , expect, Page } from "@playwright/test"

test.describe("TC01 : E2E" , ()=>{
    let page : Page;
    test.beforeAll(async ({browser}) =>{
        page = await browser.newPage();
        await page.goto("https://letcode.in/home");
    })

    test("Verify Title" , async()=>{
        const title = await page.title();
        expect(title).toContain("LetCode");
    })

    test("Negative Test", async ()=>{
        await page.waitForLoadState("domcontentloaded");
        await page.locator("(//button[contains(@class,'button is-pulled-right')])[2]").click();
        expect(page.url()).toBe("https://letcode.in/login");
        await page.locator("input[placeholder='Enter Username']").fill("or_2314");
        await page.locator("input[placeholder='Enter Password']").fill("83r5^_");
        await page.locator("button.button.is-primary").click();
        await page.locator("button.button.is-primary").isVisible();
        console.log(" TC01 : Negative Test - ❌ Not Logged in");
        
        
    })

    test("Login" , async ({})=>{
        // await page.waitForLoadState("domcontentloaded");
        // await page.locator("(//button[contains(@class,'button is-pulled-right')])[2]").click();
        expect(page.url()).toBe("https://letcode.in/login");
        await page.locator("input[placeholder='Enter Username']").fill("mor_2314");
        await page.locator("input[placeholder='Enter Password']").fill("83r5^_");
        await page.locator("button.button.is-primary").click();
        await page.waitForLoadState("networkidle");
        expect(await page.locator("button.button.is-primary")).not.toBeVisible();
        console.log(" TC01 : Positive Test ✅ - User Logged in");
        
    })


})

