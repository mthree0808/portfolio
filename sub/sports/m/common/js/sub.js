$(function(){
	/* breadcrumb */
    var breadSpeed = 300,
        breadEas = "easeOutQuint";
    $(".bread_dep_btn").click(function(e){
        $(".breadcrumb_slide").stop().slideUp(breadSpeed,breadEas);
        if(!$(this).hasClass("on")){
            $(".bread_dep_btn").removeClass("on");
            $(this).addClass("on");
            $(this).siblings().stop().slideDown(breadSpeed,breadEas);
        }
        else{
            $(".bread_dep_btn").removeClass("on");
            $(this).siblings().stop().slideUp(breadSpeed, breadEas);
        }
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".bread_dep_btn").removeClass("on");
        $(".breadcrumb_slide").stop().slideUp(breadSpeed,breadEas);
    });
});