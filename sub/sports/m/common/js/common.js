$(function(){
	var $mGnb = $(".m_gnb"),
		mGnbDirect;

	/********* m_gnb **********/
	$(".m_gnb_btn").click(function(e){
		$("body").addClass("scroll_fixed");
		black_bg_over();
		$(".m_gnb_bg").show().animate({opacity:0.7}, 400);
		$(".m_gnb_wrap").show().animate({right:0}, 400, "easeOutQuint");
	});
	$(".m_gnb_bg, .m_gnb_close").click(function(e){
		$("body").removeClass("scroll_fixed");
		mGnbClose();
		return false;
	});
	$mGnb.find("> li > a").on("click",function(e){
		mGnbDirect = $(this).attr("data-direct");
		if(!mGnbDirect){
			if(!$(this).hasClass("on")){
				$mGnb.find("> li > a").removeClass("on");
				$(this).addClass("on");
				$(".m_sub_gnb:visible").stop(true,true).slideUp();
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideDown();
			}
			else{
				$(this).removeClass("on");
				$(this).parent().find(".m_sub_gnb").stop(true,true).slideUp();
			}
			return false;
		}
	});

	function mGnbClose(){
		$(".m_gnb_bg").stop().animate({opacity:0}, 400, function(e){
			$(this).hide();
		});
		$(".m_gnb_wrap").stop().animate({right:-280}, 400, "easeOutQuint", function(e){
			$(this).hide();
			black_bg_leave();
		});
	}

	/* black_bg_function */
	function black_bg_over(){
		$("body").css({"overflow-y":"hidden"});
	}
	function black_bg_leave(){
		$("body").css({"overflow-y":"visible"});
	}
	
	/* top_btn */
	/* var $topBtn = $(".top_btn");
	$topBtn.css({opacity:0, visibility: "hidden"});
	var pageY;
	var $contents = $(".contents");
	var $header = $(".header");
	var contentsFrontY; // 스크롤 시 gnb 고정을 위한 이벤트 발생 offset 값 설정.
	$(window).scroll(function(){
		if($("body").hasClass("scroll_fixed")==false){
			pageY = window.pageYOffset;
			contentsFrontY = $contents.offset().top;
			if(pageY>=200){
				$topBtn.css({visibility:"visible"}).stop().animate({opacity:1}, 300);
			}
			else{
				$topBtn.stop().animate({opacity:0}, 300, function(){
					$(this).css({visibility:"hidden"});
				});
			}

			if(pageY>=contentsFrontY){
				$header.addClass("scrolled");
			}
			else{
				$header.removeClass("scrolled");
			}
		}
		else{}
	});
	$(window).scroll();

	$topBtn.click(function(){
		$("html,body").animate({scrollTop:0}, 300);
	}); */

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
		$(this).parent().parent().siblings(".basic_tab_con_box").children().hide().eq(basicTabIndex).show();

		return false;
	});
});