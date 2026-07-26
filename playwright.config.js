// @ts-check
console.log("Playwright config loaded");
//import { chromium, defineConfig, devices, firefox } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config =({
  testDir: './tests',
  timeout : 20* 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',

  use : {
  browserName : 'chromium',
  headless: false,
  screenshot :'off',
  trace : 'retain-on-failure',
  }, 
});
module.exports = config


