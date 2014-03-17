/*!
 * ifargs
 * 
 * Simplified handling of high entropy arguments
 * 
 * @version 1.0
 * @author Mikko Tikkanen <mikko.tikkanen@gmail.com>
 */
/* jshint browser: true, devel: true */
;(function(window, document, undefined) {
	var O = {};

	var fnc = function(args, filter) {
		args = [].slice.call(args, 0);
		var vars = {};

		// Make sure filters match
		filter = filter.split(',');
		var item;
		for(var i = 0, j = 0; i < filter.length; i++, j++) {
			item = filter[i].replace(/^[\s]+|[\s\.]+$/gi, ''); // Trim (whitespace & ".")
			item = item.match(/([\w_]+)\[?([\w_]*)\]?/); // Split item to name(1) & possible type(2)

			if(!item) { return null; } // Match failed
			if(!args[j] && !/\?$/.test(filter[i])) { return null; } // Argument non-existing and not optional
			if(item[2] && typeof args[j] != item[2]) { // Item type defined & differs
				if(/\?$/.test(filter[i])) { // If it was optional, and rewind argument selector and move to next filter
					j--;
					continue;
				} else  {
					return null;
				}
			}

			vars[item[1]] = args[j];
		}

		// Handle argument arrays (...)
		if(args.length >= filter.length && /\.\.\.$/.test(filter[filter.length-1])) {
			vars[item[1]] = args.slice(filter.length-1);
		}

		return vars;
	};


	// Expose to public
	window.ifargs = fnc;

})(window, document);