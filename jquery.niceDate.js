;(function($) {

	$.fn.niceDate = function(options) {

		var options = $.extend({}, $.fn.niceDate.defaults, options);

		return this.each(function() {

			var o = options;

			var obj = $(this);

			var objTs = $.fn.niceDate.defaults.makeTimestamp(obj.html());

			var objHtml = obj.html();

			if(objTs) {
			
				objTs = objTs.getTime() / 1000;

				var diff = objTs - o.nowTs;

				var dayDiff = diff / 86400;
				var hourDiff = diff / 3600;
				var minDiff = diff / 60;

				if(dayDiff >= 1 || dayDiff <= -1) {

					var objStr = $.fn.niceDate.formatDay(dayDiff);

				} else if(hourDiff >= 1 || hourDiff <= -1) {

					var objStr = $.fn.niceDate.formatHour(hourDiff);

				} else {

					var objStr = $.fn.niceDate.formatMinut(minDiff);
					
				}

				obj.html(objStr);

				obj.hover(function() {
					$(this).html(objHtml)
				}, function() {
					$(this).html(objStr)
				});
			}

		});
	};

	$.fn.niceDate.formatDay = function(d) {

		var sign = (d >= 0) ? 'p' : 'n';
		
		d = Math.round(Math.abs(d));

		var str = ($.fn.niceDate.defaults.dayMessages[sign][d]) ? $.fn.niceDate.defaults.dayMessages[sign][d] : $.fn.niceDate.defaults.dayMessages[sign]['many'];

		return str.replace('%s', d);

	};

	$.fn.niceDate.formatHour = function(d) {

		var sign = (d >= 0) ? 'p' : 'n';
		
		d = Math.round(Math.abs(d));

		var str = ($.fn.niceDate.defaults.hourMessages[sign][d]) ? $.fn.niceDate.defaults.hourMessages[sign][d] : $.fn.niceDate.defaults.hourMessages[sign]['many'];

		return str.replace('%s', d);

	};

	$.fn.niceDate.formatMinut = function(d) {

		var sign = (d >= 0) ? 'p' : 'n';
		
		d = Math.round(Math.abs(d));

		var str = ($.fn.niceDate.defaults.minMessages[sign][d]) ? $.fn.niceDate.defaults.minMessages[sign][d] : $.fn.niceDate.defaults.minMessages[sign]['many'];

		return str.replace('%s', d);

	};

	$.fn.niceDate.defaults = {
		nowTs:	 		Math.round(new Date().getTime() / 1000),
		pattern: 		/([0-3][0-9]).([0|1][0-9]).(\d{4})\s(\d{2}):(\d{2})$/, // 15.08.2011 15:30
		patternOrder: 	[3, 2, 1, 4, 5], // year, month, day, hour, minute
	};
	
	$.fn.niceDate.defaults.makeTimestamp = function(text)
	{
		var matches = text.match(o.pattern);
		if(matches) {
			return new Date(matches[o.patternOrder[0]], matches[o.patternOrder[1]] - 1, matches[o.patternOrder[2]], matches[o.patternOrder[3]], matches[o.patternOrder[4]]);
		} else {
			return;
		}
	}

})(jQuery);
