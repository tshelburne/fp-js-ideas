module.exports = ['slice','reduce','map'].reduce(function(acc, curr) {
	acc[curr] = Function.prototype.call.bind(Array.prototype[curr]);
	return acc;
}, {});