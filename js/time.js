"use strict";
function PrintTime() {
    var d = new Date(), h = d.getHours(), n = d.getMinutes();
    if (h >= 12) {
        document.getElementById("Time").innerHTML = h + ":" + n + "-" + "PM";
    } else {
        document.getElementById("Time").innerHTML = h + ":" + n + "-" + "AM";
    }

}
var second = setInterval(PrintTime, 100);
