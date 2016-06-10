//One-Page 
$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});
plyr.setup();
//SEC-1
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

var defaults = {
    value: 2850276
    , inc: 1
    , pace: 2000
    , auto: true
};

var c1 = new flipCounter('c1', defaults);

//SEC-2
var tlwaterdrop = new TimelineMax({
    repeat: -1
});
var tlwaterdrop2 = new TimelineMax({
    repeat: -1,
});
var checkHandler=true;
function checktoggler(){
    if(checkHandler==false){
        tlwaterdrop.pause();
        tlwaterdrop2.pause();
    }
};
Snap.load("img/savetheearth/faucet.svg", function (data) {
    Snap("#water-faucet").append(data);
    tlwaterdrop.fromTo(".waterdrop_0", 4, {
        y: "-=30px"
    }, {
        y: "+=30px"
        , ease: Power1.easeIn
    }, 0).to(".waterdrop_0", 0.5, {
        y: "+=800px"
        , ease: Power1.easeIn,onComplete:function(){checktoggler()}
    });
    tlwaterdrop2.fromTo(".waterdrop_1", 3, {
        y: "-=30px"
    }, {
        y: "+=30px"
        , ease: Power1.easeIn
    }, 1).to(".waterdrop_1", 0.5, {
        y: "+=800px"
        , ease: Power1.easeIn
    }).
    fromTo(".waterdrop_1", 1, {
        y: "-=30px"
    }, {
        y: "+=800px"
        , ease: Power1.easeIn,onComplete:function(){checktoggler()}
    }, "+=0.5");
    TweenLite.set(".waterHandler", {
        transformOrigin: "6.483px 99px"
    })
    Draggable.create(".waterHandler", {
        type: "rotation"
        , trigger: ".a9a13da9-9345-46d1-a320-c9b71331183a"
        , throwProps: false
        , dragResistance: 0.55
        , bounds: {
            minRotation: 0
            , maxRotation: -34.31
        },
        throwResistance:10000
        , onDragEnd: function () {
            
            if(Draggable.get(".waterHandler").target._gsTransform.rotation == -34.31){checkHandler=false,console.log(checkHandler)};
        }
    });


});