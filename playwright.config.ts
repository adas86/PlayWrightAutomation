// @ts-check
import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	retries: 0,

	/* Maximum time one test can run for. */
	timeout: 60 * 1000,
	expect: {
		timeout: 40000,
	},

	reporter: [
		['list', { printSteps: true }],
		['html', { open: 'never' }]
	],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		baseURL: 'https://magento.softwaretestingboard.com/',
		// browserName: 'chromium',
		headless: false,
		screenshot: 'only-on-failure',
		trace: 'on', // off, on
	},

	// Configure projects for major browsers.
	projects: [
		{
			name: 'Google Chrome',
			use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
		},
		// {
		// 	name: 'chromium',
		// 	use: { ...devices['Desktop Chrome'] },
		// },
	],
};

export default config;