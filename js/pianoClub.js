$(document).ready(function(){
	// var a = $(".dropdown").width();
	// var b = $(".navbar").width();
	// var c = (b - 5*a)/2;
	// $(".button:first-of-type").css("margin-left", c);
	
    var b = $(window).width();
    $(".navbar").css("margin-left", .125*b);
    $(".navbar").css("margin-right", .125*b);

    // $(".dropdown").mouseover(function(){    
    //     $(".dropdownlist").slideDown();
    //     event.stopPropagation();
    // });

    // $(".dropdown").mouseleave(function(){
    //     $(".dropdownlist").slideUp();
    //     event.stopPropagation();
    // }); 
});