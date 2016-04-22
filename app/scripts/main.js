'use strict'

$(document).ready(function() {

    var years = 80;
    var weeks = 52;
    var totalWeeks = years * weeks;
    for (var i = 0; i < totalWeeks; i++) {
        $('#grid').append('<div class="box"></div>');
    }

    var currentWeek = 1246;
    $('#grid .box').each(function(i, val) {
        if (i == currentWeek) {
            return false;
        } else {
            $(val).addClass('active');
        }
    });


    $('#dp1').fdatepicker({
        initialDate: '02-12-1989',
        format: 'mm-dd-yyyy',
        disableDblClickSelection: true
    });
});

