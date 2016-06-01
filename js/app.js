$(window).load(function () {

});

//One-Page 
$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});

//Scroll Magic
var controller = new ScrollMagic.Controller();

//SEC-0
var tlopening = new TimelineMax({
    delay: 0.5
});
TweenMax.set((".outerCircle"), {
    perspective: 1000
    , scale: 0
})
TweenMax.set(("#motionCircle-6"), {
    opacity:0
    , scale: 1.4
})
tlopening.to(("#motionCircle-1"), 0.6, {
    left: "50%"
    , ease: Power1.easeIn
}).to(("#motionCircle-2"), 0.6, {
    right: "50%"
    , ease: Power1.easeIn
}, "-=0.6").set(("#motionCircle-1,#motionCircle-2"), {
    opacity: 0
}).to(("#motionCircle-3"), 3, {
    scale: 1.4
    , ease: Back.easeOut.config(1),force3D:false
}).to(("#motionCircle-4"), 3, {
    scale: 1.4
    , ease: Back.easeOut.config(2),force3D:false
}, "-=3").to(("#motionCircle-5"), 3, {
    scale: 1.4
    , ease: Back.easeOut.config(4),force3D:false
}, "-=3").to(("#motionCircle-6"), 2, {
    opacity:0.2
    , ease: Power0.easeNone
}).to(("#section-0 .open h1"), 1, {
    opacity:1
    , ease: Power0.easeNone
});;

//SEC-1 
var tlintro = new TimelineMax({
    delay: 0.5
});
tlintro.fromTo("#sec-1-title", 1, {
        y: "+=220px"
        , opacity: 0
    }, {
        y: 0
        , opacity: 1
    }).staggerFromTo($("#co2-amount, #unit"), 1, {
        y: "+=160px"
        , opacity: 0
    }, {
        y: "0"
        , opacity: 1
    }, 0.2, "+=0.3")
    .from("#sec-1-subtitle", 0.7, {
        y: "+=120px"
        , opacity: 0
    }).from(".linebreak", 0.5, {
        css: {
            scaleX: 0
            , transformOrigin: "50% 50%"
        }
    }).from("#section-1 p", 1, {
        opacity: 0
    });;
var sceneintro = new ScrollMagic.Scene({
    triggerElement: "#section-1"
}).setTween(tlintro).addTo(controller).on("enter", function (event) {
    introAnimation();
});

function introAnimation() {
    $("#co2-amount").countTo({
        from: 0
        , to: 40000000000
        , speed: 3000
        , refreshInterval: 20
        , formatter: function (value, options) {
            return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    });
};
//END-SEC-1


//SEC-2
//---Coal animation
var tlcoal = new TimelineMax({});
Snap.load("img/coaloilgas/coal.svg", rockLoad);

function rockLoad(data) {
    var r = Snap("#coal-cart");
    r.append(data);
    var cartShapes = $(".cart-2, .cart-3, .cart-4");
    var rocks = $(".rocks");
    tlcoal.add(TweenMax.fromTo($(".cart-1"), 0.5, {
            drawSVG: "50% 50%"
        }, {
            drawSVG: "100%"
        }))
        .add(TweenMax.from(cartShapes, 0.5, {
            drawSVG: "0%"
        }, "-=1"))
        .staggerFromTo(rocks, 0.3, {
            y: "-120px"
            , ease: Power2.easeIn
            , opacity: 0
        }, {
            y: "0px"
            , ease: Power2.easeIn
            , opacity: 1
        }, 0.1)
        .fromTo($("#pickaxe"), 0.5, {
            rotation: -180
            , opacity: 0
            , y: "-160px"
        }, {
            rotation: 0
            , y: "0px"
            , opacity: 1
        }, "-=0.25");

}

////---Oil animation
var tloil = new TimelineMax({
    delay: 0.2
});
var oilShapes;
Snap.load("img/coaloilgas/oil.svg", oilLoad);

function oilLoad(data) {
    var o = Snap("#oil-cart");
    o.append(data);
    oilShapes = $("#oil-lower, #oil-lower_1_");
    tloil.fromTo($('#oil-body'), 0.5, {
            css: {
                scaleX: 0
                , transformOrigin: '50% 50%'
            }
        }, {
            css: {
                scaleX: 1
            }
        })
        .fromTo(" .oil-st1", 2, {
            drawSVG: "0"
        }, {
            drawSVG: "100%"
        })
        .fromTo(" .oil-st8, #oil-circle", 0.5, {
            drawSVG: "0"
        }, {
            drawSVG: "100%"
        }, "-=2")
        .fromTo($('#oil-pattern'), 0.5, {
            css: {
                scaleY: 0
            }
        }, {
            css: {
                scaleY: 1
            }
        }, "-=2")
        .fromTo(oilShapes, 0.5, {
            css: {
                scaleX: 0
                , transformOrigin: '50% 50%'
            }
        }, {
            css: {
                scaleX: 1
            }
        }, "-=2.5")
        .fromTo('#oil-drop', 0.5, {
            y: "-=50px"
            , opacity: 0
        }, {
            y: 0
            , opacity: 1
        }, "-=1.45")
};

////---Gas animation
var tlgas = new TimelineMax({
    delay: 0.2
});
var gasShapes;
Snap.load("img/coaloilgas/gas.svg", gasLoad);

function gasLoad(data) {
    var g = Snap("#gas-cart");
    g.append(data);
    tlgas.fromTo("#gas-body", 0.3, {
        css: {
            scale: 0
            , transformOrigin: '50% 50%'
        }
    }, {
        css: {
            scale: 1
        }
    })

    .fromTo(" .gas-st2, #gas-window", 0.5, {
            drawSVG: "0"
        }, {
            drawSVG: "100%"
        })
        .staggerFrom(".gas-st0", 0.3, {
            y: "-=150px"
            , opacity: 0
        }, 0.1, "-=0.5")
        .from("#gas-wheel_2_,#gas-wheel_1_,#gas-wheel", 0.4, {
            x: "-=150px"
            , opacity: 0
        }, 0.1)
};

$(".markup").click(
    function () {
        $(".markup").toggle();
        $(".coal-video").fadeIn("slow");
        $(".coal-content").fadeIn("slow");
    }
);

var scenecoal = new ScrollMagic.Scene({
        triggerElement: "#section-2"
    })
    .setTween(tlcoal).addTo(controller);
var sceneoil = new ScrollMagic.Scene({
        triggerElement: "#section-2"
    })
    .setTween(tloil).addTo(controller);
var scenegas = new ScrollMagic.Scene({
        triggerElement: "#section-2"
    })
    .setTween(tlgas).addTo(controller);


//END-SEC-2

// SEC-3
Snap.load("img/humansector/fuel.svg", function (data) {
    Snap("#section-3-image-1").append(data);
    TweenLite.set($(".fuel-circle"), {
        drawSVG: 0
    });
});
Snap.load("img/humansector/crops.svg", function (data) {
    Snap("#section-3-image-0").append(data);
    TweenLite.set($(".crops-circle"), {
        drawSVG: 0
    });
});
Snap.load("img/humansector/manu.svg", function (data) {
    Snap("#section-3-image-2").append(data);
    TweenLite.set($(".manu-circle"), {
        drawSVG: 0
    });
});

$(".section-3-items").click(
    function () {
        if (!$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
            var t = $(".section-3-items").index(this);
            if (t == 0) {
                TweenLite.to($(this), 1, {
                    css: {
                        marginTop: "170px"
                        , opacity: 1
                    }
                });
            } else {
                if (t == 1) {
                    TweenLite.to($(this), 1, {
                        css: {
                            marginTop: "80px"
                            , opacity: 1
                        }
                    });
                } else {
                    TweenLite.to($(this), 1, {
                        css: {
                            marginTop: "230px"
                            , opacity: 1
                        }
                    });

                }
            };
            TweenLite.to($(".section-3-items-data:eq(" + t + ")"), 1, {
                opacity: 1
            });
            sec3Count(t);
        }
    }
);

function sec3Count(t) {
    switch (t) {
    case 0:
        $("#stat-crops").countTo({
            from: 0
            , to: 9
            , speed: 600
            , refreshInterval: 10
            , formatter: function (value, options) {
                return value.toFixed(0) + "%"
            }
        });
        TweenLite.to($(".crops-circle"), 1, {
            drawSVG: "9%"
        });
        break;
    case 1:
        $("#stat-fuel").countTo({
            from: 0
            , to: 87
            , speed: 600
            , refreshInterval: 10
            , formatter: function (value, options) {
                return value.toFixed(0) + "%"
            }
        });
        TweenLite.to($(".fuel-circle"), 1, {
            drawSVG: "87%"
        });
        break;
    case 2:
        $("#stat-manu").countTo({
            from: 0
            , to: 4
            , speed: 600
            , refreshInterval: 10
            , formatter: function (value, options) {
                return value.toFixed(0) + "%"
            }
        });
        TweenLite.to($(".manu-circle"), 1, {
            drawSVG: "4%"
        });
        break;

    }
};

//
// END-SEC-3

// SEC-4
Draggable.create(".handler", {
    type: "y"
    , bounds: {
        maxY: 120
        , left: 0
        , height: 10
    }
    , throwProps: true
    , edgeResistance: 1
    , onDragStart: function () {
        $(".handler-wrapper").css("overflow-y", "visible");
        $(".handler-hint").fadeOut("slow");
    }
    , onDragEnd: function () {

        lightUp();
        sunSet();
        revealText();
        TweenLite.to($(".handler"), 1, {
            y: 0
            , ease: Elastic.easeOut
            , onComplete: function () {
                $(".handler-wrapper").css("overflow-y", "hidden");
            }
        });
    }
});
TweenLite.set('#lightray', {
    scale: 1
    , transformOrigin: "50% 0 0"
    , ease: Power3.easeOut
})
var lightOn = false;

function lightUp() {
    $('.lightray').css('display', 'inline');

    if (lightOn == false) {
        TweenLite.fromTo('.lightray', 1.5, {
            scale: 0
            , transformOrigin: "50% 50% 0"
            , ease: Power3.easeOut
        }, {
            scale: 1.3
            , transformOrigin: "50% 50% 0"
            , ease: Power3.easeOut
        });
        lightOn = true;
    };
    TweenLite.to('#section-4', 2, {
        backgroundColor: "#353535"
        , ease: Power3.easeOut
    });
    TweenLite.to('#section-4 h2,#section-4 p ', 1.5, {
        opacity: 1
        , ease: Power3.easeOut
    });
    d3.selectAll(".city-windows").transition().delay(function (d, i) {
        return i * 120;
    }).duration(500).ease("sin").style("fill", "#FBF18F").style("opacity", 1);
    d3.select("#bulbBody").transition().duration(500).ease("sin").style("fill", "#FFE66D");
    d3.selectAll(" .city2-1").transition().duration(1000).ease("sin").style("fill", "#1A535C").style("stroke", "#4ECDC4");
    d3.selectAll(" .city2-0").transition().duration(1000).ease("sin").style("fill", "#1A535C");

};

function sunSet() {
    TweenLite.to('.sun', 1.5, {
        top: "120%"
        , ease: Power3.easeOut
    });
};
var $section4Content = $(".section-4-paragraph, #section-4 h1")

function revealText() {


    TweenLite.to($section4Content, 1.5, {
        opacity: 1
        , ease: Power3.easeOut
    });
};




d3.xml("img/bulb.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('bulb').appendChild(xml.documentElement);
});

d3.xml("img/city2.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('city2').appendChild(xml.documentElement);
});

d3.xml("img/clouds/clouds-1.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('cloud-1').appendChild(xml.documentElement);
});
d3.xml("img/clouds/clouds-2.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('cloud-2').appendChild(xml.documentElement);
});
d3.xml("img/clouds/clouds-3.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('cloud-3').appendChild(xml.documentElement);
});
d3.xml("img/clouds/clouds-4.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('cloud-4').appendChild(xml.documentElement);
});
d3.xml("img/clouds/clouds-5.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('cloud-5').appendChild(xml.documentElement);
});


d3.xml("img/windows.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('windowsHolder').appendChild(xml.documentElement);
});
//END-SEC-4

//SEC-5
smoketl = new TimelineMax({
    repeat: -1
});
var smokeLines;
var smoke2 = Snap("#smoke-2")
Snap.load("img/smoke.svg", smokeLoad);

function smokeLoad(data) {
    smoke2.append(data);
    smokeLines = $("#smoke-line-2, #smoke-line-1,#smoke-line-3");
    smoketl.set(smokeLines, {
            drawSVG: "0%"
        })
        .to($("#smoke-line-1"), 1, {
            drawSVG: "100%"
            , ease: Power0.easeNone
        })
        .to($("#smoke-line-2"), 1, {
            drawSVG: "100%"
            , ease: Power0.easeNone
        })
        .to($("#smoke-line-3"), 1, {
            drawSVG: "100%"
            , ease: Power0.easeNone
        })
        .to(smokeLines, 2, {
            opacity: 0
        });
}
Snap.load("img/city.svg", cityLoad);

function cityLoad(data) {
    Snap("#linecity").append(data);
    TweenMax.fromTo($("#wheelstar"), 25, {
        rotation: "0deg"
        , transformOrigin: "290.4px 296px"
    }, {
        rotation: "360deg"
        , repeat: -1
        , ease: Power0.easeNone
    });


};
TweenLite.set($(".aviation-data"), {
    scale: 0
    , transformOrigin: "50% 50% 0"
    , ease: Power3.easeOut
})
$(".airballoon-ripple").click(
    function () {
        $(this).fadeOut("slow");
        TweenLite.to($(".aviation-data"), 0.5, {
            scale: 1
            , ease: Power3.easeOut
        });
    }
);

//END-SEC-5
//SEC - 6


//SEC - 7
var slideVal = [1, 1.02, 1.04, 1.11, 1.13, 1.2];
var yearsAr = $(".section-7-years").toArray();
var curClick = 5;
var earthAr = [22.5, 24, 26, 30, 34, 40]
    , tempAr = [0.5, 0.4, 0.4, 0.7, 0.7, 0.9];
var statco2, stattemperature;
var statcompare = 0;
$(".section-7-years").click(
    function () {
        var $notthis = $(".section-7-years").not(this);
        TweenLite.to($(this), .5, {
            opacity: 1
        , });
        TweenLite.to($notthis, .2, {
            opacity: 0.5
        , });

        //timeline-dot
        TweenLite.to($(".time-line-dot:eq(" + $(".section-7-years").index(this) + ")"), .2, {
            backgroundColor: "#FBF18F"
            , borderColor: "#FBF18F"
        , });
        var dotleft = $(".time-line-dot").not($(".time-line-dot:eq(" + $(".section-7-years").index(this) + ")"));
        TweenLite.to(dotleft, .2, {
            backgroundColor: "#1A535C"
            , borderColor: "#45C1DF"
        , });



        curClick = $.inArray(this, yearsAr);

        //Change data
        statcompare = (earthAr[curClick] * 100 / 22.5) - 100;
        statco2 = earthAr[curClick];
        stattemperature = tempAr[curClick];
        statisticCount();

        // add midLine
        $(this).addClass("midLine");
    });

function statisticCount() {
    $("#stat-co2").countTo({
        from: 0
        , to: statco2
        , speed: 400
        , refreshInterval: 10
        , formatter: function (value, options) {
            return value.toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        }
    });

    $("#stat-compare").countTo({
        from: 0
        , to: statcompare
        , speed: 400
        , refreshInterval: 10
        , formatter: function (value, options) {
            return value.toFixed(1) + "%"
        }
    });

    $("#stat-temperature").countTo({
        from: 0
        , to: stattemperature
        , speed: 400
        , refreshInterval: 10
        , formatter: function (value, options) {
            return "+ " + value.toFixed(1) + " deg"
        }
    });
};


TweenLite.set($('.datatipWrapper'), {
    ease: Power3.easeOut
})

$("#earth-shadow").mouseout(function (e) {
    TweenLite.to($("#toolTip"), 0.2, {
        ease: Power0.easeNone
        , scale: 0
        , transformOrigin: "50% 50% 0"
        , immediateRender: true
    });


});


TweenMax.staggerFromTo($(".signal"), 10, {
    scale: 0
    , opacity: 0.3
    , transformOrigin: "50% 50% 0"
, }, {
    scale: 0.8
    , repeat: -1
    , opacity: 0
}, 1);

//END-SEC-7

// SEC-8


// click map
var myAr = $(".circle-ripple").toArray();
var trigger = true;
var topPos1 = 0;
var clickCount = 0;
var clickedAr = [];

TweenMax.set($("#worldmap"), {
    perspective: 1000
});
$('.circle-ripple').bind('click', function (event) {
    var curbtn = $.inArray(this, myAr);
    if (!$(this).hasClass("activated")) {
        $(this).addClass("activated");

        TweenLite.fromTo($(this), 1, {
            scale: 1
            , transformOrigin: "50% 50% 0"
            , force3D: false

        }, {
            opacity: 0.8
            , scale: parseFloat(dataAr[curbtn])
            , force3D: false
        });
        clickedAr.push(this);
        //set Pos Country+ Bars
        if (!$(".name-" + curbtn + "").hasClass("clicked")) {
            addNumber(curbtn);
            $(".continent-" + curbtn + "").removeClass("hidden");
            $(".name-" + curbtn + "").css({
                top: topPos1 + "%"

            }).addClass("clicked");
            $(".data-" + curbtn + "").css({
                top: (topPos1 + 6) + "%"
            });
            topPos1 = topPos1 + 10;
            TweenLite.fromTo($(".data-" + curbtn + ""), 1, {
                width: 0
            }, {
                width: barWidth[curbtn]
            });
        }

    };


});


//Show name of country
$('.circle-ripple').hover(
    function () {
        if ($.inArray(this, clickedAr) < 0) {

            TweenLite.to($(".nameBubble"), 0.5, {
                opacity: 1
            });
            $("#mainBubble").html(nameAr[$.inArray(this, myAr)]);
            $(".nameBubble").css({
                left: Math.round($(this).position().left * 100 / $(this).parent().width()) + "%"
                , top: $(this).position().top * 100 / $(this).parent().height() - 10 + "%"
                , transform: "translate(-45%,-23%)"
            });
        }
    }
    , function () {
        TweenLite.to($(".nameBubble"), 0.5, {
            opacity: 0
        });
    }
);

var dataAr = [];
var nameAr = [];
var barWidth = [];
$.ajax({
    type: "GET"
    , url: "worlddata.xml"
    , dataType: "xml"
    , success: function (xml) {

        for (t = 0; t <= 12; t++) {
            dataAr.push($(xml).find('data:eq(' + t + ')').text());
            nameAr.push($(xml).find('name:eq(' + t + ')').text());
        }
        if (trigger) {
            appendData();
            trigger = !trigger;
        }
    },


});

function appendData() {
    for (a = 0; a <= 12; a++) {
        $(".data-" + a + "").css({
            height: "10px"
            , position: "absolute"
            , top: "0"
            , "background-color": "#e6665a"
            , width: parseFloat(dataAr[a]) * 30
        , });
        barWidth.push($(".data-" + a + "").css("width"));
    }
};

// count total
var totalNumber = 0;
var curNumber = 0;

function addNumber(curbtn) {
    totalNumber = totalNumber + parseFloat(dataAr[curbtn]);
    $("#totalNumber").countTo({
        from: curNumber
        , to: totalNumber
        , speed: 400
        , refreshInterval: 10
        , formatter: function (value, options) {
            return value.toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        }
        , onComplete: function (value) {
            curNumber = totalNumber;
        }

    });
};


//END-SEC-8

//SEC-9
$(".findout").click(
    function () {
        TweenLite.to($(".findoutWrapper"), 1, {
            left: "-=100%"
        });
    }
);

Draggable.create(".dragItems", {
    type: "x,y"
    , onDragEnd: function (e) {
        if (this.hitTest(".target-content", "50%")) {
            alert("Adsasd");
        } else {
            TweenLite.to(e.target, 0.3, {
                x: 0
                , y: 0
                , top: e.target.originalTop
                , left: e.target.originalLeft
            });
        };
    }
});
//END-SEC-9