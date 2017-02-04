function blinker() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}

setInterval(blinker, 1000);
