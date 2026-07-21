const {test} = require('@playwright/test');

test('advanced locator test', async ({page}) =>
   
    {

await page.goto('https://rahulshettyacademy.com/angularpractice/');
await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel('Gender').selectOption("Female");

await page.getByPlaceholder("Password").fill("Shubham Pawar");
await page.getByLabel('Employed').click();
await page.getByText(" The Form has been submitted successfully!.").isVisible();

await page.getByRole("button",{name :"submit"}).click();
await page.getByRole("link", {name : "Shop"}).click();
await page.locator('app-card').filter({hasText: 'Nokia Edge'} ).getByRole("button",{name : "add"}).click();

});