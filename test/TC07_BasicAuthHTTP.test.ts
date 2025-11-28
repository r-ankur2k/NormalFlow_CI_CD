import {test , expect} from "@playwright/test" ;


test.describe("Playwright - Network" ,()=>{

    test("Basic Auth Example" , async ({browser})=>{
        const context = await browser.newContext({
            // proxy :{
            //     server : "",
            //     username :"",
            //     password :"",
            // },
            httpCredentials : {
                username : "admin" ,
                password : "admin"
            }
        })
        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
        const header = page.locator("h3");
        if(header){
            console.log(await header.innerText());
            expect(await header.innerText()).toBe("Basic Auth");
        }else{
            console.log("Header Element not found");  
        }
        const sucessMsg = page.locator("p");
        if (sucessMsg) {
            console.log(await sucessMsg.innerText());
            expect(await sucessMsg.innerText()).toBe("Congratulations! You must have the proper credentials.");
        }else{
            console.log("Success Message Element Not Found");
        }
    })
})