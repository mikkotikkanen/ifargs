/*!
 * ifargs
 * 
 * Simplified handling of high entropy arguments
 * 
 * @version 1.0
 * @author Mikko Tikkanen <mikko.tikkanen@gmail.com>
 */
;(function(window, document, undefined) {
	var O = {};
	
  	var fnc = function(args, filter) {
		args = [].slice.call(args, 0);
		var vars = {};
		
		// Make sure filters match
		filter = filter.split(',');
		for(var i = 0; i < filter.length; i++) {
			var item = filter[i].replace(/^[\s]+|[\s\.]+$/gi, ''); // Trim (whitespace + ".")
			item = item.match(/([\w_]+)\[?([\w_]*)\]?/);
			
			if(!item) { return null; } // Match failed
			if(!args[i] && !/\?$/.test(filter[i])) { return null; } // Argument non-existing and not optional
			if(item[2] && typeof args[i] != item[2] && !/\?$/.test(filter[i])) { return null; } // Item type defined & type differs & not optional
			
			vars[item[1]] = args[i];
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

