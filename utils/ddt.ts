import * as ExcelJS from 'exceljs';

/**
 * Reads a specific cell value from an Excel file.
 * @param {string} cellNumber - The cell reference (e.g., 'A1').
 * @returns {Promise<string>} The value of the cell as a string.
 */
export async function readCellValue(cellNumber: string): Promise<string> {
	const workbook = new ExcelJS.Workbook();
	try {
		await workbook.xlsx.readFile('./utils/download.xlsx'); // Ensure this path is correct
		let MySheet = workbook.getWorksheet('Sheet1'); // Ensure this name matches your Excel sheet

		if (MySheet) { // Check if the sheet exists
			let mycell = MySheet.getCell(cellNumber);
			return mycell.value !== null && mycell.value !== undefined
				? String(mycell.value) : 'Cell is empty'; // Return a default string if the cell is empty
		} else {
			console.error('Unable to find sheet in excel');
			return 'Sheet not found'; // Return a string if the sheet is not found
		}
	} catch (error) {
		console.error('Error reading file:', error);
		return 'Error reading file'; // Return a string in case of an error
	}
}