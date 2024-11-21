// @ts-check
import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	retries: 0,

	/* Maximum time one test can run for. */
	timeout: 60 * 1000,
	expect: {
		timeout: 50000,
	},

	reporter: [
		['list', { printSteps: true }],
		['html', { open: 'never' }],
		['playwright-msteams-reporter',
			{
				webhookUrl: "https://ltimindtree.webhook.office.com/webhookb2/1ece7b74-375c-48da-8126-0fdac9faaa6f@ff355289-721e-4dd7-a663-afec62ab9d54/IncomingWebhook/c83612eb66ea4a39af81a0b93e965128/816fd261-f34c-4f88-a956-6eefbaea69ba/V2Oxu47MDvCulXLYCZtf_CzNijz1_4RjpUN0q2QFpEWu81",
				webhookType: "msteams",
				mentionOnFailure: "Arunava Das<arunava.10749187@ltimindtree.com>",
				mentionOnFailureText: "{mentions} THIS MESSAGE IS BEING PUSHED THROUGH WEBHOOK IN REALTIME AND WILL ONLY SHOW WHEN THERE ARE FAILED TESTS!"
			}
		]
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
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		// {
		// 	name: 'Google Chrome',
		// 	use: { channel: 'chrome' },
		// },
	],
};

export default config;