function findMissing(arr1, arr2) {
	// sort them both
	arr1.sort();
	arr2.sort();p
	//loop over the longer one
	for (let i = 0; i < arr1.length; i++) {
		//if the values don't match, return the first one.
		if (arr1[i] !== arr2[i]){
			return arr1[i]
		}
	}

}

console.log(findMissing([1, 2, 2, 3], [1, 2, 3])); // => 2
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); //=> 8
