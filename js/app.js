//One-Page 
$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});
//SEC-1 
$('#section-1 h1').glitch();




//SEC-2
var stage = new PIXI.Container()
    , renderer = PIXI.autoDetectRenderer(371, 360, {
        backgroundColor: 0x1099bb
        , transparent: true
    });
document.getElementById('smoke-2').appendChild(renderer.view);
var frames = [];
var movie;
setup();

function setup() {
    for (var i = 1; i < 318; i++) {
        frames.push(PIXI.Texture.fromImage('../smoke/comp 1_' + i + '.png'));

    };
    movie = new PIXI.extras.MovieClip(frames);
    movie.play();
    movie.animationSpeed = 0.5;
    stage.addChild(movie);
    animate();

}

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}


//SEC-2
d3.xml("/img/helicopter.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('helicopter').appendChild(xml.documentElement);
    animateTop();
});

function animateTop() {
    var $rotar = $('#top');
    var tl = new TimelineMax({
        repeat: -1
        , repeatDelay: 3
    });
    tl.from($rotar, 0.2, {
        rotationY: 360
        , ease: Power0.easeNone
        , repeat: -1
        , transformOrigin: "50% 0 0"
    });
};


//SEC - 3

var slideVal = [1, 1.02, 1.04, 1.11, 1.13, 1.2];
var yearsAr = $(".section-3-years").toArray();
var curClick = 5;
var earthAr = [22.5, 24, 26, 30, 34, 40];
var statco2;
var statcompare = 0;
$(".section-3-years").click(
    function () {
        var $notthis = $(".section-3-years").not(this);
        TweenLite.to($(this), .5, {
            fontSize: '1.3em'
            , opacity: 1
        , });
        TweenLite.to($notthis, .2, {
            fontSize: '1em'
            , opacity: 0.5
        , });
        curClick = $.inArray(this, yearsAr);

        //scale earth shadow
        TweenLite.to($("#earth-shadow"), 1, {
            scale: slideVal[curClick]
            , transformOrigin: "50% 50% 0"
        });

        //Change data
        statcompare = earthAr[curClick] * 100 / 22.5;
        statco2 = earthAr[curClick];
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
//END- of - SEC - 3


/// SEC-4
Draggable.create(".handler-wrapper", {
    type: "y"
    , bounds: {
        maxY: 120
        , left: 0
        , height: 10
    }
    , throwProps: true
    , edgeResistance: 1
    , onDragEnd: function () {
        lightUp();
        sunSet();
        revealText();
        TweenLite.to($(".handler-wrapper"), 1, {
            y: 0
            , ease: Elastic.easeOut
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
        return i * 60;
    }).duration(500).ease("sin").style("fill", "#FFE66D");
    d3.select("#bulbBody").transition().duration(500).ease("sin").style("fill", "#FFE66D");
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


// SEC-5
d3.xml("img/worldmap.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('worldmap').appendChild(xml.documentElement);
});


// click map
var myAr = $(".circle-ripple").toArray();
var trigger = true;
var topPos1 = 0;
var leftPos1 = 3;
var clickCount = 0;
var clickedAr=[];

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
    };

    clickedAr.push(this);
    //set Pos Country+ Bars
    if (clickCount == 4) {
        clickCount = 0;
        leftPos1 = leftPos1 + 28;
        topPos1 = 0
    };
    clickCount = clickCount + 1;
    if (!$(".name-" + curbtn + "").hasClass("clicked")) {
        addNumber(curbtn);
        $(".continent-" + curbtn + "").removeClass("hidden");
        $(".name-" + curbtn + "").css({
            top: topPos1 + "%"
            , left: leftPos1 + "%"
        }).addClass("clicked");
        $(".data-" + curbtn + "").css({
            top: (topPos1 + 6) + "%"
            , left: leftPos1 + "%"
        });
        topPos1 = topPos1 + 10;
        TweenLite.fromTo($(".data-" + curbtn + ""), 1, {
            width: 0
        }, {
            width: barWidth[curbtn]
        });
    }
});


//Show name of country
$('.circle-ripple').hover(
    function () {
        if ( $.inArray(this, clickedAr) < 0){
       
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
    }, function () {
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
    , url: "/worlddata.xml"
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




//Faded effect.
var didScroll = true;
var visibleEl;

function fadedAni() {
    visibleEl = $(".circle-ripple").visible();
    if (didScroll && !visibleEl) {
        didScroll = false;
        $("#totalTitle, #totalNumber").each(
            function () {
                TweenLite.fromTo($(this), 2, {
                    css: {
                        left: "-=100vw"
                        , opacity: 0

                    }
                }, {
                    css: {
                        left: "+=100vw"
                        , opacity: 1

                    }
                    , onComplete: function () {
                        didScroll = true;
                    }
                })
            });
    }

};

//SEC-6


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

        //checks if at least 50% of the surface area of either element is overlapping:
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

//SEC-7
var s = Snap("#coal");

var shapes;
Snap.load("/img/coaloilgas/coal.svg", cartLoad ) ;
function cartLoad( data ){ 
    s.append( data );
    shapes = $(".coal-1, .coal-2, .coal-4, .coal-5");
    tl7.set(shapes, {drawSVG:"0%"});
    tl7.set($(".coal-3"), {drawSVG:"50% 50%"});
}
var r = Snap("#coalRocks");
Snap.load("/img/coaloilgas/coalrocks.svg", rockLoad );
function rockLoad( data ){ 
    r.append( data );
    rocks = $(".rocks");
tl7.set(rocks , {y:"-120px"});
}

tl7 = new TimelineMax({});
$('#coal').hover(
    function () {
        tl7.to($(".coal-3") , 0.5, {drawSVG:"100%"})
        tl7.fromTo(shapes , 0.5, {drawSVG:"0%"}, {drawSVG:"100%"},"-=0.5");
        tl7.staggerTo(rocks , 0.4, {y:"20px",ease:Power2.easeIn},0.1);
    }, function () {
       tl7.to(shapes , 0.2, {drawSVG:"0%"});
        tl7.to($(".coal-3") , 0.2, {drawSVG:"50% 50%"});
        tl7.set(rocks, {y:"-120px"});
    }
);

$(".markup").click(
    function (){
        $(".markup").toggle();
        $(".coal-video").fadeIn("slow");
        $(".coal-content").fadeIn("slow");
    }
);