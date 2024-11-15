import { Page } from '@playwright/test';
import { myLocators } from '../pageobjects/pagelocators';

export function getLocator(page: Page, locatorKey: keyof typeof myLocators) {
	return page.locator(myLocators[locatorKey]);
}