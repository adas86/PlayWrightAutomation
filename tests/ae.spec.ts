import { test, expect, Page } from '@playwright/test';
import { getLocator } from '../utils/locatorHelpers';
import { signupLocators } from '../pageobjects/pagelocators';
import { setupPage, page } from '../hooks/testsetup';

// Define variables to store string values
const url = signupLocators.url;
const testName = signupLocators.testName;
const emailAddress = signupLocators.emailAddress;
const password = signupLocators.password;
const birthDay = signupLocators.birthDay;
const birthMonth = signupLocators.birthMonth;
const birthYear = signupLocators.birthYear;
const firstName = signupLocators.firstName;
const lastName = signupLocators.lastName;
const companyName = signupLocators.companyName;
const address1 = signupLocators.address1;
const address2 = signupLocators.address2;
const state = signupLocators.state;
const city = signupLocators.city;
const zipcode = signupLocators.zipcode;
const mobileNumber = signupLocators.mobileNumber;


test.beforeAll(setupPage(url));

test('Signup New User', async () => {

	// Click on Signup / Login link
	await page.click(signupLocators.signupLink);

	// Fill signup form
	await page.fill(signupLocators.nameInput, testName);
	await page.fill(signupLocators.emailInput, emailAddress);
	await page.click(signupLocators.signupButton);

	// Fill account details
	await page.click(signupLocators.titleRadio);
	await page.fill(signupLocators.passwordInput, password);

	// Select date of birth
	await page.selectOption(signupLocators.daysDropdown, birthDay);
	await page.selectOption(signupLocators.monthsDropdown, birthMonth);
	await page.selectOption(signupLocators.yearsDropdown, birthYear);

	// Optional checkboxes
	await page.check(signupLocators.newsletterCheckbox);
	await page.check(signupLocators.specialOffersCheckbox);

	// Fill additional details
	await page.fill(signupLocators.firstNameInput, firstName);
	await page.fill(signupLocators.lastNameInput, lastName);
	await page.fill(signupLocators.companyInput, companyName);
	await page.fill(signupLocators.address1Input, address1);
	await page.fill(signupLocators.address2Input, address2);
	await page.fill(signupLocators.stateInput, state);
	await page.fill(signupLocators.cityInput, city);
	await page.fill(signupLocators.zipcodeInput, zipcode);
	await page.fill(signupLocators.mobileNumberInput, mobileNumber);

	// Create Account
	await page.click(signupLocators.createAccountButton);

	// Verify account creation
	await expect(page.locator(signupLocators.accountCreatedHeading)).toBeVisible();
	await expect(page.locator(signupLocators.congratulationsMessage)).toBeVisible();

	// Continue to next page
	await page.click(signupLocators.continueButton);

	// Optional: Verify logout functionality
	await page.click(signupLocators.logoutLink);
});

test('Signup with Existing Email Validation', async () => {

	// Click on Signup/Login link
	await page.click(signupLocators.signupLink);

	// Wait for signup form to load
	await expect(getLocator(page, 'signupForm')).toBeVisible();

	// Fill signup form
	await page.fill(signupLocators.nameInput, testName);
	await page.fill(signupLocators.emailInput, emailAddress);

	// Click Signup button
	await page.click(signupLocators.signupButton);

	// Assertions
	await expect(getLocator(page, 'errorMessageLocator')).toBeVisible();
});

test.only('Contact Us page with file upload', async () => {

	await page.click(signupLocators.contactUsLink);
	await expect(page.locator(signupLocators.contactUsHeader)).toBeVisible();

	await page.fill(signupLocators.ContactnameInput, signupLocators.testName);
	await page.fill(signupLocators.ContactemailInput, signupLocators.emailAddress);
	await page.fill(signupLocators.subjectInput, signupLocators.subject);
	await page.fill(signupLocators.messageTextarea, signupLocators.message);

	await page.locator(signupLocators.fileInput).setInputFiles(signupLocators.filePath);

	page.on('dialog', dialog => dialog.accept());
	await page.click(signupLocators.submitButton);

	await expect(getLocator(page, 'successMessage')).toHaveText('Success! Your details have been submitted successfully.');
});

test.afterAll(async () => {
	// Close the browser context and page
	await page.close();
});