
function bubbleSort(array) {
	for (var i = 0; i < array.length-1; i++) {
		for (var j = 0; j < array.length-i; j++) {
			console.log("i: ", i, " j: ", j);
			if (array[j] > array[j+1]) {
				// var temp = array[j];
				// array[j] = array[j+1];
				// array[j+1] = temp;
				console.log("about to swap");
				array = swap(array, i, j);
			}
			console.log(array);
		}
	}
	return array;
}


function swap(array, i, j) {
	console.log("in swap");
	var temp = array[j];
	array[j] = array[j+1];
	array[j+1] = temp;
	return array
}
				