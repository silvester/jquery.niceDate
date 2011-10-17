/*!
* jQuery niceDate plugin v0.1
* Author: Silvester Maraž
* Url: http://maraz.org/2011/10/jquery-nicedate/
* Licensed under the MIT license
*/
;(function($) {

	$.fn.niceDate = function(options) {

		var options = $.extend({}, $.fn.niceDate.defaults, options);
		
		var nowTs = options.nowDate.getTime() / 1000;

		return this.each(function() {

			var o = options;

			var obj = $(this);

			var objDate = o.makeTimestamp(obj.html());

			var objHtml = obj.html();

			if(objDate) {
			
				objTs = objDate.getTime() / 1000;

				var diff = objTs - nowTs;

				var dayDiff = diff / 86400;
				var hourDiff = diff / 3600;
				var minDiff = diff / 60;

				if((dayDiff >= 1 || dayDiff <= -1) || o.dayOnly) {
					
					var objStr = $.fn.niceDate.formatDay(dayDiff, objDate);
					
					console.log(dayDiff + ' date ' + objHtml + ' str ' + objStr);

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

	$.fn.niceDate.formatDay = function(d, objTime) {
		
		var sign = (d >= 0) ? 'p' : 'n';
		var o = $.fn.niceDate.defaults;
		var addition = 0;
		
		if(sign == 'p'){
			var mins = ((d % 1) * 1440) + o.nowDate.getMinutes() + (o.nowDate.getHours() * 60);
			if(mins >= 1440){ addition = 1; }	
		} else {
			var mins = (o.nowDate.getMinutes() + (o.nowDate.getHours() * 60)) + ((d % 1) * 1440);
			if(mins < 0){ addition = 1; }
		}
		
		d = Math.floor(Math.abs(d)) + addition;
		
		console.log('a: ' + addition + ' m: ' + mins + ' d: ' + d + ' sign:' + sign);

		var str = (o.dayMessages[sign][d]) ? o.dayMessages[sign][d] : o.dayMessages[sign]['many'];

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
		
		nowDate:	 	new Date(),
		pattern: 		/([0-3][0-9]).([0|1][0-9]).(\d{4})\s(\d{2}):(\d{2})$/, // 15.08.2011 15:30
		patternOrder: 	[3, 2, 1, 4, 5], // year, month, day, hour, minute
		dayOnly:		true,
		dayMessages : {
			n : {0 : 'Today', 1 : 'Yesterday', many : '%s days before'},
			p : {0 : 'Today', 1 : 'Tomorrow', many : '%s days after'}
		},
		hourMessages : {
			n : {1 : '%s hour before', many : '%s hours before'},
			p : {1 : 'After %s hour', many : 'After %s hours'}
		},
		minMessages : {
			n : {1 : '% minute before', many : '%s minutes before'},
			p : {1 : 'After %s minute',	many : 'After %s minutes'}
		}
		
	};
	
	$.fn.niceDate.defaults.makeTimestamp = function(text)
	{
		
		var o = $.fn.niceDate.defaults;
		var matches = text.match(o.pattern);
		
		if(matches) {
			return new Date(matches[o.patternOrder[0]], 
							matches[o.patternOrder[1]] - 1, 
							matches[o.patternOrder[2]], 
							matches[o.patternOrder[3]], 
							matches[o.patternOrder[4]]);
		} else {
			return false;
		}
		
	}

})(jQuery);
