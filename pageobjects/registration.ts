import { expect, Page } from '@playwright/test';
import { readCellValue } from '../utils/ddt';



export class RegPage {
	fname: string;
	lname: string;
	email: string
	password: string;
	confirmpass: string;
	signInbutton: string;

	page: Page;

	constructor(page: Page) {
		this.page = page;
		this.fname = '#firstname';
		this.lname = '#lastname';
		this.email = '#email_address';
		this.password = 'input[name="password"]';
		this.confirmpass = 'input[name="password_confirmation"]'
		this.signInbutton = 'button[title="Create an Account"]';

	}

	// navigate to url
	async go() {
		await this.page.goto('/customer/account/create/');
	}

	// fill user registration form
	async userReg() {
		const f = await readCellValue('B2');
		const l = await readCellValue('B3');
		const e = await readCellValue('B4');
		const p = await readCellValue('B5');
		const cp = await readCellValue('B5');

		await this.page.fill(this.fname, f);
		await this.page.fill(this.lname, l);
		await this.page.fill(this.email, e);
		await this.page.fill(this.password, p);
		await this.page.fill(this.confirmpass, cp);
		await this.page.click(this.signInbutton);
		await expect(this.page.locator('.message-success')).toBeVisible();
	}

}