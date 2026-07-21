const {test, expect} = require('@playwright/test');


test('practice web page test', async({page}) =>
{
const email = 'srpawar9604@gmail.com';
const products = page.locator('.card-body');
const productName = 'ZARA COAT 3';
await page.goto("https://rahulshettyacademy.com/client")
await page.locator('#userEmail').fill(email);
await page.locator('#userPassword').fill("Shubham@9850");
await page.locator('#login').click();
await page.waitForLoadState('networkidle');
await page.locator('.card-body b').first().waitFor();

const titles =await  products.locator('b').allTextContents();
await console.log(titles);
const count =await products.count();
await console.log(count);

for(let i =0;i<count;i++)
{
if (await products.nth(i).locator('b').textContent() === productName)
{
   await products.nth(i).locator("text= Add To Cart").click();
    break;
}
}
await page.locator('[routerlink="/dashboard/cart"]').click();

await page.locator('div li').first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
//await expect(page.locator("text=rahulshettyacademy")).toBeVisible();

await page.locator("text=Checkout").click();
await page.locator('[class="input txt"]').first().fill("123");
await page.locator('[class="input txt"]').last().fill("Shubham Pawar");
await page.locator('[name="coupon"]').fill("rahulshettyacademy");
await page.locator('[type="submit"]').click();
const coupon = page.locator('p:has-text="rahulshettyacademy"');
await expect(coupon).toBeTruthy();
 const country = page.locator("[placeholder*='Select Country']");
 await country.click();
await page.locator("[placeholder*='Select Country']").pressSequentially("Ind", {delay:1000});  // press keys one by one letter
const dropdown = page.locator('.ta-results');
await dropdown.waitFor();
console.log(await country.inputValue());

const optionsCount =await dropdown.locator('button').count();
console.log(optionsCount);

for(let i=0;i<optionsCount;i++){

    const text = await dropdown.locator('button').nth(i).textContent();
    if(text ===' India'){
        await dropdown.locator('button').nth(i).click();
        break;
    }
}

await expect (page.locator('.mt-5 label')).toHaveText(email);
await page.locator('.action__submit').click();
expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
const orderID =await page.locator('label.ng-star-inserted').textContent();
await console.log(orderID);

await page.locator('li [routerlink="/dashboard/myorders"]').click();


const rows = page.locator('table tr');
const rowCount = await rows.count();
for(let i=0;i<rows.rowCount;i++)
{
const rowOrderId =(await rows.nth(i).locator('th').textContent()).trim();
if(orderID.includes(rowOrderId))
{
 await rows.nth(i).locator("button").first().click();
 break;
}
}
await page.locator('tbody').waitFor();
const orderIDDetails = (await page.locator('.col-text').textContent()).trim();
expect(orderID.includes(orderIDDetails)).toBeTruthy();


});

