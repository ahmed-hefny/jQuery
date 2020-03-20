$(document).ready( function (){
    $(".btn").click( function() {
       // $(".demo").toggle(); // show & hide  { hide - show - toggle}
       // $(".demo").fadeToggle(); // fade the element when it appears { fadeIn - fadeOut - fadeToggle }
       // $(".demo").slideToggle(); // slide the element { slideDown - slideUp - slideToggle }
    });

    var count = 1;
    $("#add").on('click', function() {
// $(".items").append("<li> item" + count++ +"</li>"); // equal innerHTML
        
    });
// Scroll Window
    var divStart = $(".data").offset().top;

    $(window).scroll( function() {
        var windowScroll = $(this).scrollTop(); // get the distance of the scroll between the element and the window  


        /* this formula will calculate the distance between the div Start and the window 
        console.log("divStart", divStart);
        console.log('windowScroll', windowScroll);

        */ 
       if (windowScroll >= divStart) {

        $('.data').addClass('fixed');

       }

       else {

        $('.data').removeClass('fixed');
       }

    });

    $(".applyStyle").css("color","red"); // to add one property


    $(".applyStyle").css({          // to add more than one property
        width:"200px",
        height:'100px',
        backgroundColor:'blue',
        fontSize:'arial',
    }); 

    // active click

    $("ul li a").click(function() {
/*
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
*/
/*
        
        $('li').removeClass("active");
        // $(this).addClass("active");

    })
*/
    $(this)
    .addClass("active").parent()
    .siblings()
    .find("a")
    .removeClass('active');
})

// GET & Set 
// console.log($('.product').html()) // get the value for the div product 

$('.product').html('Hello')  // set the value for the div product 

console.log($('.product').html()) // set the value for the div product 

$(window).scroll(function(){
    if($(this).scrollTop() > 200 ){
        $(".scrollTop").show();
    }
    else {
        $(".scrollTop").hide();
    }
});

$(".scrollTop").click(function(){
    $("body, html").animate({scrollTop:0},1000);
})

}); // Don't write anything out this function 