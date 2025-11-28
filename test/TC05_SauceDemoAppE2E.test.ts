import { test, expect, Page } from '@playwright/test';

test.describe("SauceDemo Website E2E" , ()=>{
    let page : Page;
    
    test.beforeAll( async ({browser})=>{
        page = await browser.newPage();
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        console.log(" ✅ : Step 1 : User Log!");
        
    })

    test("Check Logged in" , async()=>{
        await page.waitForLoadState('domcontentloaded');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await expect(page.locator('[data-test="logout-sidebar-link"]')).toContainText('Logout');
        await page.getByRole('button', { name: 'Close Menu' }).click();
        console.log(" ✅  : Step 2 : User Logged in Check !");
    })
    test("Adding Products" , async()=>{
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await expect(page.locator('[data-test="item-1-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        console.log(" ✅ : Step 3 : Items Added to cart !");
        await page.locator('[data-test="shopping-cart-link"]').click();
        console.log(" ✅ : Step 4 : Clicked Cart Button");
    })

    test("Validating Cart Prices" , async ()=>{
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('[data-test="cart-list"]')).toContainText('$29.99');
        await expect(page.locator('[data-test="cart-list"]')).toContainText('$9.99');
        await expect(page.locator('[data-test="cart-list"]')).toContainText('$15.99');
        console.log(" ✅ : Step 5 : item Price Check Success !");
    })

    test("Checkout" , async ()=>{
        await page.waitForLoadState('domcontentloaded');
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('Test');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Name');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('676543');
        await page.locator('[data-test="continue"]').click();
        console.log(" ✅ : Step 6 : Checkout Details added & Continue !");
    })

    test("Total Price Validation" , async()=>{
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $60.45');
        await page.locator('[data-test="finish"]').click();
        console.log(" ✅ : Step 7 : Total Price of Item Correct !");
    })

    test("Order Complete Verification" , async()=>{
        await page.waitForLoadState('domcontentloaded');
        const checkoutComplete = await page.locator('span[data-test="title"]').first().innerText();
        const orderSuccess = await page.locator('[data-test="complete-header"]').first().innerText();

        await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');

        console.log("✅ Order Complete Message : " , checkoutComplete);
        console.log("✅ Order Success : " , orderSuccess);
        
    })
});
