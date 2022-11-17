function sumOfArray(arr) {
	const length = arr.length
	let sum = 0;
	for (let i = 0; i < length; i++) {
		sum += arr[i];
	}
	return sum;
}

module.exports = sumOfArray;
