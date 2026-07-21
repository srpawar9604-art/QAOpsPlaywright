const {test, expect} = require('@playwright/test');   // importing the test from playwright package


test('Browser Context playwright test',async ({browser})=>   // test annotation is coming from the playwright package
{
    //javascript is asynchronous means code is not compile like top to bottom, there is no 
    // gurentte that code will execute sequentially.
    // that's why we have to write await keyword before every step. 



    const context =await  browser.newContext();
    const page=  await context.newPage();
    const userName = page.locator('input#username')
    const passWord = page.locator('input#password')
    const signIn =page.locator('#signInBtn')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log (await page.title());
    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2)");
    await signIn.click();
   console.log(await page.locator('[style="display: block;"]').textContent());
   await expect(page.locator('[style="display: block;"]')).toContainText("Incorrect")

   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await passWord.fill("");
   await passWord.fill("Learning@830$3mK2");
   await signIn.click();

   console.log(await page.locator('[class="card-body"] a').nth(1).textContent());
   console.log(await page.locator('[class="card-body"] a').first().textContent());
   console.log(await page.locator('[class="card-body"] a').allTextContents());
   console.log(await page.locator('[class="card-body"] a').allTextContents());

     
});

test('UI Controls test', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('input#username').fill("Shubham Pawar");
    await page.locator('input#password').fill("Password123");    
     const dropdown =await page.locator('select.form-control');  // dropdown locator
    await dropdown.selectOption("consult");   // select dropdown value 
    await page.locator('.radiotextsty').last().click();
    await page.locator('button#okayBtn').click(); 
   
   console.log(await page.locator('.radiotextsty').last().isChecked());
   await expect(page.locator('.radiotextsty').last()).toBeChecked();

   await page.locator('input#terms').click();
   await expect(page.locator('input#terms')).toBeChecked();
   await page.locator('input#terms').uncheck();
   expect (await page.locator('input#terms').isChecked()).toBeFalsy();
   await expect(page.locator('[href*="documents-request"]')).toHaveAttribute("class","blinkingText"); // blinking link    
});

test('Child Window', async ({browser}) =>
{
   const context =await browser.newContext();
   const page =await context.newPage();

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const documentLink = page.locator('[href="https://rahulshettyacademy.com/documents-request"]');

   const [newPage] =await Promise.all (
[
context.waitForEvent('page'),
documentLink.click(),    
])
const text =await newPage.locator('[class="im-para red"]').textContent();
const arraytext =text.split('@');
const domain = arraytext[1].split(" ")[0]
console.log(domain);
await page.locator('#username').fill("Shubham Pawar");
//await page.pause();
console.log (await page.locator('#username').inputValue());





});





