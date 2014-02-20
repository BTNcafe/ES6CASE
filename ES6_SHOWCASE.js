// run: nodemon WebPageExample.js

require('./ES6CASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'ES6_SHOWCASE',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUseDB : true
	}
});
