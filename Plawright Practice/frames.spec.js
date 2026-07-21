const {test} = require('@playwright/test')

test('frames', async ({page})=>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#checkBoxOption2').click();

    const framesPage = page.frameLocator('#courses-iframe')
    await framesPage.getByRole('link', {name:'All Access Plan'}).click();
    const textFromFramePage=await framesPage.locator('[style="padding-bottom: 25px;"]').textContent();
    await console.log(textFromFramePage);



})