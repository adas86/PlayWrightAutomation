import * as ExcelJS from 'exceljs';
import path from 'path';

export class MyData {
	private workbook: ExcelJS.Workbook;
	private sheetName: string;

	constructor(sheetName: string) {
		this.workbook = new ExcelJS.Workbook();
		this.sheetName = sheetName;
	}

	/**
	 * Reads a specific cell value from an Excel file.
	 * @param {string} cellNumber - The cell reference (e.g., 'A1').
	 * @returns {Promise<string>} The value of the cell as a string.
	 */
	public async readCellValue(cellNumber: string): Promise<string> {

		try {
			const filePath = path.join(__dirname, '../utils/exceldata.xlsx');
			await this.workbook.xlsx.readFile(filePath); // Ensure this path is correct
			let MySheet = this.workbook.getWorksheet(this.sheetName); // Ensure this name matches your Excel sheet
			MySheet;
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
}