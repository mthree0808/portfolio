$(function(){
	/* breadcrumb */
    var breadSpeed = 300,
        breadEas = "easeOutQuint";
    $(".bread_dep_btn").click(function(e){
        $(".breadcrumb_dep2").stop().slideUp(breadSpeed,breadEas);
        if(!$(this).parent().hasClass("active")){
            $(".breadcrumb > li").removeClass("active");
            $(this).parent().addClass("active");
            $(this).siblings().stop().slideDown(breadSpeed,breadEas);
        }
        else{
            $(".breadcrumb > li").removeClass("active");
            $(this).siblings().stop().slideUp(breadSpeed, breadEas);
        }
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".breadcrumb > li").removeClass("active");
        $(".breadcrumb_dep2").stop().slideUp(breadSpeed,breadEas);
    });

    /* sub_left */
    var lmSpeed = 300,
        lmEas = "easeOutQuint";
    $(".sub_left_menu > li > a").click(function(){
        if($(this).attr("href") == "#"){
            $(".sub_left_dep3").stop().slideUp(lmSpeed,lmEas);
            if(!$(this).parent().hasClass("active")){
                $(".sub_left_menu > li").removeClass("active");
                $(this).parent().addClass("active");
                $(this).siblings().stop().slideDown(lmSpeed,lmEas);
            }
            else{
                $(".sub_left_menu > li").removeClass("active");
                $(this).siblings().stop().slideUp(lmSpeed, lmEas);
            }
            return false;
        }
    });
    $(".sub_left_menu > li:not(.active) .sub_left_dep3").hide();

    /* faq */
    var basicTabIndex;
    $(".basic_tab.faq li a").click(function(){
        basicTabIndex = $(this).parent().index();
        $(this).parent().addClass("on").siblings().removeClass("on");
        if(basicTabIndex == 0){
            $(".faq_list > li").show();
        }
        else{
            $(".faq_list > li").hide();
            $(".faq_list > li[data-num='" + basicTabIndex + "']").show();
        }

        return false;
    });

    $(".faq_q_tit").click(function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().toggleClass("on");
        return false;
    });

    /* layer_pop */
    var layerPopNum = 0,
        layerYtSrc = null,
        $focusOnEle = null;
    $("[data-layeropen]").click(function(){
        $focusOnEle = $(this);
        $("body").css({"overflow-y":"hidden"});
        layerPopNum = $(this).attr("data-layeropen");
        $(".layer_pop_box[data-layernum='" + layerPopNum + "']").show().focus();

        if($(this).attr("data-youtube") != undefined){
            layerYtSrc = $(this).attr("data-youtube")+"?enablejsapi=1&version=3";
            $(".layer_pop_box[data-layernum='" + layerPopNum + "']").find("iframe").attr("src",layerYtSrc);
        }

        return false;
    });
    /*$(".layer_pop_close, [data-layerclose]").click(function(){
        try{
        	$(".layer_pop_box[data-layernum='" + layerPopNum + "']").find("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }catch(e){}
        $("body").css({"overflow-y":"visible"});
        $(".layer_pop_box").hide();
        $focusOnEle.focus();
        return false;
    });*/
    $(window).resize(function () {
        responHeight();
    });
    responHeight();
    function responHeight() {
        if ($(window).width() > 1200) {
            var windowH = $(window).height();
            var contentsH = $('.con_layout_inner.online').height();
            if (windowH > contentsH) {//윈도우 높이 값 > 컨텐츠 높이 값
                $('.prev_next_box_online').addClass('change'); //클래스 추가
                $('.con_layout_inner.online').css('min-height', (windowH - 110) + "px"); // 컨텐츠 높이 값 = 윈도우 높이 값 - 100
                console.log(windowH + " : " + contentsH);
                $('.sub_con').css('padding-bottom','70px');
            }
        } else {
            $('.prev_next_box_online').removeClass('change'); //클래스 삭제, contentsH = 높이 값 자동
            $('.con_layout_inner.online').css('min-height', 'auto');
            console.log("no")
        }
    }

    /* layer_pop */
    var layerPopNum = 0;
    $("[data-layeropen]").click(function(){
        $("body").css({"overflow":"hidden"});
        layerPopNum = $(this).attr("data-layeropen");
        $(".layer_pop_box[data-layernum='" + layerPopNum + "']").show().focus();

        if($(this).attr("data-youtube") != undefined){
            layerYtSrc = $(this).attr("data-youtube")+"?enablejsapi=1&version=3";
            $(".layer_pop_box[data-layernum='" + layerPopNum + "']").find("iframe").attr("src",layerYtSrc);
        }

        return false;
    });
    $(".layer_pop_close, [data-layerclose]").click(function(){
        $("body").css({"overflow":"visible"});
        $(".layer_pop_box").hide();
        $("[data-layeropen='" + layerPopNum + "']").focus();
        $(".layer_pop iframe").attr("src", "");
        return false;
    });
});