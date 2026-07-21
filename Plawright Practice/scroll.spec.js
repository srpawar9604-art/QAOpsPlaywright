const {test} = require('@playwright/test')

test('scroll page', async ({page})=>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('text=Latest News').scrollIntoViewIfNeeded();
    await page.pause();
})

