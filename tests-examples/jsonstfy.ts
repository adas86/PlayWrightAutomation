function jsonstfy() {
	type ScrArr = {
		name: string;
		width: number;
		height: number;
	};

	// let myscr: ScrArr;
	let mysession1 = [] as ScrArr[];

	mysession1.push({ name: "screenA", width: 450, height: 250 });
	mysession1.push({ name: "screenB", width: 650, height: 350 });
	mysession1.push({ name: "screenC", width: 750, height: 120 });
	mysession1.push({ name: "screenD", width: 250, height: 60 });
	mysession1.push({ name: "screenE", width: 390, height: 120 });
	mysession1.push({ name: "screenF", width: 1240, height: 650 });

	console.log(mysession1);
	console.log('========================================================================');
	console.log(JSON.stringify(mysession1, null, ' '));
}

jsonstfy();