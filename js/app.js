$(window).load(function () {
    TweenMax.to(".loadingScreen", 1.5, {
        autoAlpha: 0
    });
});
//One-Page 
$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});

//loading screen
Snap.load("img/earth.svg", function (data) {
    Snap("#earthLoading").append(data);
    TweenMax.fromTo("#earthLoading", 2, {}, {
        repeat: -1
        , rotation: 360
        , ease: Power0.easeNone
    });
    TweenMax.fromTo(".indicator h3", 0.8, {
        opacity: 0
    }, {
        repeat: -1
        , opacity: 1
        , ease: Power0.easeInOut
        , yoyo: true
    });

});
//counter
//Scroll Mvar defaults = {

var controller = new ScrollMagic.Controller();

//SEC-0
(function () {
    var bv = new Bideo();
    bv.init({
        // Video element
        videoEl: document.querySelector('#background-video'), // Container element
        container: document.querySelector('#section-0'), // Resize
        resize: true, // Array of objects containing the src and type
        // of different video formats to add
        src: [
            {
                src: 'img/opening/bg.mp4'
                , type: 'video/mp4'
      }
    ], // What to do once video loads (initial frame)
        onLoad: function () {
            //      document.querySelector('#video_cover').style.display = 'none';

        }
    });
}());






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
    .from("#sec-1-subtitle", 0.5, {
        y: "+=120px"
        , opacity: 0
    }).from(".linebreak", 0.5, {
        css: {
            scaleX: 0
            , transformOrigin: "50% 50%"
        }
    }).from("#section-1 p", 0.5, {
        opacity: 0
    }).from("#section-1 h3", 0.2, {
        opacity: 0
    });
var sceneintro = new ScrollMagic.Scene({
    triggerElement: "#section-1"
}).setTween(tlintro).addTo(controller).on("enter", function (event) {
    introAnimation();
});

$("#section-1 h3").hover(function () {

    TweenMax.fromTo("#section-1 .line", 0.3, {
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
    TweenMax.to("#section-1 .line", 0.4, {
        scaleX: 1
        , delay: 0.32
    });
}, function () {

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
var tlcoal = new TimelineMax({
    delay: 0.3
});


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
    delay: 0.3
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
    delay: 0.3
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

//-----Hover animation
//++coal

var tlcoalhover = new TimelineMax({
    paused: true
    , repeat: -1
    , yoyo: true
});
tlcoalhover.add("coal").to("#coal-cart", 1, {
    x: "+=20px"
    , ease: Power1.easeOut
}).to("#coal-cart", 2, {
    x: "-=60px"
    , ease: Power1.easeInOut
}).to("#coal-cart", 1.5, {
    x: "+=40px"
    , ease: Power0.easeOut
});
//++oil
var tloilhover = new TimelineMax({
    paused: true
    , repeat: -1
});
tloilhover.to("#oil-cart", 1, {
    x: "+=10px"
    , ease: Power1.easeOut
}).to("#oil-cart", 2, {
    x: "-=60px"
    , ease: Power1.easeInOut
}).to("#oil-cart", 2, {
    x: "+=70px"
    , ease: Power0.easeInOut
}).to("#oil-cart", 1, {
    x: "-=10px"
    , ease: Power0.easeOut
}).to("#oil-cart", 0.1, {
    y: "-=4px"
    , ease: Power0.easeNone
}, 1).to("#oil-cart", 0.1, {
    y: "+=4px"
    , ease: Power0.easeNone
}, 1.1).to("#oil-cart", 0.1, {
    y: "-=4px"
    , ease: Power0.easeNone
}, 2).to("#oil-cart", 0.1, {
    y: "+=4px"
    , ease: Power0.easeNone
}, 2.1);
//++gas
var tlgashover = new TimelineMax({
    paused: true
    , repeat: -1
});
tlgashover.to("#gas-cart", 1, {
    x: "+=120px"
    , ease: Power1.easeInOut
}).to("#gas-cart", 5, {
    x: "-=240px"
    , ease: Power1.easeInOut
}).to("#gas-cart", 2, {
    x: "+=140px"
    , ease: Back.easeOut
}).to("#gas-cart", 1, {
    x: "-=20px"
    , ease: Power0.easeOut
});
var markupAr = $(".markup-items").toArray();
$(".markup-items").hover(
    function () {
        switch ($.inArray(this, markupAr)) {
        case 0:
            tlcoalhover.play();
            break;
        case 1:
            tloilhover.play();
            break;
        case 2:
            tlgashover.play();
            break;
        }
    }
    , function () {
        switch ($.inArray(this, markupAr)) {
        case 0:
            tlcoalhover.restart().pause();
            break;
        case 1:
            tloilhover.restart().pause();
            break;
        case 2:
            tlgashover.restart().pause();
            break;
        }

    }

);

//-----Click animation
var tlarticle = new TimelineMax({
    paused: true
});
var $articleItems = $("#backbtn, .section-2-article h1, .section-2-article p, .section-2-article .line");
TweenMax.set(".infoImage", {
    x: "-=100%"
    , autoAlpha: 0
});
TweenMax.set($articleItems, {
    autoAlpha: 0
});
tlarticle.staggerTo(".markup-items", 0.5, {
    autoAlpha: 0
    , y: "+=300px"
}, 0.2).to("header", 0.5, {
    y: "-=200px"
    , autoAlpha: 0
}, 0).to(".infoImage", 0.5, {
    x: "+=100%"
    , autoAlpha: 1
}).staggerFromTo($articleItems, 0.5, {
    autoAlpha: 0
    , x: "+=50px"
}, {
    autoAlpha: 1
    , x: 0
}, 0.3);

$(".markup-items").click(
    function () {
        switch ($.inArray(this, markupAr)) {
        case 0:
            $(".infoImage").css("background", "url(./img/coaloilgas/coal.jpg)");
            $(".infoImage").css("background-size", "cover");
            $(".section-2-article h1").html("Big coal, big impact");
            $(".section-2-article p").html("Coal is the most carbon intensive fossil fuel. For every tonne of coal burned, approximately 2.5 tonnes of CO<sub>2</sub> are produced. Of all the different types of fossil fuels, coal produces the most carbon dioxide. Because of this and it's high rate of use, coal is the largest fossil fuel source of carbon dioxide emissions. Coal represents one-third of fossil fuels' share of world total primary energy supply but is responsible for 43% of carbon dioxide emissions from fossil fuel use. According to the statistics which shows that Coal represents one-third of fossil fuels' share of world total primary energy supply and occupies 43% of carbon dioxide emissions from fossil fuel use.<br><br>Coal has significant, and harmful effect on the environment. Coal mining degrades surrounding landscapes, burning coal releases toxins into the atmosphere, and coal-generated electricity places heavy demands on water resources.");
            break;
        case 1:
            $(".infoImage").css("background", "url(./img/coaloilgas/oil.jpg)");
            $(".infoImage").css("background-size", "cover");
            $(".section-2-article h1").html("The Price of Oil");
            $(".section-2-article p").html("Like other fossil fuels, oil's production, transport and use have significant environmental impacts. Oil production creates air pollution, greenhouse gas emissions that contribute to climate change, and wilderness destruction. Impacts on the landscape are so significant that Alberta's oil and gas industry now cuts more trees and destroys more habitat than the province's forest companies. The proliferation of offshore oil production, essentially a search for more remote sources of oil, has produced numerous large-scale oil spills, including a major spill from Nova Scotia's Terra Nova offshore platform in 2004 and the BP oil spill that devastated the Gulf of Mexico in 2010.<br><br>Transporting oil also has produced its share of environmental peril, from the Exxon Valdez disaster to leaks from oil and gas pipelines everywhere they exist. Even when pipelines operate as intended, they cut swaths through the landscape that fragment important habitat.And then there's climate change . Oil production and use have made significant contributions to global greenhouse gas emissions, increases in carbon dioxide concentrations in the atmosphere and the consequent changes to our climate.");
            break;
        case 2:
            $(".infoImage").css("background", "url(./img/coaloilgas/gas.jpg)");
                $(".infoImage").css("background-size", "cover");
            $(".section-2-article h1").html("Natural Gas:<br>The Newest Danger for Global Warming");
            $(".section-2-article p").html("Fossil fuels come from drilling or mining deep underground to access stored energy sources from bygone millennia.  We bring them to the surface and burn them for heat or electricity or to run our cars and buses.  Burning fossil fuels creates carbon pollution.  It doesn’t matter if it is coal, oil, propane, kerosene, gasoline or natural gas—it all contains carbon, which gets released as a greenhouse gas.<br><br> Methane or natural gas, however, is 72 times more potent at capturing heat in the atmosphere than carbon dioxide over the first 20 years after release.  Methane gradually converts to carbon dioxide, so it’s worst in the short term; the global warming potential over 100 years is about 25 times that of carbon dioxide.");
            break;
        }
        tlarticle.play().timeScale(1);
    }
);
$("#backbtn").click(
    function () {
        tlarticle.reverse().timeScale(1.4);
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
var tlhuman = new TimelineMax({delay:0.3});

Snap.load("img/humansector/fuel.svg", function (data) {
    Snap("#section-3-image-1").append(data);
    TweenLite.set($(".fuel-circle"), {
        drawSVG: 0
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
tlhuman.staggerFromTo(".section-3-items", 0.5, {
    y: "+=100%"
}, {
    y: "-=100%"
, }, 0.1);
var scenehuman = new ScrollMagic.Scene({
        triggerElement: "#section-3"
    })
    .setTween(tlhuman).addTo(controller);

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
    TweenLite.to('#section-4 h2,#section-4 p,#section-4 .line ', 1.5, {
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

TweenMax.set(".road-data, .aviation-data, .marine-data", {
    width: 0
    , autoAlpha: 0
});
TweenMax.set($(".section-5-table ul li, .line-data"), {
    autoAlpha: 0
});
$(".road-ripple ").click(
    function () {
        checkTimeline(0);
    }
);
$(".marine-ripple ").click(
    function () {
        checkTimeline(1);
    }
);
$(".aviation-ripple ").click(
    function () {
        checkTimeline(2);
    }
);
var timelineTrigger = false;

function checkTimeline(dataNum) {
    if (!timelineTrigger) {
        TweenMax.staggerFromTo($(".section-5-table ul li"), 0.3, {
            y: "-=60px"
        }, {
            y: 0
            , autoAlpha: 1
        }, 0.1);
        TweenMax.fromTo($(".line-data"), 0.4, {
            width: 0
        }, {
            width: "100%"
            , autoAlpha: 1
            , onComplete: dataAnimation(dataNum)
        }, 0);
        timelineTrigger = !timelineTrigger;

    } else {
        dataAnimation(dataNum);
    };
};

function dataAnimation(dataNum) {
    TweenMax.set(".road-data, .aviation-data, .marine-data", {
        width: 0
        , autoAlpha: 0
    });
    switch (dataNum) {
    case 0:
        TweenMax.fromTo($(".road-data"), 1, {
            width: 0
        }, {
            width: "73%"
            , autoAlpha: 1
        });
        break;
    case 1:
        TweenMax.fromTo($(".marine-data"), 1, {
            width: 0
        }, {
            width: "14%"
            , autoAlpha: 1
        });
        break;
    case 2:
        TweenMax.fromTo($(".aviation-data"), 1, {
            width: 0
        }, {
            width: "11%"
            , autoAlpha: 1
        });
        break;
    }
}

//END-SEC-5
//SEC - 6
var tldataCir = new TimelineMax({
    delay: 0.3
});

Snap.load("img/industrial/indusData.svg", function (data) {
    Snap(".section-6-data").append(data);

    tldataCir.staggerFromTo(".dataCir", 0.3, {
        x: "-=100%"
        , scale: 0
        , transformOrigin: "50% 50%"
    }, {
        x: "+=100%"
        , scale: 1
    , }, 0.1).staggerFromTo(".dataField", 0.3, {
        y: "+=120%"
    , }, {
        y: "-=120%",

    }, 0.1, "0.3");
    var sceneindustrial = new ScrollMagic.Scene({
            triggerElement: "#section-6"
        })
        .setTween(tldataCir).addTo(controller);

    //interaction
    TweenMax.set($(".dataLine"), {
        drawSVG: 0
    });
    TweenMax.set($(".dataField"), {
        opacity: 0.5
    });
    var u;
    $(".dataCir").hover(
        function () {
            u = $(".dataCir").index(this);
            TweenMax.to($(this), 0.2, {
                fill: "#FF6B6B"
            });
            TweenMax.to($(".dataLine:eq(" + u + ")"), 0.2, {
                drawSVG: "true"
            });
            TweenMax.to($(".dataField:eq(" + u + ")"), 0.2, {
                opacity: 1
            });
        }
        , function () {
            TweenMax.to($(this), 0.2, {
                fill: "white"
            });
            TweenMax.to($(".dataLine:eq(" + u + ")"), 0.2, {
                drawSVG: 0
            });
            TweenMax.to($(".dataField:eq(" + u + ")"), 0.2, {
                opacity: 0.5
            });
        });
});



//SEC - 7
//END-SEC-7


//SEC-9

var thermalCur = 0;
$("#thermal-plus").click(
    function () {
        if (thermalCur == 4) {} else {
            TweenLite.to($(".thermal-content"), 0.2, {
                y: "-=100px"
            });
            thermalCur = thermalCur + 1;
            changeTemp(thermalCur);
            contentIn(thermalCur);
        }
    }
);
$("#thermal-minus").click(
    function () {
        if (thermalCur == 0) {} else {
            TweenLite.to($(".thermal-content"), 0.2, {
                y: "+=100px"
            });
            thermalCur = thermalCur - 1;
            changeTemp(thermalCur);
        }
        contentIn(thermalCur);
    }
);
TweenMax.set($(".thermal-numbers").not($(".thermal-numbers:eq(0)")), {
    opacity: 0.2
});

function changeTemp(thermalCur) {
    var $g = $(".thermal-numbers").not($(".thermal-numbers:eq(" + thermalCur + ")"));
    TweenMax.to($(".thermal-numbers:eq(" + thermalCur + ")"), 0.3, {
        opacity: 1
    });
    TweenMax.to($g, 0.3, {
        opacity: 0
    });

};

function contentIn(thermalCur) {
    var g = thermalCur - 1;
    TweenMax.set($(".section-9-article .headline, .section-9-article .content"), {
        opacity: 0
    });
    TweenMax.fromTo($(".section-9-article .headline:eq(" + thermalCur + ")"), 0.4, {
        x: "-=40px"
        , opacity: 0
    }, {
        x: "+=40px"
        , opacity: 0.2
    });
    TweenMax.fromTo($(".section-9-article .content:eq(" + thermalCur + ")"), 0.4, {
        x: "+=40px"
        , opacity: 0
    }, {
        x: "-=40px"
        , opacity: 1
    });
};

//END-SEC-9

//SEC-10
$(".impact-contents").hover(function () {
    TweenMax.fromTo($(".line", this), 0.3, {
        x: "300px"
        , opacity: 0
    }, {
        x: "0"
        , opacity: 1
        , transformOrigin: "0 0"
        , ease: Power1.easeOut
    });

}, function () {

});
//END-SEC-10
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