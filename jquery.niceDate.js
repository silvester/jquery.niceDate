/*!
 * jQuery niceDate plugin v0.2
 * Author: Silvester Maraž
 * Url: http://maraz.org/2011/10/jquery-nicedate/
 * Licensed under the MIT license
 */

;(function($, window) {

	var pluginName = 'niceDate';

	function Plugin(element, options) {

		this.element = $(element);
		
		this.options = $.extend({}, $.fn.niceDate.defaults, options);
		
		this._name = pluginName;

		this.elementDefaultHtml = this.element.html();
		
		this.elementDateObject = this.options.makeTimestamp(this.elementDefaultHtml);
		this.elementTimestamp = this.elementDateObject.getTime() / 1000;
		
		this.calculate();
		
		if(this.options.autoUpdateInterval > 0) {
			var self = this;
			setInterval(function(){ self.update(); }, this.options.autoUpdateInterval);
		}
				
	}
	
	Plugin.prototype.update = function() {
		this.options.nowDateObject = new Date();
		this.calculate();
	};
	
	Plugin.prototype.calculate = function() {
		
		var diff = this.elementTimestamp - (this.options.nowDateObject.getTime() / 1000);

		var dayDiff = diff / 86400;
		var hourDiff = diff / 3600;
		var minDiff = diff / 60;
		
		if (dayDiff >= 30 || dayDiff <= -30) {

			var objStr = formatMonth(this.elementDateObject, this.options);

		} else if ((dayDiff >= 1 || dayDiff <= -1) || this.options.dayOnly) {

			var objStr = formatDay(dayDiff, this.options);

		} else if (hourDiff >= 1 || hourDiff <= -1) {

			var objStr = formatHour(hourDiff, this.options);

		} else {

			var objStr = formatMinute(minDiff, this.options);

		}
		
		this.element.html(objStr);
		
		var defaulthtmlstring = this.elementDefaultHtml;
		
		if (this.options.hoverShow) {
			this.element.hover(function() {
				$(this).html(defaulthtmlstring);
			}, function() {
				$(this).html(objStr);
			});
		}
								
		function formatMonth(objDate, o){
			
			return objDate.getDate() + '. ' + o.monthMessages[objDate.getMonth()] + ' ' + objDate.getFullYear();
			
		};
		
		function formatDay(d, o){
			
			var sign = (d >= 0) ? 'p' : 'n';
			
			var addition = 0;

			if (sign == 'p') {
				var mins = ((d % 1) * 1440) + o.nowDateObject.getMinutes() + (o.nowDateObject.getHours() * 60);
				if (mins > 1440) { addition = 1; }
			} else {
				var mins = (o.nowDateObject.getMinutes() + (o.nowDateObject.getHours() * 60)) + ((d % 1) * 1440);
				if (mins < 0) {	addition = 1; }
			}
			
			d = Math.floor(Math.abs(d)) + addition;

			var str = (o.dayMessages[sign][d]) ? o.dayMessages[sign][d]	: o.dayMessages[sign]['many'];

			return str.replace('%s', d);
			
		};
		
		function formatHour(d, o){
			
			var sign = (d >= 0) ? 'p' : 'n';
			
			d = Math.round(Math.abs(d));

			var str = (o.hourMessages[sign][d]) ? o.hourMessages[sign][d] : o.hourMessages[sign]['many'];

			return str.replace('%s', d);
			
		};
		
		function formatMinute(d, o){
			
			var sign = (d >= 0) ? 'p' : 'n';
			
			d = Math.round(Math.abs(d));

			var str = (o.minMessages[sign][d]) ? o.minMessages[sign][d]	: o.minMessages[sign]['many'];

			return str.replace('%s', d);
			
		};
		
		
	};

	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};
	
	$.fn.niceDate.defaults = {

		nowDateObject: new Date(),
		pattern : /([0-3]?[0-9]).([0|1]?[0-9]).(\d{4})\s?(\d{2})?:?(\d{2})?$/,
		patternOrder : [ 3, 2, 1, 4, 5 ], // year, month, day, hour, minute
		dayOnly : false, // will show only days, no minutes or hours
		hoverShow : true, // will show original date on mouse over
		autoUpdateInterval : 60000, // if 0 no update
		monthMessages : ['January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November',
				'December'],
		dayMessages : {
			n : {
				0 : 'Today',
				1 : 'Yesterday',
				many : '%s days ago'
			},
			p : {
				0 : 'Today',
				1 : 'Tomorrow',
				many : '%s days later'
			}
		},
		hourMessages : {
			n : {
				1 : '%s hour ago',
				many : '%s hours ago'
			},
			p : {
				1 : 'After %s hour',
				many : '%s hours later'
			}
		},
		minMessages : {
			n : {
				1 : '% minute ago',
				many : '%s minutes ago'
			},
			p : {
				1 : 'After %s minute',
				many : '%s minutes later'
			}
		}

	};

	$.fn.niceDate.defaults.makeTimestamp = function(text) {

		var o = $.fn.niceDate.defaults;
		var matches = text.match(o.pattern);

		if (matches) {
			var hours = (matches[o.patternOrder[3]] == undefined) ? 0 : matches[o.patternOrder[3]];
			var minutes = (matches[o.patternOrder[4]] == undefined) ? 0 : matches[o.patternOrder[4]];
			return new Date(matches[o.patternOrder[0]],	matches[o.patternOrder[1]] - 1, matches[o.patternOrder[2]],	hours, minutes);
		} else {
			return false;
		}

	};

}(jQuery));