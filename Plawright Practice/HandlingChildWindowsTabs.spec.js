const {test} = require('@playwright/test');


test('Child Window Practice & Tab', async ({browser})=>

{

    const context= await browser.newContext();
    const page=await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

 const documentLink = page.locator("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']");

const [newPage] =await Promise.all( 
 [
 context.waitForEvent('page'),
 documentLink.click(),

 ] )
 await newPage.waitForLoadState();
 
const  text=await newPage.locator('.red').textContent();
 console.log(text);
const emailID= await text.split(" ")[4]
console.log(emailID)

await page.locator('#username').fill(emailID)
await page.locator('#password').fill("Password")
await page.locator('#signInBtn').click();
await page.pause();
console.log("Username:", await page.locator('#username').inputValue());
console.log("Password:", await page.locator('#password').inputValue());




});