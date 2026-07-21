const { Before, BeforeStep, AfterStep,After, Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { after } = require("node:test");
const path = require("node:path");
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);



Before(async function () {   // before runs for every scenario & beforeall will run once for all scenario


    const browser = await playwright.chromium.launch({ headless: false, slowMo: 500 });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);


});

After(async function ()
{

   await console.log("I am the last user to execute")

});

BeforeStep(function (){
// this hook will execute before all the steps in a scenario with tag

});

AfterStep(async function({result})
{

    if(result.status===Status.FAILED)
    {
        await this.page.screenshot({path: 'screenshotcucumber.png'});
    }

});