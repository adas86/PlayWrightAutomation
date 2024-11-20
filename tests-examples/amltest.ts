import * as fs from 'fs';
import path from 'path';
import * as xml2js from 'xml2js';

// Function to read XML from a file and parse it
function parseXmlFromFile(filePath: string) {
	// Read the XML file
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading the file:', err);
			return;
		}

		// With parser
		var parser = new xml2js.Parser(/* options */);
		parser.parseStringPromise(data).then(function (result: any) {

			console.log(JSON.stringify(result, null, 2)); // Pretty print the JSON
			console.log('Done');
		})
			.catch(function (err: any) {
				// Failed
				console.log(err);
			});

		// Without parser
		xml2js.parseStringPromise(data /*, options */).then(function (result: any) {

			console.log(JSON.stringify(result, null, 2)); // Pretty print the JSON
			console.log('Done');
		})
			.catch(function (err: any) {
				// Failed
				console.log(err);
			});
	});
}

// Function to format the book objects for better readability


// Specify the path to your XML file here
const xmlFilePath = path.join(__dirname, '../utils/input.xml'); // Replace with your actual file path
parseXmlFromFile(xmlFilePath);