$(function(){
	var $gnb = $(".gnb"),
		gnbBgHeight = $(".gnb_bg").outerHeight(),
		gnbEasing = "easeOutCubic",
		gnbSpeed = 300,
		gnbTimer;

	gnbInit();
	/* gnb */
	$gnb.hover(function(){
		gnbTimer = setTimeout(function(){
			$(".sub_gnb, .gnb_bg").stop().show().animate({height:gnbBgHeight},gnbSpeed,gnbEasing);
		}, 150);
	}, function(){
		clearTimeout(gnbTimer);
		$(".sub_gnb, .gnb_bg").stop().animate({height:0},gnbSpeed,gnbEasing,function(){
			$(this).hide();
		});
	});

	function gnbInit(){
		$(".gnb_bg, .sub_gnb").css({height:0});
	}

	/* gnb_bar */
	var gnbLiWidth,
		gnbLiPos,
		gnbBarSpeed,
		gnbBarEas = "easeOutQuint",
		gnbBar = $(".gnb_bar");
	$(".gnb > li").hover(function(){
		gnbLiWidth = $(this).width();
		gnbLiPos = $(this).position().left;
		gnbBar.stop().animate({left:gnbLiPos, width:gnbLiWidth, opacity:1},gnbBarSpeed,gnbBarEas);
	},function(){
		gnbBar.stop().animate({width:0, opacity:0},gnbBarSpeed,gnbBarEas);
	});
	
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