// utils/testSetup.ts
import { test, expect, Page } from '@playwright/test';

export let page: Page;

export const setupPage = (url: string) => {
	return async ({ browser }: any) => {
		page = await browser.newPage();
		await page.goto(url);
		const response: any = await page.waitForResponse((response: any): boolean => response.status() === 200);
		expect(response.ok()).toBeTruthy();
	};
};