window.onload = () =>
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/serviceWorker.js')
    }

// ---------------------------------------------------



let nps = function () {
    alert("You clicked a button");
};



$("button").click(nps)