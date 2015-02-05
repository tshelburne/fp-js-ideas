var Util = require('./util')
  , Arr = require('./array');

function cycle(fn, num) {
	num = Util.exists(num) ? num : 1;
	return function() {
		var args = Arr.slice(arguments);
		args.unshift(args.pop());
		return num === 1 ? fn.apply(undefined, args) : cycle(fn, num-1).apply(undefined, args);
	};
}

function reverse(fn) {
	return function() {
		return fn.apply(undefined, Arr.slice(arguments).reverse());
	};
}

function partial(fn) {
	var args = Arr.slice(arguments).slice(1);
	args.unshift(undefined);
	return Function.prototype.bind.apply(fn, args);
}

function compose(f,g) {
	return function() {
		var args = Arr.slice(arguments);
		return f(g.apply(undefined, args));
	}
}

module.exports = {
	cycle: cycle,
	reverse: reverse,
	partial: partial,
	compose: compose
};