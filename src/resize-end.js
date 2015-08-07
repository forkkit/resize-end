"use strict";

var TIMEOUT = 200,
    EVENT_KEY = 'resizeend',
    $window = $(window);

window.addEventListener('resize', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
        $(window).trigger(EVENT_KEY);
    }, TIMEOUT);
});