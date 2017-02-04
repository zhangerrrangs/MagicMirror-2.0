function printtime() {
    'use strict';
    var d = new Date(), h = d.getHours(), m = d.getMinutes();

    document.getElementById("Minute").innerHTML = m;
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

