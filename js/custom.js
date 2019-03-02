Reveal.configure({slideNumber: true});

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

TweenLite.set("svg", {
    visibility: "visible"
})

var tl = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    delay: 1
});

tl.to('#circle', 1, {
    morphSVG: {
        shape: '#square'
    },
    stroke: '#4CAF50',
    fill: '#4CAF50',
    ease: Back.easeInOut
})
    .to('#circle', 1, {
        morphSVG: {
            shape: '#star'
        },
        stroke: '#2196F3',
        fill: '#2196F3',
        ease: Back.easeInOut
    }, '+=0.5');
