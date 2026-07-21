
const {test, expect}  = require('@playwright/test')    // import the playwright test framework
// test is used to define and run test cases. expect is used to write assertions (verify that something is true).

test('dropdown practice', async ({page}) => // test creates a new test case // 
//'dropdown practice' is the name of the test that appears in the test report.
//.only tells Playwright to execute only this test and skip all others.
//async indicates that the function contains asynchronous operations (await).
//{ page } is a Playwright fixture. It automatically provides a new browser tab (page) for this test.
    
{


await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
const dropdown =  page.locator('#dropdown-class-example');
await dropdown.selectOption("option1");


await expect(dropdown).toHaveValue("option1")
await page.locator('#checkBoxOption2').check();

await expect(page.locator('#checkBoxOption2')).toBeChecked();








});