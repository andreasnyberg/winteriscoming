var controller;

$(document).ready(function() {   
    TweenLite.defaultOverwrite = false;
    controller = new ScrollMagic.Controller();

    clouds();

    leavesCreate();
    leavesColorChange1();
    leavesColorChange2();
    leavesColorChange3();
    leavesFallFromtree();
    leavesFadeaway()
    toFall();
 
    snowCreate();
    snow();
    toWinter();   
});


// randomize-function for positioning of leafs and snowflakes
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// cloud animation
function clouds() {
    TweenMax.fromTo($("#cloud1"), 35, 
        {x:-250, y:35, scale:0.2, opacity:0.5}, 
        {x:1600, scale:0.2, opacity:0.5, ease: Power1.easeInOut, repeat:-1} );

    TweenMax.fromTo($("#cloud2"), 35, 
        {x:-250, y:-50, scale:0.3, opacity:0.5}, 
        {x:1600, scale:0.3, opacity:0.5, ease: Power0.easeNone, delay: 13, repeat:-1} );

    TweenMax.fromTo($("#cloud3"), 34, 
        {x:-250, y:-125, scale:0.4, opacity:0.5}, 
        {x:1600, scale:0.4, opacity:0.5, ease: Power1.easeInOut, delay: 17, repeat:-1} );

    TweenMax.fromTo($("#cloud4"), 36, 
        {x:1000, y:-200, scale:0.5, opacity:0.5}, 
        {x:1, scale:0.5, opacity:0.5, ease: Power1.easeInOut, repeat:-1, yoyo:true} );

    TweenMax.fromTo($("#cloud5"), 32, 
        {x:-300, y:-250, scale:0.6, opacity:0.5}, 
        {x:1600, scale:0.6, opacity:0.5, ease: Power1.easeInOut, delay: 13, repeat:-1} );

    TweenMax.fromTo($("#cloud6"), 30, 
        {x:1, y:-350, scale: 0.7, opacity:0.5}, 
        {x:1000, scale:0.7, opacity:0.5, ease: Power1.easeInOut, repeat:-1, yoyo:true} );
}

// create leaves
function leavesCreate(){
    for (var i = 0; i < 200; i++) {

       var leaf1 = "<i class='fa fa-leaf fa-2x leaf1' style='top:"+randomIntFromInterval(1,260)+"px;left:"+randomIntFromInterval(1,465)+"px;'></i>";
       var leaf2 = "<i class='fa fa-leaf fa-2x fa-rotate-90 leaf2' style='top:"+randomIntFromInterval(1,260)+"px;left:"+randomIntFromInterval(1,465)+"px;'></i>";
       var leaf3 = "<i class='fa fa-leaf fa-2x fa-rotate-180 leaf3' style='top:"+randomIntFromInterval(1,260)+"px;left:"+randomIntFromInterval(1,465)+"px;'></i>";

        $("#leavesArea").append(leaf1, leaf2, leaf3);
   
    };
}

// leaf color change 1
function leavesColorChange1() {
    var leavesBrown1 = TweenMax.to($(".leaf1"), 0.5, {
        color: '#5E400E'
    });

    var leavesColorScene = new ScrollMagic.Scene({
        triggerElement: '#scene1',
        triggerHook: 'onLeave',
        duration: 1500,
        offset: 600
    })
    .setTween(leavesBrown1)
    .addTo(controller)
    .addIndicators();
}

// leaf color change 2
function leavesColorChange2() {
    var leavesBrown2 = TweenMax.to($(".leaf2"), 0.5, {
        color: '#A86919'
    });

    var leavesColorScene = new ScrollMagic.Scene({
        triggerElement: '#scene1',
        triggerHook: 'onLeave',
        duration: 1500,
        offset: 800
    })
    .setTween(leavesBrown2)
    .addTo(controller)
    .addIndicators();
}

// leaf color change 3
function leavesColorChange3() {
    var leavesBrown3 = TweenMax.to($(".leaf3"), 0.5, {
        color: '#91390D'
    });

    var leavesColorScene = new ScrollMagic.Scene({
        triggerElement: '#scene1',
        triggerHook: 'onLeave',
        duration: 1500,
        offset: 1000
    })
    .setTween(leavesBrown3)
    .addTo(controller)
    .addIndicators();
}

// leaves fall from tree
function leavesFallFromtree() {
    var leavesFallFromTree = TweenMax.fromTo($(".fa"), 1, 
        {y:1}, 
        {y:300, ease: Power1.easeInOut} );

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene2',
        triggerHook: 'onLeave',
        offset: 1000
    })
    .setTween(leavesFallFromTree)
    .addTo(controller)
    .addIndicators();
}

// leaves fade away
function leavesFadeaway() {
    var leavesFadeAway = TweenMax.fromTo($(".fa"), 1, 
        {scale:1, opacity:1}, 
        {scale:0.7, opacity:0, ease: Power1.easeInOut} );

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave'
        
    })
    .setTween(leavesFadeAway)
    .addTo(controller)
    .addIndicators();
}

// color change from summer to fall
function toFall() {

    // sky color
    var skyColorToFall = TweenMax.to($("#sky"), 0.5, {
        backgroundColor: '#EDD8B2'
    });

    var skyColorScene1 = new ScrollMagic.Scene({
        triggerElement: '#scene2',
        triggerHook: 'onLeave',
        duration: 1800
    })
    .setTween(skyColorToFall)
    .addTo(controller)
    .addIndicators(); 

    //land color
    var landColorToFall = TweenMax.to($("#land"), 0.5, {
        backgroundColor: '#849439'
    });

    var skyColorScene1 = new ScrollMagic.Scene({
        triggerElement: '#scene2',
        triggerHook: 'onLeave',
        duration: 1800
    })
    .setTween(landColorToFall)
    .addTo(controller);   
}

// create snowflakes
function snowCreate(){
    for (var i = 0; i < 30; i++) {

        var snow1 = "<div class='snow1' style='top:"+randomIntFromInterval(-250,-20)+"px;left:"+randomIntFromInterval(5,1250)+"px;'></div>";
        var snow2 = "<div class='snow2' style='top:"+randomIntFromInterval(-250,-20)+"px;left:"+randomIntFromInterval(5,1250)+"px;'></div>";
        var snow3 = "<div class='snow3' style='top:"+randomIntFromInterval(-250,-20)+"px;left:"+randomIntFromInterval(5,1250)+"px;'></div>";
        var snow4 = "<div class='snow4' style='top:"+randomIntFromInterval(-250,-20)+"px;left:"+randomIntFromInterval(5,1250)+"px;'></div>";
        
        $(".snowScene").append(snow1, snow2, snow3, snow4);
        
    };
}

// snowflake animations
function snow() {
    var tl1 = new TimelineMax({repeat:-1});
    tl1.staggerFromTo($(".snow1"), 6, {y:1, opacity:0.6, scale:0.7}, {y:750, scale:1, ease: Sine.easeOut});
    tl1.staggerFromTo($(".snow1"), 0.3, {opacity:0.6}, {opacity:0});

    var tl2 = new TimelineMax({repeat:-1, delay:1.5});
    tl2.staggerFromTo($(".snow2"), 6, {y:1, opacity:0.6, scale:0.7}, {y:750, scale:1, ease: Sine.easeOut});
    tl2.staggerFromTo($(".snow2"), 0.3, {opacity:0.6}, {opacity:0});

    var tl3 = new TimelineMax({repeat:-1, delay:3});
    tl3.staggerFromTo($(".snow3"), 6, {y:1, opacity:0.6, scale:0.7}, {y:750, scale:1, ease: Sine.easeOut});
    tl3.staggerFromTo($(".snow3"), 0.3, {opacity:0.6}, {opacity:0});

    var tl4 = new TimelineMax({repeat:-1, delay:4.5});
    tl4.staggerFromTo($(".snow4"), 6, {y:1, opacity:0.6, scale:0.7}, {y:750, scale:1, ease: Sine.easeOut});
    tl4.staggerFromTo($(".snow4"), 0.3, {opacity:0.6}, {opacity:0});

    var snowStart1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave',
        offset: 500
    })
    .setTween(tl1)
    .addTo(controller)
    .addIndicators(); 

    var snowStart1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave',
        offset: 500
    })
    .setTween(tl2)
    .addTo(controller)
    .addIndicators(); 

    var snowStart1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave',
        offset: 500
    })
    .setTween(tl3)
    .addTo(controller)
    .addIndicators(); 

    var snowStart1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave',
        offset: 500
    })
    .setTween(tl4)
    .addTo(controller)
    .addIndicators(); 
}

// color change from fall to winter
function toWinter() {
    // sky color
    var skyColorToWinter = TweenMax.to($("#sky"), 0.5, {
        backgroundColor: '#B7ABB0'
    });

    var skyColorScene1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave',
        duration: 1200
    })
    .setTween(skyColorToWinter)
    .addTo(controller)
    .addIndicators(); 

    //land color
    var landColorToWinter = TweenMax.to($("#land"), 4, {
        backgroundColor: '#F2FFFF',
        delay: 5
    });

    var skyColorScene1 = new ScrollMagic.Scene({
        triggerElement: '#scene3',
        triggerHook: 'onLeave'
    })
    .setTween(landColorToWinter)
    .addTo(controller);  
}


















