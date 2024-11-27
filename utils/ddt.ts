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


	/**
	 * Writes a value to a specific cell in the Excel sheet.
	 * 
	 * This method allows you to update the value of a specified cell in the Excel sheet 
	 * associated with the instance of the MyData class. It first reads the existing workbook 
	 * and then updates the specified cell with the new value provided as an argument. 
	 * After updating the cell, it saves the workbook to ensure that the changes are persisted.
	 * 
	 * @param {string} cellNumber - The cell reference (e.g., 'A1') where the value needs to be written.
	 * @param {number | string} celldata - The data to be written to the specified cell. 
	 *                                      It can be either a number or a string.
	 * 
	 * @returns {Promise<void>} A promise that resolves when the write operation is complete.
	 * 
	 * @throws {Error} If an error occurs while reading the file or writing to the cell, 
	 *                 it will log the error to the console.
	 * 
	 * @example
	 * const data = new MyData('Sheet1');
	 * await data.writeCellValue('B2', 'Hello World'); // Writes 'Hello World' to cell B2 in Sheet1
	 * await data.writeCellValue('C3', 42); // Writes the number 42 to cell C3 in Sheet1
	 */
	public async writeCellValue(cellNumber: string, celldata: number | string): Promise<void> {
		try {
			const filePath = path.join(__dirname, '../utils/exceldata.xlsx');

			// Load the workbook first
			await this.workbook.xlsx.readFile(filePath);

			let MySheet = this.workbook.getWorksheet(this.sheetName); // Ensure this name matches your Excel sheet

			if (MySheet) { // Check if the sheet exists

				// Update the value of the specified cell with the new data
				MySheet.getCell(cellNumber).value = celldata;
				await this.workbook.xlsx.writeFile(filePath); // Ensure this path is correct
				console.log('writing success');
			}
			else {
				console.error('Unable to find sheet in excel');
			}
		} catch (error) {
			console.error('Error writing file:', error);
		}
	}
}