window.onload = () =>
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./js/serviceWorker.js')
    }

// ---------------------------------------------------

let nps = function() {
    alert("You clicked a button");
};

$('button').click(nps)




function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":";
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}