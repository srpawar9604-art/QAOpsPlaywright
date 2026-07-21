const {test} = require('@playwright/test')

test('Practice', async ({browser})=>
{


   const context =await  browser.newContext();
   const page = await  context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const windowLink = await page.locator('#opentab');

   const [newPage]= await Promise.all(
        [context.waitForEvent('page'),
            windowLink.click()
            
        ]
    )

})