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

	while (pointerFirst < firstHalf.length-1 && pointerSecond < secondHalf.length-1) {
		console.log("pointerFirst: ", pointerFirst, " pointerSecond: ", pointerSecond);
		if (firstHalf[pointerFirst] < secondHalf[pointerSecond]) {
			returnArray.push(firstHalf[pointerFirst]);
			// if its at the last one, don't increment
			if (!pointerFirst === firstHalf.length-1) {
				pointerFirst++;
			}
			
		} else {
			returnArray.push(secondHalf[pointerSecond]);
			if (!pointerSecond === firstSecond.length-1) {
				pointerSecond++;
			}
		}
	}
	return returnArray;
}


function mergeSort() {

}