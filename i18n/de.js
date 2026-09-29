/*!
* jQuery niceDate plugin German language translation v0.2
* Author: Silvester Maraž
* Url: http://maraz.org/2011/10/jquery-nicedate/
* Licensed under the MIT license
*/

$.extend($.fn.niceDate.defaults, {

	pattern : 		/([0-3]?[0-9])\.([01]?[0-9])\.(\d{4})\s?(\d{2})?:?(\d{2})?$/, // 15.08.2011 15:30
	patternOrder :  [3, 2, 1, 4, 5], // year, month, day, hour, minute
	monthMessages : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],

	dayMessages : {
		n : {
			0 : 'Heute',
			1 : 'Gestern',
			many : 'Vor %s Tagen'
		},
		p : {
			0 : 'Heute',
			1 : 'Morgen',
			many : 'In %s Tagen'
		}
	},

	hourMessages : {
		n : {
			1 : 'Vor 1 Stunde',
			many : 'Vor %s Stunden'
		},
		p : {
			1 : 'In 1 Stunde',
			many : 'In %s Stunden'
		}
	},

	minMessages : {
		n : {
			0 : 'Gerade eben',
			1 : 'Vor 1 Minute',
			many : 'Vor %s Minuten'
		},
		p : {
			0 : 'Gerade eben',
			1 : 'In 1 Minute',
			many : 'In %s Minuten'
		}
	}

});