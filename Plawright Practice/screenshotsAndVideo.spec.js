// to captute video update the config file as video "retain on failure"


// capture a full page screenshot
const {test} = require('@playwright/test')

test('full page screenshot', async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.waitForLoadState('domcontentloaded');
    await page.screenshot({path: 'fullPageScreenshot.png', fullPage:true});
});

//capture a current visible page screenshot

test('current visible screenshot', async ({page}) =>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.screenshot({path: 'pageScreenshot.png'});
});

// capture specific element screenshot

test('specific element screenshot', async ({page})=>
{


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const logo = await page.locator("//legend[text()='Web Table Fixed header']/parent:: fieldset")
    await logo.screenshot({path: 'partialScreenshot.png'});
});

