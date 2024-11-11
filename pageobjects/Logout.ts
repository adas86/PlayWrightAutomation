import { expect, Locator, Page } from '@playwright/test';
import { readCellValue } from '../utils/ddt';

export class Logout {

	drp: Locator;
	signout: Locator;

	page: Page;

	constructor(page: Page) {
		this.page = page;

		this.drp = page.getByRole('banner').locator('button').filter({ hasText: 'Change' });
		this.signout = page.getByRole('link', { name: 'Sign Out' });

	}

	async sgout() {
		await this.drp.click();
		await this.signout.click();
	}
}