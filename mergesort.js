function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf  = wholeArray.slice(0, wholeArray.length/2)
  var secondHalf = wholeArray.slice(wholeArray.length/2, wholeArray.length)
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
	var returnArray = [];
	var pointerFirst = 0;
	var pointerSecond = 0;

	while (pointerFirst < firstHalf.length && pointerSecond < secondHalf.length) {
		if (firstHalf[pointerFirst] < secondHalf[pointerSecond]) {
			returnArray.push(firstHalf[pointerFirst]);
			pointerFirst++;
			
		} else {
			returnArray.push(secondHalf[pointerSecond]);
			pointerSecond++;
		}
	}
	if (pointerFirst === firstHalf.length) {
		returnArray = returnArray.concat(secondHalf.slice(pointerSecond, secondHalf.length));
	}
	if (pointerSecond === secondHalf.length) {
		returnArray = returnArray.concat(firstHalf.slice(pointerFirst, firstHalf.length));
	}
	return returnArray;
}


function mergeSort(array) {
	if (array.length<=1) {
		return array;
	}
	
	return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));
}




