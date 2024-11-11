
import { defineParameterType, When, Given, Then } from '@cucumber/cucumber';
import path from 'path';

import { test, Locator, Page, expect } from '@playwright/test';

import { POManager } from '../../pageobjects/POManager';
import assert from "assert";

const binDir = path.resolve(__dirname, "../../bin")
console.log(binDir)

let poManager: POManager
defineParameterType({
	name: "command",
	regexp: /`(.+)`/,
	transformer: (cmd) => cmd,
})

When("I run {string}", function (string) {
	console.log(string)
	this.stdout = string;

})

Then('Verify order is present in the OrderHistory', async function () {
	// Write code here that turns the phrase above into concrete actions
	await this.dashboardPage.navigateToOrders();
	const ordersHistoryPage = poManager.getOrdersHistoryPage();
	await ordersHistoryPage.searchOrderAndSelect(this.orderId);
	expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

When('Enter valid details and Place the Order', async function () {
	// Write code here that turns the phrase above into concrete actions
	await this.cartPage.Checkout();

	const ordersReviewPage = poManager.getOrdersReviewPage();
	await ordersReviewPage.searchCountryAndSelect("ind", "India");
	this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
	console.log(this.orderId);
});

Then('Verify {string} is displayed in the Cart', async function (productName) {
	// Write code here that turns the phrase above into concrete actions
	this.cartPage = poManager.getCartPage();
	await this.cartPage.VerifyProductIsDisplayed(productName);
});

When('Add {string} to Cart', async function (productName) {
	// Write code here that turns the phrase above into concrete actions
	this.dashboardPage = poManager.getDashboardPage();
	await this.dashboardPage.searchProductAddCart(productName);
	await this.dashboardPage.navigateToCart();
});

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {

	poManager = new POManager(this.page);
	//js file- Login js, DashboardPage
	const loginPage = poManager.getLoginPage();
	await loginPage.go();
	await loginPage.validLogin(username, password);

});



Then("the stdout should contain {string}", function (string) {

})


Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, async function () {


});


Then('Verify Error message is displayed', async function () {
	await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');

})
