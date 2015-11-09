$(document).ready(function(){
	var x = $(".dropDownFirst").width();
	$(".dropDown").css("height", $(".dropDownFirst").height());
    $(".dropDown").css("width", $(".dropDownFirst").width());
    $(".dropDownFirst").mouseenter(function(){
        var submenu = $(this).parent().next();

        submenu.css({
        	position:'absolute',
        	top: $(this).offset().top + $(this).height() + 'px',
        	left: $(this).offset().left + 'px',
        	z-index: 1000
        });

        submenu..slideDown();

        submenu.mouseleave(function(){
        $(".dropDown").slideUp();
    });
    });      
});