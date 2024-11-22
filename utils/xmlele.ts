import { readFileSync } from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

// Function to read and parse XML
async function parseXML(filePath: string): Promise<void> {
	try {
		// Read the XML file
		const xmlData = readFileSync(filePath, 'utf8');

		// Parse the XML data
		const result = await parseStringPromise(xmlData);

		// Accessing elements
		const books = result.catalog.book;
		books.forEach((book: any, index: number) => {
			console.log(`Book ${index + 1}:`);
			console.log(`Title: ${book.title[0]}`);
			console.log(`Author: ${book.author[0]}`);
			console.log(`Year: ${book.publish_date[0]}`);
			console.log('___________________________________________\n');
		});
	} catch (error) {
		console.error("Error reading or parsing XML:", error);
	}
}

// Call the function with the path to your XML file
const filePath = path.join(__dirname, '../utils/input.xml');
parseXML(filePath);