function print(val:number) {
	if(val % 2 === 0 || val % 11 === 0) {
		// if val is divisible by 22, this function will print candybar
		if(val % 2 === 0) console.log('candy');
		if(val % 11 === 0) console.log('bar');
	} else {
		console.log(number);
	}
}