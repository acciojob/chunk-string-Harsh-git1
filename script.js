function stringChop(str, size) {
  // your code here
	let a = [];
	let i=0;
	while(i < str.length - size) {
		let sub = str.substring(i, i+size);
		a.push(sub);
		i += size;
	}

	if(i < str.length) {
		a.push(str.substring(i, i+str.length));
	}

	return a;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));













