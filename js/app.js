$(document).foundation();
$(".main").onepage_scroll({
    pagination: true
    , loop: false
});

$('#bulb-btn').click(
    function () {
        TweenMax.to("#section1-bg1", 3, {
            opacity: 0
            , ease: Power2.easeInOut
        });
    }
);
    var animData = {

  wrapper: document.getElementById('bodymovin'), // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../js/data.json' // the animation data

};
var anim = bodymovin.loadAnimation(animData);

var tlSmoke = new TimelineMax({
        repeat: -1,immediateRender:true,repeatDelay: 0.2
    });
tlSmoke.from($(".smoke-1"), 0, {bottom:"80%",
        scale: 0,ease: Power0.easeNone
        , transformOrigin: "50% 50% 0",
    })
    .to($(".smoke-1"), 2, {bottom:"90%",
        scale: 2,ease: Power0.easeNone
        , transformOrigin: "50% 50% 0",
    })
    .to($(".smoke-1"), 2, {bottom:"100%",
        scale: 0,ease: Power0.easeNone
        , transformOrigin: "50% 50% 0",
    })
;

(function () {
    $('#range').slider({
        range: 'min'
        , min: 0
        , max: 100
        , value: 0
        , slide: function (e, ui) {
            $('#co2value').html(ui.value / 25)
        }
    });
}());

//SEC - 3
var slideVal = [1.15, 1.13, 1.11, 1.04, 1.02, 1];
var yearsAr = $(".section-3-years").toArray();
var curClick = 5;

$(".section-3-years").click(
    function () {
        $(this).animate({
            opacity: 1
            , fontSize: "2.5em"
        }, 500);
        $(".section-3-years").not(this).animate({
            opacity: 0.2
            , fontSize: "1.5em"
        }, 200);
        curClick = $.inArray(this, yearsAr);

        //scale earth shadow
        TweenLite.to($("#earth-shadow"), 1, {
            scale: slideVal[curClick]
            , transformOrigin: "50% 50% 0"
        });
    }
);

var earthAr = [40, 34, 30, 26, 24, 22.5];
TweenLite.set($("#toolTip"), {
    scale: 0
    , transformOrigin: "50% 50% 0"
    , immediateRender: true
});

$("#earth-shadow").mousemove(function () {
    $("#toolTip").css("display", "block");
    $("#toolTip-data").html(earthAr[curClick]);
    TweenLite.to($("#toolTip"), 0.6, {
        ease: Back.easeOut
        , scale: 0.8
        , transformOrigin: "50% 50% 0"
        , immediateRender: true
    });
    
    
   


});

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



/// LIGHT WORLDDDDDDDD
Draggable.create(".handler-wrapper", {
    type: "y"
    , bounds: {
        top: 0
        , left: 0
        , height: 100
    }
    , throwProps: true
    , edgeResistance: 0.7
    , onDragEnd: function () {
        TweenLite.from($(".handler-wrapper"), 0.4, {
            top: 0
            , ease: Elastic.easeOut
        });
    }
});





// Load world svg
d3.xml("/img/worldmap.svg", "image/svg+xml", function (error, xml) {
    if (error) throw error;
    document.getElementById('worldmap').appendChild(xml.documentElement);
});

// click map
var popupheight = parseInt($('#popup').css("height")) + 20;
var popupwidth = parseInt($('#popup').css("width")) / 2;
var myAr = $(".circle-ripple").toArray();
var trigger = true;
var topPos1 = 0;


$('.circle-ripple').bind('click', function (event) {
    var curbtn = $.inArray(this, myAr);
    var popuptop = $(this).offset().top - popupheight;
    if (!$(this).hasClass("activated")) {
        $(this).addClass("activated");

        TweenLite.fromTo($(this), 1, {
            scale: 1
            , transformOrigin: "50% 50% 0"
            , force3D: true
        }, {
            opacity: 0.7
            , scale: parseFloat(dataAr[curbtn])
        });
    };
    $('#popup').css('left', $(this).offset().left - popupwidth);
    $('#popup').css('display', 'inline');
    $("#popup").css("position", "absolute");
    TweenLite.fromTo($("#popup"), 1, {
        opacity: 0
        , top: popuptop - 20
    }, {
        opacity: 1
        , top: popuptop
    });


    //set Pos
    if (!$(".name-" + curbtn + "").hasClass("clicked")) {
        addNumber(curbtn);
        $(".continent-" + curbtn + "").removeClass("hidden");
        $(".name-" + curbtn + "").css({
            top: topPos1 + "%"
        }).addClass("clicked");
        $(".data-" + curbtn + "").css({
            top: (topPos1 + 8) + "%"
        });
        topPos1 = topPos1 + 12;
        TweenLite.fromTo($(".data-" + curbtn + ""), 1, {
            width: 0
        }, {
            width: barWidth[curbtn]
        });
    }
});

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
            , width: parseFloat(dataAr[a]) * 50
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


//Section "how much"
var leftPos = 50;
$.each($(".findout-content"), function () {
    $(this).css({
        left: leftPos + "vw"
    });
    leftPos = leftPos + 100;
})
$(".findout").click(
    function () {
        TweenLite.to($(".findoutWrapper"), 1, {
            left: "-=100%"
        });
    }
);

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