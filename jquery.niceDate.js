;(function($) {

	$.fn.niceDate = function(options) {

		var options = $.extend({}, $.fn.niceDate.defaults, options);

		return this.each(function() {

			var o = options;

			var obj = $(this);

			var matches = obj.html().match(o.pattern);

			var objHtml = obj.html();

			if(matches) {

				var objTs = new Date(matches[o.objTs[0]], matches[o.objTs[1]] - 1, matches[o.objTs[2]], matches[o.objTs[3]], matches[o.objTs[4]]);
				
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
		nowTs : Math.round(new Date().getTime() / 1000)
	};

})(jQuery);

/*Slovenian date time formats*/
jQuery.extend(jQuery.fn.niceDate.defaults, {

	pattern : /([0-3][0-9]).([0|1][0-9]).(\d{4})\s(\d{2}):(\d{2})$/, // 15.08.2011 15:30

	objTs : [3, 2, 1, 4, 5], // year, month, day, hour, minute

	dayMessages : {
		n : {
			0 : 'Danes',
			1 : 'Včeraj',
			2 : 'Pred 2 dnevoma',
			many : 'Pred %s dnevi'
		},
		p : {
			1 : 'Jutri',
			many : 'Čez %s dni'
		}
	},

	hourMessages : {
		n : {
			1 : 'Pred 1 uro',
			2 : 'Pred 2 urama',
			many : 'Pred %s urami'
		},
		p : {
			1 : 'Čez 1 uro',
			2 : 'Čez 2 uri',
			3 : 'Čez 3 ure',
			4 : 'Čez 4 ure',
			many : 'Čez %s ur'
		}
	},

	minMessages : {
		n : {
			1 : 'Pred 1 minuto',
			2 : 'Pred 2 minutoma',
			many : 'Pred %s minutami'
		},
		p : {
			1 : 'Čez 1 minuto',
			2 : 'Čez 2 minuti',
			3 : 'Čez 3 minute',
			4 : 'Čez 4 minute',
			many : 'Čez %s minut'
		}
	}

});
