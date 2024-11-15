// https://automationexercise.com page locators

export const myLocators = {

	//registration form selector
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

	// Existing User Sign-up form error selector
	signupForm: 'div.signup-form',
	errorMessageLocator: 'p:has-text("Email Address already exist!")',

	// registration form data
	url: 'https://automationexercise.com/',
	testName: 'adas',
	emailAddress: 'adas120422@yopmail.com',
	password: 'Adas#123',
	birthDay: '12',
	birthMonth: '5',
	birthYear: '2018',
	firstName: 'adas',
	lastName: 'das',
	companyName: 'aaa',
	address1: 'myaddress1',
	address2: 'myaddress2',
	state: 'WB',
	city: 'Kolkata',
	zipcode: '700091',
	mobileNumber: '9876543210',

	// Contact Us form seletors
	contactUsLink: 'a[href="/contact_us"]',
	contactUsHeader: 'h2:has-text("Contact Us")',
	ContactnameInput: 'input[placeholder="Name"]',
	ContactemailInput: 'input[placeholder="Email"]',
	subjectInput: 'input[placeholder="Subject"]',
	messageTextarea: 'textarea[placeholder="Your Message Here"]',
	fileInput: 'input[name="upload_file"]',
	submitButton: 'input[value="Submit"]',
	successMessage: '.status.alert.alert-success',

	// Contact us form data
	subject: 'test sub',
	message: 'test message',
	filePath: 'utils\\download.xlsx',

	// Product locator
	productLinkAll: '.product-image-wrapper',


};

// locator example, both are correct and equivalent
// page.locator("span:has-text('Search')");
// page.locator('span', { hasText: 'Search' });