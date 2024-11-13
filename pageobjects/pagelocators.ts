// signupLocators.ts
export const signupLocators = {
	signupLink: 'a:has-text("Signup / Login")',
	nameInput: 'input[placeholder="Name"]',
	emailInput: 'form:has-text("Signup") >> input[placeholder="Email Address"]',
	signupButton: 'button:has-text("Signup")',
	titleRadio: 'input[type="radio"][id="id_gender1"]',
	passwordInput: 'input[name="password"]',
	daysDropdown: '#days',
	monthsDropdown: '#months',
	yearsDropdown: '#years',
	newsletterCheckbox: 'input[name="newsletter"]',
	specialOffersCheckbox: 'input[name="optin"]',
	firstNameInput: 'input[name="first_name"]',
	lastNameInput: 'input[name="last_name"]',
	companyInput: 'input[name="company"]',
	address1Input: 'input[name="address1"]',
	address2Input: 'input[name="address2"]',
	stateInput: 'input[name="state"]',
	cityInput: 'input[name="city"]',
	zipcodeInput: '#zipcode',
	mobileNumberInput: 'input[name="mobile_number"]',
	createAccountButton: 'button:has-text("Create Account")',
	accountCreatedHeading: 'h2:has-text("Account Created!")',
	congratulationsMessage: 'text=Congratulations! Your new',
	continueButton: 'a:has-text("Continue")',
	logoutLink: 'a:has-text(" Logout")',

	// Existing User Sign-up error
	signupForm: 'div.signup-form',
	errorMessageLocator: 'p:has-text("Email Address already exist!")'
};

// locator example, both are correct and equivalent
// page.locator("span:has-text('Search')");
// page.locator('span', { hasText: 'Search' });