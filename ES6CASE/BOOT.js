require('../UPPERCASE/BOOT.js');

var
// origin BOOT
_BOOT = BOOT;

global.BOOT = function(params) {

	params.OTHER_LANGS = {
		__TRACEUR_RUNTIME : function(source) {
			return source;
		},
		js : function(source, path) {

			var
			// traceur
			traceur = require('traceur'),

			// result
			result = traceur.compile(source, {
				experimental : true
			});

			if (result.errors.length > 0) {
				console.log('[ERROR!] PATH: ' + path, '\n\t- ERROR MESSAGES: ' + JSON.stringify(result.errors));
			}

			return 'setTimeout(function(){' + result.js + '},0);';
		}
	};

	return _BOOT(params);
};
