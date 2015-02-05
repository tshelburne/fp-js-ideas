'use strict';

describe("Arr", function() {

	var Arr = libRequire('array');
	
	describe("slice", function() {
		
		it("calls prototype slice", function() {
			Arr.slice([1,2,3]).should.eql([1,2,3].slice());
		});

	});
	
	describe("reduce", function() {
		
		function fn(acc, curr) {
			return acc+curr;
		}

		it("calls prototype reduce", function() {
			Arr.reduce([1,2,3], fn, 0).should.eql([1,2,3].reduce(fn, 0));
		});

	});
	
	describe("map", function() {

		function fn(value) {
			return value*2;
		}
		
		it("calls prototype map", function() {
			Arr.map([1,2,3], fn).should.eql([1,2,3].map(fn));
		});

	});

});