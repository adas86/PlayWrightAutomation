import { MyData } from '../utils/ddt';

async function go() {

	const myData = new MyData('Sheet1');
	let c = await myData.readCellValue('B2');

	console.log(c);
}

go();