$(document).ready(function () {
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
    };

    var mySequence = $("#sequence").sequence(options).data("sequence");
});