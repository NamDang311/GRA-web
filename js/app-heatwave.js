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

//electric
var tlhint = new TimelineMax({
    repeat: -1
    , paused: true
})

Snap.load("img/savetheearth/elec-bulb-tail.svg", function (data) {
    Snap("#elec-tail").append(data);
    Snap.load("img/savetheearth/bulb-1.svg", function (data) {
        Snap("#bulb-1").append(data)
    });
    Snap.load("img/savetheearth/bulb-2.svg", function (data) {
        Snap("#bulb-2").append(data)
    });

    //set dotted Cir hint
    TweenMax.set(".dottedCir", {
        autoAlpha: 0
        , transformOrigin: "50% 50%"
    });
    tlhint.to(".dottedCir", 10, {
        rotation: 360
        , transformOrigin: "50% 50%"
        , ease: Power0.easeNone
    }, 0);

    //set hint text
    TweenMax.fromTo(".hintText", 1, {
            autoAlpha: 1
        }, {
            autoAlpha: 0
            , repeat: -1
            , yoyo: true
        })
        //set bulb glass
    TweenMax.set("#bulb_glass_0,#bulb_glass_1", {
        autoAlpha: 0
    });

    //others
    hoverBulb();
    setupScene();
});

function hoverBulb() {
    $(".bulb").hover(function () {

        var r = $("#outerCir", this);
        var e = $("g", this);

        TweenMax.to(r, 0.3, {
            scale: 1.5
            , transformOrigin: "50% 50%"
        });
        TweenMax.to(e, 0.3, {
            scale: 0.9
            , transformOrigin: "50% 50%"
        });
    }, function () {
        var r = $("#outerCir", this);
        var e = $("g", this);
        TweenMax.to(r, 0.3, {
            scale: 1
            , transformOrigin: "50% 50%"
        });
        TweenMax.to(e, 0.3, {
            scale: 1
            , transformOrigin: "50% 50%"
        });
    })


};

function setupScene() {
    Draggable.create(".bulb", {
        type: "x,y"
        , throwProps: false
        , onDragStart: function (e) {
            tlhint.play();

        }
        , onDrag: function () {
            if (this.hitTest(".hitZone", "90%")) {
                TweenMax.to(".hitZone", 1, {
                    opacity: .4
                });
            } else {
                TweenMax.to(".hitZone", 1, {
                    opacity: .07
                });
                TweenMax.set(".dottedCir", {
                    autoAlpha: 1
                })
            }
        }
        , onDragEnd: function (e) {
            if (this.hitTest(".hitZone", "90%")) {
                if ($(event.target).parents("#bulb-1").length == 1) {
                    var bnum = 1;
                    attachBulb(e, bnum);
                } else {

                    var bnum = 0;
                    attachBulb(e, bnum);
                }

            } else {
                TweenMax.set(".dottedCir", {
                    autoAlpha: 0

                });
                TweenMax.to(this.target, 0.3, {
                    x: 0
                    , y: 0
                });
            }
        }
    });
};
TweenMax.set("#section-sub-led article h1, #section-sub-led article .line,#section-sub-led article p", {
    autoAlpha: 0
});

function attachBulb(e, bnum) {
    var t = $(event.target).parent();
    TweenMax.set(t, {
        autoAlpha: 0
    });
    TweenMax.set(".hitZone, .dottedCir, .hintText", {
        autoAlpha: 0
    });
    if (bnum == 0) {
        Draggable.get(".bulb:eq(1)").disable();
        TweenMax.set($("#bulb_glass_0"), {
            autoAlpha: 1
            , y: "+=200px"
        });
        TweenMax.set($("#bulb_glass_1"), {
            autoAlpha: 0

        });
    } else {
        Draggable.get(".bulb:eq(0)").disable();
        TweenMax.set($("#bulb_glass_1"), {
            autoAlpha: 1
            , y: "+=200px"
        });
        TweenMax.set($("#bulb_glass_0"), {
            autoAlpha: 0

        });
    };

    var tlattach = new TimelineMax({});
    tlattach.to($("#bulb_glass_" + bnum), 1, {
        y: "-=200px"
        , ease: Back.easeIn
        , delay: 0.2
    }).
    to($("#bulb_glass_" + bnum + " *"), 0.2, {
        css: {
            fill: "#FBF18F"
        }
    }).
    fromTo($(".bulb-light"), 0.2, {
        scale: 0
        , transformOrigin: "50% 50%"
        , x: "-50%"
    }, {
        scale: 1
        , opacity: 1
    }, "-=0.2");


    //show article
    TweenMax.set("#section-sub-led article *", {
        autoAlpha: 0
    });
    TweenMax.fromTo($("#bulb-content-" + bnum + " h1,span"), 1, {
        autoAlpha: 0
        , y: "-=20"
    }, {
        autoAlpha: 1
        , y: "+=20"
        , delay: 1.7
    });
    TweenMax.fromTo($("#bulb-content-" + bnum + " .line"), 1, {
        autoAlpha: 0
        , scale: 0
        , transformOrigin: "50% 50%"
    }, {
        autoAlpha: 1
        , scale: 1
        , delay: 1.7
    });
    TweenMax.fromTo($("#bulb-content-" + bnum + " p,b"), 1, {
        autoAlpha: 0
        , y: "+=20"
    }, {
        autoAlpha: 1
        , y: "-=20"
        , delay: 1.7
    });
};

//water
var tlwaterdrop = new TimelineMax({
    repeat: -1
});
var tlwaterdrop2 = new TimelineMax({
    repeat: -1
, });
var tlwaterdrop3 = new TimelineMax({
    repeat: -1
, });
var checkHandler = true;
var waterfact = $(".fact h1, .fact .line, .fact p");
TweenMax.set(waterfact, {
    autoAlpha: 0
});

Snap.load("img/savetheearth/faucet.svg", function (data) {
    Snap("#water-faucet").append(data);
    tlwaterdrop.fromTo(".waterdrop_0", 4, {
        y: "-=30px"
    }, {
        y: "+=30px"
        , ease: Power1.easeIn
    }, 0).to(".waterdrop_0", 0.5, {
        y: "+=800px"
        , ease: Power1.easeIn
        , onComplete: function () {
            if (checkHandler == false) {
                tlwaterdrop.pause();
            }
        }
    });
    tlwaterdrop2.fromTo(".waterdrop_1", 3, {
        y: "-=30px"
    }, {
        y: "+=30px"
        , ease: Power1.easeIn
    }, 2).to(".waterdrop_1", 0.5, {
        y: "+=800px"
        , ease: Power1.easeIn
    }).
    fromTo(".waterdrop_1", 1, {
        y: "-=30px"
    }, {
        y: "+=800px"
        , ease: Power1.easeIn
        , onComplete: function () {
            if (checkHandler == false) {
                tlwaterdrop2.pause();
            }
        }
    }, "+=0.5");
    tlwaterdrop3.fromTo(".waterdrop_2", 3, {
        y: "-=0px"
    }, {
        y: "+=30px"
        , ease: Power1.easeIn
    }, 4).to(".waterdrop_2", 0.3, {
        y: "+=800px"
        , ease: Power1.easeIn
    }).
    fromTo(".waterdrop_2", 1, {
        y: "-=30px"
    }, {
        y: "+=800px"
        , ease: Power1.easeIn
        , onComplete: function () {
            if (checkHandler == false) {
                tlwaterdrop3.pause();
            }
        }
    }, "+=1");

    TweenLite.set(".waterHandler", {
        transformOrigin: "6.483px 99px"
    })
    Draggable.create(".waterHandler", {
        type: "rotation"
        , trigger: ".a9a13da9-9345-46d1-a320-c9b71331183a"
        , throwProps: false
        , dragResistance: 0.45
        , bounds: {
            minRotation: 0
            , maxRotation: -34.31
        }
        , throwResistance: 10000
        , onDragEnd: function () {

            if (Draggable.get(".waterHandler").target._gsTransform.rotation == -34.31) {
                checkHandler = false;
                Draggable.get(".waterHandler").disable();
                TweenMax.staggerFromTo(waterfact, 0.4, {
                    autoAlpha: 0
                    , x: "+=100px"
                }, {
                    autoAlpha: 1
                    , x: "-=100px"
                }, 0.4);
            };
        }
    });
});

//petition
$(".mat-input").focus(function () {
    $(".notifi").html("");
    $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function () {
    if ($(this).val() === "")
        $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
})

$("#submit-btn button").hover(function () {
    TweenMax.fromTo("#submit-btn .line", 0.3, {
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
    TweenMax.to("#submit-btn .line", 0.4, {
        scaleX: 1
        , delay: 0.32
    });
}, function () {});

TweenMax.set(".open h1,.open p,.open h2, .tshirt-zone-holder, .open .line", {
    autoAlpha: 0
});
$("#submit-btn button").click(function () {

    if (!$("#first-name").val()) {
        $(".notifi").html("Please input your first name");
    } else {
        $(".name-input").html($("#first-name").val());
        var tlpetition = new TimelineMax({});
        var y = $(".sign .line, .sign p , .sign .signForm");
        tlpetition.to(".sign h1", 0.5, {
            autoAlpha: 0
            , y: "-=100px"
        }).to(y, 0.5, {
            autoAlpha: 0
            , y: "+=100px"
        }, 0).set(".sign", {
            css: {
                display: "none"
            }
        }).fromTo(".open h1", 1, {
            autoAlpha: 0
            , x: "-=100px"
        }, {
            autoAlpha: 1
            , x: "+=100px"
        }, "+=0.5").fromTo(".open .line", 0.3, {
            css: {
                scaleX: 0
                , transformOrigin: "50% 50%"
            }
        }, {
            autoAlpha: 1
            , scaleX: 1
        }).fromTo(".open h2", 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, "+=0.5").fromTo(".open p", 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, "+=0.7").fromTo(".tshirt-zone-holder", 2, {
            autoAlpha: 0
            , x: "+=100px"
        }, {
            autoAlpha: 1
            , x: "-=100px"
        }, "+=2").staggerFromTo(".treeItems div", 2, {
            autoAlpha: 0
            , y: "-=50px"

        }, {
            autoAlpha: 1
            , y: "+=50px"
        }, 0.2, "-=2")
    };
    tlpetition.timeScale(6);


});
$(".finishBtn").hover(function () {
    TweenMax.fromTo(".tshirt-zone-holder .line", 0.3, {
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
    TweenMax.to(".tshirt-zone-holder .line", 0.4, {
        scaleX: 1
        , delay: 0.32
    });
}, function () {

});
$(".finishBtn").click(function () {
    $(".main").moveDown();
});
var itemOccupied;
Snap.load("img/savetheearth/tshirt.svg", function (data) {
    Snap(".tshirt-zone").append(data);
    Draggable.create(".trees", {
        type: "x,y"
        , throwProps: false
        , onDrag: function (e) {
            TweenMax.set(".tshirt-hitZone", {
                stroke: "#FF6B6B"
            });


        }
        , onDragEnd: function (e) {
            itemOccupied = $(".trees").not(this._eventTarget);
            if (this.hitTest(".tshirt-hitZone", "100%")) {
                TweenMax.set(itemOccupied, {
                    autoAlpha: 0
                });
                TweenMax.set(e.target, {
                    opacity: 1
                });
                TweenMax.set(".tshirt-hitZone", {
                    stroke: "#2f404f"
                });

            } else {
                TweenMax.set(itemOccupied, {
                    autoAlpha: 1
                });
                TweenMax.set(".tshirt-hitZone", {
                    stroke: "#2f404f"
                });
                TweenMax.set(e.target, {
                    opacity: 0.5
                });
                TweenMax.to(this.target, 0.3, {
                    x: 0
                    , y: 0
                });
            }
        }
    });
});