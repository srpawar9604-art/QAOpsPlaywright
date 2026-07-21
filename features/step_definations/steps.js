const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const { expect } = require('@playwright/test');

const playwright = require('@playwright/test');



Given('a login to the Ecommerce application with {string} and {string}', { timeout: 200 * 1000 }, async function (username, password) {
  // Write code here that turns the phrase above into concrete actions


  const products = this.page.locator(".card-body");
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
});

When('Add {string} to the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then('verify that {string} is displayed in the cart', { timeout: 100 * 1000 }, async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();
});

When('enter valid details & place the order', async function () {
  // Write code here that turns the phrase above into concrete actions
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(this.orderId);
});

Then('verify order in present in the OrderHistory', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.navigateToOrders();
  const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(this.orderId);
  expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to the Ecommerce2 application with {string} and {string}',async function (username, password) {
  const userName= this.page.locator('#username')
  const passWord = this.page.locator('#password')
  const signInButton = this.page.locator('#signInBtn');
  
  await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await this.page.title());

  await userName.fill(username);
  await passWord.fill(password);
  await signInButton.click();
  
});


Then('verify the error message is displayed',async  function () {
  
  
  await console.log(await this.page.locator('[style="display: none;"]').textContent());
  await expect(this.page.locator('[style="display: none;"]')).toContainText('Incorrect');
});