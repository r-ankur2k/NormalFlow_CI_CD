import {test , assert } from "../pages/myFixtures"

test("Fixture Test File" , async({myAddress , myName ,myNumber , myPage} , info)=>{
    console.log("Name : " + myName.toUpperCase());
    console.log("Number : " + myNumber);
    console.log("Address : " + myAddress.toUpperCase());
    
    assert(myName.toUpperCase()).toBe("ANKUR");
    assert(myNumber).toBe(1234567890);
    assert(myAddress.toUpperCase()).toBe("DELHI");
    await myPage.goto("https://www.google.com");
    console.log(await myPage.title()); 
    console.log(info.status);
})