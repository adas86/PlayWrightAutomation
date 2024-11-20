const webhookUrl = "https://ltimindtree.webhook.office.com/webhookb2/1ece7b74-375c-48da-8126-0fdac9faaa6f@ff355289-721e-4dd7-a663-afec62ab9d54/IncomingWebhook/c83612eb66ea4a39af81a0b93e965128/816fd261-f34c-4f88-a956-6eefbaea69ba/V2Oxu47MDvCulXLYCZtf_CzNijz1_4RjpUN0q2QFpEWu81";

// const webhookUrl = 'YOUR_WEBHOOK_URL_HERE'; // Replace with your Incoming Webhook URL

const message = {
	text: "Hello, Teams! This is a message from my JavaScript program."
};

fetch(webhookUrl, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(message)
})
	.then(response => {
		if (response.ok) {
			console.log('Message posted successfully!');
		} else {
			console.error('Error posting message:', response.statusText);
		}
	})
	.catch(error => {
		console.error('Network error:', error);
	});
