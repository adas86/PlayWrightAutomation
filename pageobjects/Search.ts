import { expect, Locator, Page } from '@playwright/test';
import { readCellValue } from '../utils/ddt';

export class Search {

	searchSelector: string;
	submitButtonSelector: string;
	productItemsSelector: string;
	productItemSelector: string;
	productItemNameSelector: string;

	page: Page;

	constructor(page: Page) {
		this.page = page;

		this.searchSelector = '#search';
		this.submitButtonSelector = 'button[type="submit"]';
		this.productItemsSelector = '.product-item-info';

		this.productItemSelector = '.product-item';
		this.productItemNameSelector = '.product-item-name';



	}

	async srch() {
		const term = 'T-shirt';

		// Clear previous search if needed
		await this.page.locator(this.searchSelector).clear();

		// Perform search
		await this.page.fill(this.searchSelector, term);
		await this.page.click(this.submitButtonSelector);

		// Wait for search results to load
		await this.page.waitForSelector(this.productItemsSelector);

		// Verify search results
		const searchResults = await this.page.locator(this.productItemSelector).count();
		expect(searchResults).toBeGreaterThan(0);

		// Verify page title contains search term
		const pageTitle = await this.page.title();
		expect(pageTitle.toLowerCase()).toContain(term.toLowerCase());

		// Optional: Check if product names contain the search term
		const productNames = await this.page.locator(this.productItemNameSelector).allTextContents();
		const matchingProducts = productNames.filter(name =>
			name.toLowerCase().includes(term.toLowerCase())
		);
		expect(matchingProducts.length).toBeGreaterThan(0);


	}
}