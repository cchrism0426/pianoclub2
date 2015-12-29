$(document).ready(function(){
    var b = $(window).width();
    $(".navbar").css("margin-left", .125*b);
    $(".navbar").css("margin-right", .125*b);

    // $('.form-head').css("width", $('.form').width());

    $('.form-head').click(function() {
        $(this).next().slideToggle();
    });

    // if ($(".navbar").height() + $("#logo").height() + $(".container").height() + .05*$("body").height() < $(document).height()) {
    //     var h = $(window).height() - $(".navbar").height() - $("#logo").height();
    //     $(".container").css("height", h);
    // }
});