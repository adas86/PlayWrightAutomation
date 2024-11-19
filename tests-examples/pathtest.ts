import * as fs from 'fs';
import * as path from 'path';

// Assuming the working directory is <typrescript project root folder>
const filePath = path.join(__dirname, '../utils/file.txt');

// Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
// 	if (err) {
// 		console.error('Error reading file:', err);
// 		return;
// 	}
// 	console.log(data);
// });
console.log(`this the location of current file execution "${filePath}"`);