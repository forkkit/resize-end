"use strict";

var TIMEOUT = 200,
    EVENT_KEY = 'resizeend',
    timer,
    event;

// Generate and bind event
if (window.CustomEvent) {
    event = new CustomEvent(EVENT_KEY);
} else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(EVENT_KEY, true, true);
}

window.addEventListener('resize', function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
        window.dispatchEvent(event);
    }, TIMEOUT);
});