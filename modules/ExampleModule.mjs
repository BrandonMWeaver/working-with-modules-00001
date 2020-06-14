export const test1 = () => {
	console.log("Hello from ExampleModule.");
}

export const test2 = (phrase) => {
	const p = document.createElement('p');
	p.innerHTML = phrase;
	document.body.append(p);
}
