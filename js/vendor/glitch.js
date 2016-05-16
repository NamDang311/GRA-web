/*!
 * $ Simple glitching plugin
 * Author: Igor Brkic <igor@hyperglitch.com>
 * Version 0.0.1
 * Licensed under the MIT license
 */
(function($){
    $.fn.glitch = function(options) {
        var s = $.extend({
            bg: null,    // background color
            maxint: 1,     // max interval between glitchings
            minint: 1,      // min interval between glitchings
            maxglitch: 10,   // max number of twitches
            hshift: 155,      // max horizontal shift 
            vshift: 25,      // max vertical shift
            direction: 'horizontal' // 'horizontal', 'vertical' or 'random'
        }, options);

        return this.each(function(){
            $t=$(this);
            $t.wrap('<span style="display:inline-block;position:relative">');
            var $s=$t.closest('span');
            var $c=$t.clone();
            var height=$t.height();
            var width=$t.width();

            if(s.bg===null){
                s.bg=$t.css('background-color');
            }

            $c.css({
                position: 'absolute',
                top:0,
                left:0,
                height: height,
                width: width,
                overflow: 'hidden',
                'background-color': s.bg
            });
            $s.append($c);
            var rnd=function(a){return Math.floor(Math.random()*(a+1));}
            var g = function(){
                var i;
                for(i=0;i<rnd(s.maxglitch)+1;i++){
                    setTimeout(function(){
                        var css, dir;
                        if(s.direction=='random') dir=Math.random()<0.5?'horizontal':'vertical';
                        else dir=s.direction;
                        if(dir=='vertical') css={top: rnd(s.vshift+1), width: rnd(Math.floor(width*0.8))+2, height:height};
                        else css={left: rnd(s.hshift+1), height: rnd(Math.floor(height*0.8))+2, width:width};
                        $c.css(css)
                    }, rnd(300));
                }
                setTimeout(function(){$c.css({left: 0, top:0})}, 300);
                setTimeout(g, (rnd((s.maxint-s.minint))+s.minint)*1000);
            }
            setTimeout(g, 3000);
        });
    }
})(jQuery);


(function(e){var t=false;e.fn.shuffleText=function(n,r){var s=e(this);var o=new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");var u=e.extend({time:40,maxTime:1e3,amount:3,complete:null},r);if(n==undefined)n="";var a=s.text().split(""),f=n.split(""),l=0,c=0,h=0,p=0,d,v;if(!t){t=true;return s.each(function(){function r(){s.empty();if(a.length>f.length)iLength=a.length;else iLength=f.length;for(i=0;i<iLength;i++){if(a[i]==undefined)s.append(e("<span></span>"));else s.append(e("<span>"+a[i]+"</span>"))}}function p(){var r=o[Math.floor(Math.random()*o.length)];if(l>=iLength){t=false;s.text(n);clearInterval(d);if(typeof u.complete=="function")u.complete.call(s)}else{if(c==u.amount){if(l>=f.length)e(v[l]).text("");else e(v[l]).text(f[l]);l++;c=0}else{e(v[l]).text(r);c++}}}r();v=s.find("span");if(u.amount<0)u.amount=0;if(iLength*(u.amount+1)*u.time>u.maxTime){h=u.maxTime/(iLength*(u.amount+1))}else{h=u.time}p();d=setInterval(p,Math.floor(h))})}}})(jQuery)