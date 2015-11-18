$(document).ready(function(){
	var a = $(".dropdown").width();
	var b = $(".navbar").width();
	var c = (b - 5*a)/2;
	$(".button:first-of-type").css("margin-left", c);
	
    $(".dropdown").mouseenter(function(){
        $(".dropdownlist").slideDown();
    });   
    $(".dropdown").mouseleave(function(){
        $(".dropdownlist").slideUp();
    });    
});