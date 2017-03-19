'use strict';

module.exports = array => {
	if (!Array.isArray(array)) {
		return false;
	}

	for (const item of array) {
		if (!Array.isArray(item)) {
			return false;
		}
	}

	return true;
};
