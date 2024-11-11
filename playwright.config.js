// @ts-check
const { devices } = require('@playwright/test');

const config = {
	testDir: './tests',
	retries: 0,

	/* Maximum time one test can run for. */
	timeout: 30 * 1000,
	expect: {

		timeout: 20000
	},

	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		baseURL: 'https://magento.softwaretestingboard.com/',
		browserName: 'chromium',
		headless: false,
		screenshot: 'only-on-failure',
		trace: 'on',//off,on



	},


};

module.exports = config;
