$(document).ready(function(){
	var x = $(".dropDownFirst").width();
	$(".element").css("height", $(".dropDownFirst").height());
    $(".element").css("width", $(".dropDownFirst").width());
    $(".dropDownFirst").mouseenter(function(){
        $("dropDown").slideDown();
    });   
    $(".menu").mouseleave(function(){
        $("dropDown").slideUp();
    });    
});