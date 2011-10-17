/*!
* jQuery niceDate plugin Sloven language translation v0.1
* Author: Silvester Maraž
* Url: http://maraz.org/2011/10/jquery-nicedate/
* Licensed under the MIT license
*/
$.extend($.fn.niceDate.defaults, {

	pattern : 		/([0-3][0-9]).([0|1][0-9]).(\d{4})\s(\d{2}):(\d{2})$/, // 15.08.2011 15:30

	patternOrder :  [3, 2, 1, 4, 5], // year, month, day, hour, minute

	dayMessages : {
		n : {
			0 : 'Danes',
			1 : 'Včeraj',
			2 : 'Pred 2 dnevoma',
			many : 'Pred %s dnevi'
		},
		p : {
			0 : 'Danes',
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