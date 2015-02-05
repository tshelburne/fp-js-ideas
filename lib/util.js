function exists(value) {
	return value !== null && value !== undefined;
}

module.exports = {
	exists: exists
};