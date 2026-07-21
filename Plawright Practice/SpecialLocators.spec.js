const {test} = require('@playwright/test')

test('Special Locator', async ({page}) =>
{


await page.goto('https://rahulshettyacademy.com/angularpractice/')


 const labelText =await page.getByLabel("Check me out if you Love IceCreams!").check()
 //await console.log(labelText);  // check for the label tagname in the DOM
 await page.getByPlaceholder('Password').fill("Shubham Pawar")

 await page.getByRole("button",{name:'submit'}).click();
 const text=await page.getByText("The Form has been submitted successfully!.").textContent();
 await console.log(text)
 await page.getByRole('link', {name: 'Shop'}).click();

 await page.locator('[class="col-lg-3 col-md-6 mb-3"]').filter({hasText:'Blackberry'}).getByRole('button', {name: 'Add'}).click();
 await page.pause();
 


});