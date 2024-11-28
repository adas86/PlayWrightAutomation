import { DOMParser } from '@xmldom/xmldom';
import { select } from 'xpath';
import * as fs from 'fs';
import path from 'path';

/**
 * Updates the value of XML nodes based on a provided XPath expression.
 * 
 * @param filePath string - The path to the XML file that needs to be updated.
 * @param xpathExpression XPath as string - The XPath expression used to select the nodes to be updated.
 * @param newValue string - The new value that will replace the current text content of the selected nodes.
 * @author Arunava Das
 */
export function updateXmlValue(filePath: string, xpathExpression: string, newValue: string): void {

	try {
		// Read the XML file as a string
		const xmlString = fs.readFileSync(filePath, 'utf8');

		// Parse the XML string into a DOM Document
		const doc = new DOMParser().parseFromString(xmlString, 'text/xml');

		// Use XPath to select nodes matching the expression
		let nodes = select(xpathExpression, doc as unknown as Node);
		if (nodes !== null) {
			console.log(`Found
				${nodes}
				nodes for
				XPath expression: ${xpathExpression}`);
		}

		// Check if nodes is not null and has elements before iterating
		if (Array.isArray(nodes) && nodes.length > 0) {
			// Filter nodes to get only Element nodes (nodeType 1)
			const elementNodes = nodes.filter((node): node is Element => node.nodeType === 1); // nodeType 1 is for Element nodes

			// Update the value of each selected node's text content
			elementNodes.forEach((node: Element) => {
				if (node.firstChild) {
					node.firstChild.textContent = (newValue + 'textContent');// Update the text content
				}
			});
		} else {
			console.warn(`No nodes found for the XPath expression: ${xpathExpression}`);
		}

		// Serialize the updated XML back to a string
		const updatedXmlString = doc.toString();

		// Write the updated XML string back to the file
		fs.writeFileSync(filePath, updatedXmlString, 'utf8');
		console.log(`Updated XML file at ${xmlFilePath}`);
	}
	catch (error) {
		console.error(error);
	}
}


//XML file path
const xmlFilePath = path.join(__dirname, '../utils/xmlupdate.xml');

// XPath expression to select nodes
const xpathExpr = '//book/author'; // XPath expression to select <item> elements

//New text content for the selected nodes
const newValue2 = '5th update with.....';

// Update the XML file
updateXmlValue(xmlFilePath, xpathExpr, newValue2);