import * as fs from 'fs';
import path from 'path';
import { Builder } from 'xml2js';

// Function to read a JSON file
function readJSONFile(filePath: string): any {
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading JSON file:', error);
		throw error;
	}
}

// Function to convert JSON to XML
function convertJSONToXML(jsonData: any): string {
	const builder = new Builder();
	return builder.buildObject(jsonData);
}

// Main function
function xml2JSON() {
	const inputFilePath = path.join(__dirname, 'input.json'); //'data.json'  Replace with your JSON file path
	const outputFilePath = path.join(__dirname, 'output.xml'); //'output.xml' Replace with your desired output XML file path

	try {
		const jsonData = readJSONFile(inputFilePath);
		const xmlData = convertJSONToXML(jsonData);

		// Write the XML data to a file
		fs.writeFileSync(outputFilePath, xmlData);
		console.log(`XML file has been saved to ${outputFilePath}`);
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

xml2JSON();