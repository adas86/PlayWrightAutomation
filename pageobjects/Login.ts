import { expect, Locator, Page } from '@playwright/test';
import { readCellValue } from '../utils/ddt';

export class Login {

	email: string
	password: string;
	signInbutton: string;
	signInLink: Locator;
	welcome: Locator;
	msg: string;
	errormsg: Locator;

	page: Page;

	constructor(page: Page) {
		this.page = page;
		this.email = '#email';
		this.password = '#pass';
		this.signInLink = page.getByText('Sign In').first();
		this.signInbutton = '#send2';
		this.welcome = page.locator('.logged-in').first();
		this.msg = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
		this.errormsg = page.getByText(this.msg).first();

	}

	async go() {
		await this.page.goto('/');
		await this.signInLink.click();
	}

	async validLogin() {
		const e = await readCellValue('B4');
		const p = await readCellValue('B5');

		await this.page.fill(this.email, e);
		await this.page.fill(this.password, p);
		await this.page.click(this.signInbutton);
		await expect(this.welcome).toContainText('Welcome')

	}

	async invalidLogin() {
		const e = await readCellValue('B4');
		const p = await readCellValue('B6');

		await this.page.fill(this.email, e);
		await this.page.fill(this.password, p);
		await this.page.click(this.signInbutton);
		await expect(this.errormsg).toHaveText(this.msg);
	}

}