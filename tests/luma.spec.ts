import { RegPage } from '../pageobjects/registration';
import { Login } from '../pageobjects/Login';
import { Logout } from '../pageobjects/Logout';
import { expect, test, type Page } from '@playwright/test';
import { Search } from '../pageobjects/Search';


test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
	page = await browser.newPage();
	await page.goto('/');
	await page.locator('#search').waitFor();
	// const response: any = await page.waitForResponse((response: any): boolean => response.status() === 200);
	// expect(response.ok()).toBeTruthy();
	await expect(page.locator('#search')).toBeVisible();
});

test.skip('User Registration', async () => {
	const reg = new RegPage(page);
	await reg.go();
	await reg.userReg();
});

test.skip('Logout Functionality', async () => {
	const log_out = new Logout(page);
	await log_out.sgout();

});

test.skip('Login Functionality', async () => {
	const log_in = new Login(page);
	await log_in.go();
	await log_in.invalidLogin();
	await log_in.validLogin();
});

test('Search for existing product and verify results', async ({ page }) => {
	const s = new Search(page);
	// Navigate to the homepage
	await page.goto('/');

	// Define search terms
	s.srch();
});


test.skip('Search with special characters', async ({ page }) => {
	// Navigate to the homepage
	await page.goto('/');

	// Define special character search terms
	const term = '@#$%';

	// Perform search
	await page.fill('#search', term);
	await page.click('button[type="submit"]');

	// Verify no results message
	const noResultsMessage = await page.locator('.message.notice').textContent();
	expect(noResultsMessage).toContain('Your search returned no results');

});

test.skip('Search autocomplete functionality', async ({ page }) => {
	// Navigate to the homepage
	await page.goto('/');

	// Perform partial search
	await page.fill('#search', 'Jack');

	// Wait for autocomplete dropdown
	await page.waitForSelector('.search-autocomplete');

	// Verify autocomplete suggestions appear
	const autocompleteSuggestions = await page.locator('.search-autocomplete .item').count();
	expect(autocompleteSuggestions).toBeGreaterThan(0);

	// Optional: Verify suggestions contain the search term
	const suggestionTexts = await page.locator('.search-autocomplete .item').allTextContents();
	suggestionTexts.forEach(text => {
		expect(text.toLowerCase()).toContain('jack');
	});
});

test.skip('Product Page Navigation', async () => {
	await page.goto('/');
	await page.click('.product-item:first-child a');
	expect(page.url()).toContain('/product/');
});

test.skip('Add to Cart Functionality', async () => {
	await page.goto('/');
	await page.click('.product-item:first-child a');
	await page.click('button[name="add"]');
	const cartCount = await page.locator('.cart-count').innerText();
	expect(parseInt(cartCount)).toBeGreaterThan(0);
});


test.skip('Checkout Process', async () => {
	await page.goto('/');
	await page.click('.product-item:first-child a');
	await page.click('button[name="add"]');
	await page.click('a[href="/checkout"]');
	await page.fill('input[name="email"]', 'test@example.com');
	await page.fill('input[name="address"]', '123 Test St');
	await page.click('button[type="submit"]');
	expect(await page.locator('.order-confirmation').isVisible()).toBeTruthy();
});

test.skip('Password Recovery', async () => {
	await page.goto('/customer/account/forgotpassword/');
	await page.fill('input[name="email"]', 'john.doe@example.com');
	await page.click('button[type="submit"]');
	expect(await page.locator('.success-message').isVisible()).toBeTruthy();
});

test.skip('Responsive Design Check', async () => {
	const viewports = [
		{ width: 320, height: 480 }, // Mobile
		{ width: 1280, height: 800 }, // Tablet
		{ width: 1920, height: 1000 } // Desktop
	];

	for (const viewport of viewports) {
		await page.setViewportSize(viewport);
		await page.goto('/');
		expect(await page.locator('div').filter({ hasText: 'This is a demo store to test' }).first().isVisible()).toBeTruthy();
		expect(page.locator('small')).toBeTruthy();
		expect(await page.getByRole('link', { name: 'New Luma Yoga Collection Get' }).isVisible()).toBeTruthy();
	}
});


test.afterAll(async () => {
	await page.close();
});