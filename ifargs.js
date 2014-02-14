/*!
 * ifargs
 * 
 * Making complex argumenthandling simple.
 * 
 * @version 1.0
 * @author Mikko Tikkanen <mikko.tikkanen@gmail.com>
 */
;(function(window, document, undefined) {
	var O = {};
	
  	var fnc = function(args, filter) {
		var vars = {};
		
		// Make sure filters match
		filter = filter.split(',');
		for(var i = 0; i < filter.length; i++) {
			var item = filter[i].replace(/^[\s]+|[\s]+$/gi, ''); // Trim
			item = item.match(/([\w_]+)?\[([\w]*)?\]/);
			if(!item) { return; }
			
			if(typeof args[i] != item[2]) { return; }
			vars[item[1]] = args[i];
		}
		
		return vars;
	};
	
	
	// Expose to public
	window.ifargs = fnc;
	
})(window, document);
