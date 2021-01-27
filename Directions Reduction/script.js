//URL or Prompt
//www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

https: function dirReduc(arr1) {
	let arr = arr1;
	for (let i = 0; i < arr.length; i++) {
		if (
			(arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
			(arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH')
		) {
			arr1.splice(i, 2);
			i = -1;
		} else if (
			(arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
			(arr[i] === 'WEST' && arr[i + 1] === 'EAST')
		) {
			arr1.splice(i, 2);
			i = -1;
		}
	}
	return arr1;
}

//Tests

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])); // ["WEST"]
