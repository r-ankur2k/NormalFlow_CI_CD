import {test as baseTest, Page } from "@playwright/test" ;

type myDetails = {
    myName : string,
    myNumber : Number,
    myAddress : string,
    myPage : Page
}

const fixture = baseTest.extend<myDetails>({
    myName : "Ankur",
    myNumber : 1234567890,
    myAddress : "Delhi",
    myPage: async ({ page }, use) => {
    await use(page);   // exposes Playwright’s page as myPage
  }
})

export const test = fixture ;
export const assert = fixture.expect ;