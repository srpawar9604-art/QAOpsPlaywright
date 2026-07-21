
const {test, expect} = require('@playwright/test')

test('screenshot', async ({page})=> 

{

await page.goto('https://rahulshettyacademy.com/angularpractice/');

await page.screenshot({path: 'screenshot.png'});

const dropdown =await page.locator('#exampleFormControlSelect1')
await dropdown.selectOption("Female")
await dropdown.screenshot({ path: 'partialScreenshot.png' });

});
test('visual testing ', async ({page})=>
{
await page.goto('https://www.flightaware.com/live/airport/KATL')
expect(await page.screenshot()).toMatchSnapshot('landing.png');
    
});