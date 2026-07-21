const {test} = require('@playwright/test')

test('Autosuggestions', async ({page}) =>
{

await page.goto('https://www.google.com/')
await page.locator('#APjFqb').fill("pune university")
const dropdownOptions = await page.locator('div [jsname="bw4e9b"]').first();
await dropdownOptions.waitFor();
const optionsCOunt =await  dropdownOptions.locator('li').count();
console.log(optionsCOunt)


for (let i=0;i<optionsCOunt;i++)
{
    const text =await dropdownOptions.locator('li').nth(i).textContent()
    if(text.includes('address'))
    {
        await dropdownOptions.locator('li').nth(i).click();
        break;
    }
}
//await page.pause();


} );