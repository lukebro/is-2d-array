'use strict';

module.exports = array => {
	if (!(array && array.constructor === Array)) {
		return false;
	}

	for (const item of array) {
		if (!(item && item.constructor === Array)) {
			return false;
		}
	}

	return true;
};
