import { test, expect, Page } from '@playwright/test';
import { getLocator } from '../utils/locatorHelpers';
import { myLocators } from '../pageobjects/pagelocators';
import { setupPage, page } from '../hooks/testsetup';

// Define variables to store string values
const url = myLocators.url;
const testName = myLocators.testName;
const emailAddress = myLocators.emailAddress;
const password = myLocators.password;
const birthDay = myLocators.birthDay;
const birthMonth = myLocators.birthMonth;
const birthYear = myLocators.birthYear;
const firstName = myLocators.firstName;
const lastName = myLocators.lastName;
const companyName = myLocators.companyName;
const address1 = myLocators.address1;
const address2 = myLocators.address2;
const state = myLocators.state;
const city = myLocators.city;
const zipcode = myLocators.zipcode;
const mobileNumber = myLocators.mobileNumber;


test.beforeAll(setupPage(url));

test('Signup New User', async () => {

	// Click on Signup / Login link
	await page.click(myLocators.signupLink);

	// Fill signup form
	await page.fill(myLocators.nameInput, testName);
	await page.fill(myLocators.emailInput, emailAddress);
	await page.click(myLocators.signupButton);

	// Fill account details
	await page.click(myLocators.titleRadio);
	await page.fill(myLocators.passwordInput, password);

	// Select date of birth
	await page.selectOption(myLocators.daysDropdown, birthDay);
	await page.selectOption(myLocators.monthsDropdown, birthMonth);
	await page.selectOption(myLocators.yearsDropdown, birthYear);

	// Optional checkboxes
	await page.check(myLocators.newsletterCheckbox);
	await page.check(myLocators.specialOffersCheckbox);

	// Fill additional details
	await page.fill(myLocators.firstNameInput, firstName);
	await page.fill(myLocators.lastNameInput, lastName);
	await page.fill(myLocators.companyInput, companyName);
	await page.fill(myLocators.address1Input, address1);
	await page.fill(myLocators.address2Input, address2);
	await page.fill(myLocators.stateInput, state);
	await page.fill(myLocators.cityInput, city);
	await page.fill(myLocators.zipcodeInput, zipcode);
	await page.fill(myLocators.mobileNumberInput, mobileNumber);

	// Create Account
	await page.click(myLocators.createAccountButton);

	// Verify account creation
	await expect(page.locator(myLocators.accountCreatedHeading)).toBeVisible();
	await expect(page.locator(myLocators.congratulationsMessage)).toBeVisible();

	// Continue to next page
	await page.click(myLocators.continueButton);

	// Optional: Verify logout functionality
	await page.click(myLocators.logoutLink);
});

test('Signup with Existing Email Validation', async () => {

	// Click on Signup/Login link
	await page.click(myLocators.signupLink);

	// Wait for signup form to load
	await expect(getLocator(page, 'signupForm')).toBeVisible();

	// Fill signup form
	await page.fill(myLocators.nameInput, testName);
	await page.fill(myLocators.emailInput, emailAddress);

	// Click Signup button
	await page.click(myLocators.signupButton);

	// Assertions
	await expect(getLocator(page, 'errorMessageLocator')).toBeVisible();
});

test('Contact Us page with file upload', async () => {

	await page.click(myLocators.contactUsLink);
	await expect(page.locator(myLocators.contactUsHeader)).toBeVisible();

	await page.fill(myLocators.ContactnameInput, myLocators.testName);
	await page.fill(myLocators.ContactemailInput, myLocators.emailAddress);
	await page.fill(myLocators.subjectInput, myLocators.subject);
	await page.fill(myLocators.messageTextarea, myLocators.message);

	await page.locator(myLocators.fileInput).setInputFiles(myLocators.filePath);

	page.on('dialog', dialog => dialog.accept());
	await page.click(myLocators.submitButton);

	await expect(getLocator(page, 'successMessage')).toHaveText('Success! Your details have been submitted successfully.');
});

test('Verify Product count', async () => {
	await page.click(myLocators.productLinkAll);

});

test.afterAll(async () => {
	// Close the browser context and page
	await page.close();
});