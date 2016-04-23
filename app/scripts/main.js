'use strict'

$(document).ready(function() {

    var years = 80;
    var weeks = 52;
    var totalWeeks = years * weeks;
    var activeClass = 'active';

    for (var i = 0; i < totalWeeks; i++) {
        $('#grid').append('<div class="box"></div>');
    }

    var setActiveBoxes = function(currentWeek) {
        $('#grid .box').each(function(i, el) {
            if (i == currentWeek) {
                return false;
            } else {
                $(el).addClass(activeClass);
            }
        });
    }

    var resetGrid = function() {
        $('#grid .box').each(function(i, el) {
            $(el).removeClass(activeClass);
        });
    }

    var minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - years);
    var input = $('.date-input').pickadate({
        container: '#date-picker',
        format: 'mmmm dd, yyyy',
        selectMonths: true,
        selectYears: years,
        min: minDate,
        max: true,
    });
    var picker = input.pickadate('picker');

    $('.date-input').off('click focus');

    $('.date-button').on('click', function(e) {
        if (picker.get('open')) {
            picker.close();
        } else {
            picker.open();
        }

        e.stopPropagation();
    });

    input.on('change', function() {
        var pickedDate = $('.date-input').val();
        if (pickedDate == undefined || pickedDate.trim() === '') {
            resetGrid();
            return;
        }
        var bdayDate = new Date(pickedDate);
        var today = new Date();
        if (!(today < bdayDate)) {
            var time = today.getTime() - bdayDate.getTime();
            var currentWeek = Math.floor(time / (1000 * 60 * 60 * 24 * 7))
            $('.box').each(function(i, el) { $(el).removeClass(activeClass);});
            setActiveBoxes(currentWeek);
        }
    });
});

