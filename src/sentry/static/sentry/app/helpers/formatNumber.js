define(["ember"], function(Ember){
    'use strict';

    var number_formats = [
        [1000000000, 'b'],
        [1000000, 'm'],
        [1000, 'k']
    ];

    var floatFormat = function(number, places) {
        var multi = Math.pow(10, places);
        return parseInt(number * multi, 10) / multi;
    };

    var formatNumber = function(number){
        var b, x, y, o, p;

        number = parseInt(number, 10);

        for (var i=0; (b=number_formats[i]); i++){
            x = b[0];
            y = b[1];
            o = Math.floor(number / x);
            p = number % x;
            if (o > 0) {
                if (o / 10 > 1 || !p)
                    return '' + o + y;
                return '' + floatFormat(number / x, 1) + y;
            }
        }
        return '' + number;
    };

    var formatNumberHelper = function(value, options) {
      return formatNumber(value);
    };

    Ember.Handlebars.helper('format-number', formatNumberHelper);

    return formatNumberHelper;
});
