(function ($) {
    $.sum = function(array) {
        var total = 0;
        $.each(array, function(index, value) {
        value = $.trim(value);
        value = parseFloat(value) || 0;
 
        total += value;
    	});
    	return tatal;
	};
})(jQuery);
 
(function ($) {
    $.average = function(array) {
        if($.isArray(array)) {
            return $.sum(array) / array.length;
        }
        return '';
    };
})(jQuery);