$(document).ready(function(){
	var $gnb = $("#gnb");
	var $mGnb = $(".m_gnb");
	var $mGnbClone = $mGnb.html();
	$gnb.html($mGnbClone);
	$gnb.find(".ico").remove();
	$gnb.find(".m_sub_gnb").remove();
	// $mGnb.find(".sub_gnb").attr("class","m_sub_gnb");
	// $mGnb.find(".sub2_gnb").attr("class","m_sub2_gnb");

	/********* m_gnb **********/
	$(".m_gnb_btn").click(function(e){
		mGnbOn = true;
		black_bg_over();
		$(".m_gnb_bg").show().animate({opacity:0.8}, 400);
		$(".m_gnb_wrap").show().animate({right:0}, 400, "easeOutQuint");
	});
	$(".m_gnb_bg, .m_gnb_close").click(function(e){
		mGnbClose();
		return false;
	});
	$mGnb.find("> li > a").on("click",function(e){
		mGnbDirect = $(this).attr("data-direct");
		if(!mGnbDirect){
			if(!$(this).hasClass("active")){
				$mGnb.find("> li > a").removeClass("active");
				$(this).addClass("active");
				$(".m_sub_gnb:visible").stop(true,true).slideUp();
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideDown();
			}
			else{
				$(this).removeClass("active");
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideUp();
			}
			return false;
		}
	});
	
	var mGnbOn = false;
	$(window).resize(function(){
		/* mGnb_control */
		windowW = window.innerWidth;
		if(windowW>=991){
			if(mGnbOn){
				mGnbClose();
			}
		}
	});
	$(window).trigger("resize");

	function mGnbClose(){
		$(".m_gnb_bg").stop().animate({opacity:0}, 400, function(e){
			$(this).hide();
		});
		$(".m_gnb_wrap").stop().animate({right:-360}, 400, "easeOutQuint", function(e){
			$(this).hide();
			black_bg_leave();
		});
		mGnbOn = false;
	}
	
	/* black_bg_function */
	function black_bg_over(){
		$("body").css({"overflow-y":"hidden"});
	}
	function black_bg_leave(){
		$("body").css({"overflow-y":"visible"});
	}
	/********* // m_gnb **********/
	
	/* family_slt */
	$(".family_site_btn").click(function(e){
		if($(this).siblings(".family_slt").is(":hidden")){
			$(this).addClass("active");
			$(this).siblings(".family_slt").show();
		}
		else{
			$(this).removeClass("active");
			$(this).siblings(".family_slt").hide();
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		$(".family_site_btn").removeClass("active");
		$(".family_slt").hide();
	});

	/* top_btn */
	var $topBtn = $(".top_btn");
	// var pageY;
	// var $contents = $(".contents");
	// var $header = $(".header");
	// var contentsFrontY; // 스크롤 시 gnb 고정을 위한 이벤트 발생 offset 값 설정.
	// $(window).scroll(function(){
		
	// });
	// $(window).scroll();

	$topBtn.click(function(){
		$("html,body").animate({scrollTop:0}, 300);
	});

	/* attach */
	$(".attach_vinput").click(function(){
		$(this).parent().siblings(".attach_input").trigger("click");
	});
	$(".attach_input").on("change",function(){
		var attText = $(this).val();
		var attTextIndex = attText.lastIndexOf("\\") + 1;
		attText = attText.slice(attTextIndex);
		$(this).next().find(".attach_vinput").val(attText);
	});

	/* basic_tab.onoff */
	var basicTabIndex;
	$(".basic_tab.onoff li a").click(function(){
		basicTabIndex = $(this).parent().index();
		$(this).parent().addClass("on").siblings().removeClass("on");
		if($(".basic_tab_con_box").length != 0)
			$(this).parent().parent().siblings(".basic_tab_con_box").children().hide().eq(basicTabIndex).stop().fadeIn();

		return false;
	});

	/* maccoknow_tab onoff */
	var $maccoTab = $(".maccoknow_tab");
	$(".maccoknow_tab_btn").click(function(e){
		if($maccoTab.is(":hidden")){
			$(this).addClass("active");
			$maccoTab.show();
		}
		else{
			$(this).removeClass("active");
			$maccoTab.hide();
		}
		e.stopPropagation();
	});

	$(document).click(function(){
		$(".maccoknow_tab_btn").removeClass("active");
		$maccoTab.hide();
	});
});