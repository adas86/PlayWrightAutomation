import { Page } from '@playwright/test';
import { signupLocators } from '../pageobjects/pagelocators';

export function getLocator(page: Page, locatorKey: keyof typeof signupLocators) {
	return page.locator(signupLocators[locatorKey]);
}