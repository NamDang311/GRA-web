//One-Page 
$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});
plyr.setup(); 
//SEC-11
$(".msg-wrap h3").hover(function () {
    TweenMax.fromTo(".msg-wrap .line", 0.3, {
        scaleX: 0
        , x: "+=100%"
        , opacity: 0
    }, {
        scaleX: 0.15
        , x: "-=100%"
        , opacity: 1
        , transformOrigin: "0 0"
        , ease: Power1.easeOut
    });
    TweenMax.to(".msg-wrap .line", 0.4, {
        scaleX: 1
        , delay: 0.32
    });
}, function () {

});
//END-SEC-11

var defaults = {
  value: 2850276, inc: 1, pace: 2000, auto: true
};

var c1 = new flipCounter('c1', defaults);