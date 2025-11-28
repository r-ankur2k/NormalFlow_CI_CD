import { expect, test } from "@playwright/test" ;

test("Storage State Github Login" , async ({browser})=>{
    const context = await browser.newContext({
        storageState : "./auth.json"
    });
    const page = await context.newPage();

    await page.goto("https://www.github.com");
    await page.waitForLoadState("domcontentloaded");
    const pageTitle = await page.title();
    expect(pageTitle).toBe("GitHub");
    console.log(pageTitle);
    
});