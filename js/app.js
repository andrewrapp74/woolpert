$(document).ready(function () {
    random();
});

var random = function () {
    for (i = 1; i < 11; i++) {
        var x = Math.round(Math.floor((Math.random() * 776) + 1));
        var y = Math.round(Math.floor((Math.random() * 476) + 1));
        var place = '<div class="point" id="' + i + '">' + i + '</div';
        $('.canvas').append(place);
        $('#' + i).css({
            top: y,
            left: x
        });
    }
    $(".point").removeClass('yellow animated pulse');
    $(".start").text("x");
    $(".distance").text(0);
    $(".end").text("y");
};



function reset() {
    $(".canvas").empty();
    random();
}

function measure() {
    var Far = [1000, 1000, 1000];
    for (i = 1; i < 10; i++) {
        for (q = i + 1; q < 11; q++) {
            var point1 = $('#' + i).position();
            var point2 = $('#' + q).position();
            var dist = distance(point1, point2);
            var rdist = Math.round(dist);
            if (rdist < Far[0]) {
                Far = [rdist, i, q];
            }
        };
    }
    $(".start").text(Far[1]);
    $(".distance").text(Far[0] + "px");
    $(".end").text(Far[2]);
    $('#' + Far[1]).addClass('yellow animated pulse');
    $('#' + Far[2]).addClass('yellow animated pulse');
    console.log(Far);
}

function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = (point2.left + 10) - (point1.left + 10);
    xs = xs * xs;

    ys = (point2.top + 10) - (point1.top + 10);
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}