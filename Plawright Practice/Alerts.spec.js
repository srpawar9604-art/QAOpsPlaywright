
const {test} = require('@playwright/test')

test('Alerts & Pop ups', async ({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//await page.pause();
await page.once('dialog', Dialog => Dialog.accept())
page.on('dialog', Dialog => {console.log(Dialog.message())});
await page.locator('#confirmbtn').click()
page.once('dialog', Dialog => Dialog.accept());
await page.locator('#alertbtn').click();
 






})

