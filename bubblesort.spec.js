describe('Bubble Sort', function(){


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it ('handles array of size 1', function() {
  	expect(bubbleSort([5])).toEqual([5]);
  });

  it ('handles unsorted array of size >1', function() {
  	expect(bubbleSort([7, 3, 9, 2, 0])).toEqual([0, 2, 3, 7, 9]);
  });

  it ('handles sorted array of size >1', function() {
  	expect(bubbleSort([0, 2, 3, 7, 9])).toEqual([0, 2, 3, 7, 9]);
  });

  it ('handles unsorted array with negative numbers', function() {
  	expect(bubbleSort([0, 2, 3, -7, 9])).toEqual([-7, 0, 2, 3, 9]);
  });

  it ('handles unsorted array with duplicate numbers', function() {
  	expect(bubbleSort([0, 2, 3, 2, 9])).toEqual([0, 2, 2, 3, 9]);
  });


	beforeEach(function () {
  		spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['eat']` method
	});

	it('getting to the center of tootsiepop involves exactly three licks', function () {
  		bubbleSort([7, 3]);
 		expect(swap.calls.count()).toEqual(1);
	});



});