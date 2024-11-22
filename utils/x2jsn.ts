import * as fs from 'fs';
import path from 'path';
import * as xml2js from 'xml2js';

// Function to convert XML to JSON
const convertXmlToJson = (xmlFilePath: string, jsonFilePath: string) => {
	// Read the XML file
	fs.readFile(xmlFilePath, 'utf8', (err, xmlData) => {
		if (err) {
			console.error(`Error reading XML file: ${err.message}`);
			return;
		}

		// Parse the XML data
		xml2js.parseString(xmlData, (err, result) => {
			if (err) {
				console.error(`Error parsing XML: ${err.message}`);
				return;
			}

			// Convert the result to JSON and write to a file
			const jsonData = JSON.stringify(result, null, 2);
			fs.writeFile(jsonFilePath, jsonData, (err) => {
				if (err) {
					console.error(`Error writing JSON file: ${err.message}`);
					return;
				}
				console.log(`Successfully converted XML to JSON and saved to ${jsonFilePath}`);
			});
		});
	});
};

// Example usage
const xmlFilePath = path.join(__dirname, '../utils/input.xml'); // Path to your XML file
const jsonFilePath = path.join(__dirname, '../utils/output.json'); // Path to save the JSON file

convertXmlToJson(xmlFilePath, jsonFilePath);