/*!
* jQuery niceDate plugin Turkish language translation v0.2
* Author: Silvester Maraž
* Url: http://maraz.org/2011/10/jquery-nicedate/
* Licensed under the MIT license
*/

$.extend($.fn.niceDate.defaults, {

	pattern : 		/([0-3]?[0-9])\.([01]?[0-9])\.(\d{4})\s?(\d{2})?:?(\d{2})?$/, // 15.08.2011 15:30
	patternOrder :  [3, 2, 1, 4, 5], // year, month, day, hour, minute
	monthMessages : ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],

	dayMessages : {
		n : {
			0 : 'Bugün',
			1 : 'Dün',
			many : '%s gün önce'
		},
		p : {
			0 : 'Bugün',
			1 : 'Yarın',
			many : '%s gün sonra'
		}
	},

	hourMessages : {
		n : {
			1 : '1 saat önce',
			many : '%s saat önce'
		},
		p : {
			1 : '1 saat sonra',
			many : '%s saat sonra'
		}
	},

	minMessages : {
		n : {
			0 : 'Şimdi',
			1 : '1 dakika önce',
			many : '%s dakika önce'
		},
		p : {
			0 : 'Şimdi',
			1 : '1 dakika sonra',
			many : '%s dakika sonra'
		}
	}

});