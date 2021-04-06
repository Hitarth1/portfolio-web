$(document).ready(function(){
    Pace.on("done", function(){
        $(".pre_loader").css("display","none");
    });

    $(".hero_title").each(function(i){
        var $current_element = $(this);
        setTimeout(function(){
            $current_element.addClass("reveal");
        }, i * 500);
    });


    $("#rotating-text").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
        // Called after the entrance animation is executed.
        }
    });


    $('.owl-carousel').owlCarousel({
        items: 1,
        loops: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut'
    });

    // reveal text when in viewport
    $(".text_reveal:not(.in)").each(function(i){
        var $current_element = $(this);
        $current_element.isInViewport(function(status){
            if(status === "entered"){
                setTimeout(() => {
                   $current_element.addClass("in"); 
                }, i * 5);
            }
        })
    });

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0 ){
            $(".navbar").addClass("nav-bg-black");
        } else {
            $(".navbar").removeClass("nav-bg-black");
        }
    });

});