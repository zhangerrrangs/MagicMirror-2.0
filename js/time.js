function printtime() {
    'use strict';
    var d = new Date(), h = d.getHours(), m = d.getMinutes();
    var sm = "" + m;
    if(sm.length === 1) {
    document.getElementById("Minute").innerHTML = "0" + m;
    } else {
        document.getElementById("Minute").innerHTML = m;
    }

    if (h >= 12) {
        h -= 12;
        document.getElementById("Hour").innerHTML = h;
        document.getElementById("cycle").innerHTML = "PM";
    } else {
        document.getElementById("Hour").innerHTML = h;
        document.getElementById("cycle").innerHTML = "AM";
    }
}

var second = setInterval(printtime, 100);

