'use strict';

describe("Fn", function() {

	var Fn = libRequire('fn')
	  , Arr = libRequire('array');
	
	function argArray() {
		return Arr.slice(arguments);
	}

	argArray(1,2,3,4).should.eql([1,2,3,4]);

	describe("cycling arguments", function() {
		
		it("cycles each argument to the left by default", function() {
			Fn.cycle(argArray)(2,3,4,1).should.eql([1,2,3,4]);
		});

		it("cycles the given number of arguments to the right", function() {
			Fn.cycle(argArray, 2)(3,4,1,2).should.eql([1,2,3,4]);
		});

		it("loops arguments if the number is greater than the arity", function() {
			Fn.cycle(argArray, 7)(4,1,2,3).should.eql([1,2,3,4]);
		});

	});

	describe("reversing arguments", function() {
		
		it("reverses the arguments", function() {
			Fn.reverse(argArray)(4,3,2,1).should.eql([1,2,3,4]);
		});

	});

	describe("partial application", function() {
		
		it("applies a single argument", function() {
			var argArray2 = Fn.partial(argArray,1);
			argArray2(2,3,4).should.eql([1,2,3,4]);
		});

		it("applies multiple arguments", function() {
			var argArray3 = Fn.partial(argArray,1,2);
			argArray3(3,4).should.eql([1,2,3,4]);
		});

	});

	describe("composition", function() {
		
		it("composes functions", function() {
			var reduce = Fn.cycle(Arr.reduce);
			var sum = Fn.partial(
				Fn.cycle(Arr.reduce), 
				function(acc, curr) { 
					return acc+curr; 
				}, 0);
			Fn.compose(sum, argArray)(1,2,3,4).should.eql(10);
		});

	});

});