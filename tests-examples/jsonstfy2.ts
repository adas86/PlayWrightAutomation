function jsonstfy2() {
	type myScreen = {
		name: string;
		width: number;
		height: number;
	};

	const mysession = {
		myscreens: [] as myScreen[], // Explicitly defining the type of the screens array
	};

	mysession.myscreens.push({ name: "screenA", width: 450, height: 250 });
	mysession.myscreens.push({ name: "screenB", width: 650, height: 350 });
	mysession.myscreens.push({ name: "screenC", width: 750, height: 120 });
	mysession.myscreens.push({ name: "screenD", width: 250, height: 60 });
	mysession.myscreens.push({ name: "screenE", width: 390, height: 120 });
	mysession.myscreens.push({ name: "screenF", width: 1240, height: 650 });

	console.log(mysession);
	console.log('========================================================================');
	console.log(mysession.myscreens);
	console.log('========================================================================');
	console.log(JSON.stringify(mysession, null, '  '));
}

jsonstfy2();