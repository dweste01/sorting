describe('Split Array function', function() {
  	it('is able to split an even-length array into two halves', function() {
    // your code here 
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });

    it('is able to split an odd-length array into two halves', function() {
    // your code here 
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
  	it('is able to split an empty array into two halves', function() {
    // your code here 
    expect(split([])).toEqual([[], []]);
  });
  	it('is able to split an arry of size 1 into two halves', function() {
    // your code here 
    expect(split([1])).toEqual([[], [1]]);
  });

});

describe('Merge', function(){
  	it('is able to merge two empty arrays into one sorted array', function(){
  	expect(merge([], [])).toEqual([]);
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
  	expect(merge([2, 8, 22], [3, 4, 5])).toEqual([2, 3, 4, 5, 8, 22]);
  });

  	it('is able to merge two sorted arrays of different size (2nd is larger) into one sorted array', function(){
  		expect(merge([2, 8, 22, 56], [3, 4, 5])).toEqual([2, 3, 4, 5, 8, 22, 56]);
  	});

  	it('is able to merge two sorted arrays of different size (1st is larger) into one sorted array', function(){
  		expect(merge([2, 8], [1, 6, 19])).toEqual([1, 2, 6, 8, 19]);
  	});

  	it('is able to merge two sorted arrays (one is empty) into one sorted array', function(){
  		expect(merge([], [1, 6, 19])).toEqual([1, 6, 19]);
  	});
});

describe('MergeSort', function(){
  	it('is able to sort an empty array', function(){
  	expect(mergeSort([])).toEqual([]);
  });

  it('is able to sort an array of size 1', function(){
  	expect(mergeSort([5])).toEqual([5]);
  });

  	it('is able to sort an array of size >1', function(){
  		expect(mergeSort([2, 8, 22, 56, 5])).toEqual([2, 5, 8, 22, 56]);
  	});

});







