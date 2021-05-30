$(document).ready(function() {
    AOS.init();
     $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut("slow");
        }, 2500);
    });

    setTimeout(function() {
        $("#popupse").addClass('active');
        $('.popupseoverlay').addClass('active');
    }, 10000);


    setTimeout(function() {
        $("#popupse").removeClass('active');
        $('.popupseoverlay').removeClass('active');
    }, 13000);

    $(".profile").ripples({
        resolation: 512,
        dropRadius: 10
    });

    $(".mainslider ").owlCarousel({
        items: 1,
        loop: true,
        nav:  true,
        autoplay: true,
        autoplaySpeed: 2500,
        smartSpeed: 2000,
        autoplayHoverPause: true
    });


    $(".menu").click(function() {
        $(".menu .line").toggleClass("active");
         $(".navigation").toggleClass("open");
          $(".overlay").toggleClass("openoverlay");
    });
   
    $(".list .span2").click(function() {
        $(".menu .line").toggleClass("active");
         $(".navigation").toggleClass("open");
          $(".overlay").toggleClass("openoverlay");
    });
   
    $(window).scroll(function() {
        $(this).scrollTop() > 40 ? $(".topbottom").fadeIn() : $(".topbottom").fadeOut();
    });
    
    $(".topbottom").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });
    $("#homespan").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });
    $("#aboutspan").click(function(){
        $("html, body").animate({
            scrollTop: 755,
        }, 100);
    });
    $("#closecontact").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });


    $('#toggles').click(function() {
        var html = document.querySelector("html");
        var tg = document.getElementById("toggles");
        tg.classList.toggle("active");
       
       
        if ($("html").attr("data-theme") == 'dark') {
            html.setAttribute("data-theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
        }
       
    });
       


     $('.message').hide();
     $('#submit').click(function(){
        $('.message').show(100);
        setTimeout(() => {
            $('#cform').trigger('reset');
            $('.message').hide(100); 
        }, 5000);
     });

});





const tooltips = document.querySelectorAll(".tooltips");
function runprogress() {
tooltips.forEach((o) => {
   o.innerText = 0;
   var e = +o.dataset.percent;
   var t = Math.ceil(e / 50);
   var n = function() {
       var l = +o.innerText;
       l < e ? ((o.innerText = l + t), (o.parentElement.style.width = o.innerText + "%"), setTimeout(n, 50)) : (o.innerText = +e + "%");
   };
   n();
});
}
var footerSection = document.querySelector("footer"),
options = {
rootMargin: "0px 0px 200px 0px"
};
const sectionObserver = new IntersectionObserver(function(o) {
runprogress();
}, options);
sectionObserver.observe(footerSection);










    function togglecontact() {
     $(".pop-overlay").toggleClass("openoverlay");
      document.getElementById("popups").classList.toggle("active");
    }
    
    function toggle() {
    $(".pop-overlay").toggleClass("openoverlay");
     document.getElementById("popup").classList.toggle("active");
    }
    


