$(function(){
	/********** common **********/
	var $gnb = $(".gnb"),
		$mGnb = $(".m_gnb"),
		mGnbReady = true;
	$gnbClone = $gnb.html();
	$mGnb
		.html($gnbClone)
		.find(".sub_gnb_box").attr("class","m_sub_gnb_box")
		.find(".sub_gnb").attr("class","m_sub_gnb")
		.find(".sub2_gnb").attr("class","m_sub2_gnb");

	/* gnb */
	var $gnbBg = $(".gnb_bg"),
		subGnbH = 0,
		gnbSpeed = 300,
		subGnbLeftH = 0,
		gnbEasing = "easeOutQuint",
		gnbTimer;
	$(".gnb > li[data-dep2='true']").hover(function(){
		gnbOver($(this), gnbSpeed);

	}, function(){
		gnbLeave($(this), gnbSpeed);
	});
	$(".gnb > li[data-dep2='true'] > a").focusin(function(){
		gnbOver($(this).parent(), 0);
	});
	$(".gnb > li .sub_gnb").find("a:last").blur(function(e){
		gnbLeave($(this).parents(".sub_gnb_box").parents("li"), 0);
	});
	$(".gnb > li[data-dep2='true'] > a").keydown(function(e){
		var v_keyCode = e.keyCode || e.which;
		if(v_keyCode == 9){
			if(e.shiftKey){
				gnbLeave($(this).parent(), 0);
			}
		}
	});

	function gnbOver($gnbLiEle, speed){
		gnbTimer = setTimeout(function(){
			$gnbLiEle.find(".sub_gnb_box").show().css({height:0, opacity:0});
			subGnbH = $gnbLiEle.find(".sub_gnb").innerHeight();
			subGnbLeftH = $gnbLiEle.find(".sub_gnb_box .left").innerHeight();
			if(subGnbH<subGnbLeftH){
				subGnbH = subGnbLeftH;
			}
			$gnbLiEle.find(".sub_gnb_box").stop().animate({height:subGnbH, opacity:1},speed,gnbEasing);
			$gnbBg.show().stop().css({opacity:1}).animate({height:subGnbH, opacity:1},speed,gnbEasing);
		}, speed);
	}
	function gnbLeave($gnbLiEle, speed){
		clearInterval(gnbTimer);
		$gnbLiEle.find(".sub_gnb_box").stop().animate({height:0, opacity:0},speed,gnbEasing,function(){
			$(this).hide();
		});
		$gnbBg.stop().animate({height:0, opacity:0},speed,gnbEasing,function(){
			$(this).hide();
		});
	}

	/* m_gnb */
	var $mGnbBtn = $(".m_gnb_btn"),
		mGnbSpeed = 300,
        mGnbEas = "easeOutQuint";
	$mGnbBtn.click(function(e){
		if($(this).hasClass("close")){
			mGnbClose();
			return false;
		}
		black_bg_over();
		$(".m_gnb_dim").show().fadeIn(mGnbSpeed);
		$(".m_gnb_wrap").show().animate({right:0}, mGnbSpeed, mGnbEas);
		$mGnbBtn.addClass("close");
		mGnbReady = false;
	});
	$(".m_gnb_dim").on("click", function(){
		mGnbClose();
		return false;
	})

	function mGnbClose(){
		$(".m_gnb_dim").stop().fadeOut(mGnbSpeed, function(e){
			$(this).hide();
		});
		$(".m_gnb_wrap").stop().animate({right:-360}, mGnbSpeed, mGnbEas, function(e){
			$(this).hide();
			black_bg_leave();
			$(".m_gnb li").removeClass("active");
			$(".m_gnb > li:first").addClass("active");
		});
		$mGnbBtn.focus().removeClass("close");
		$("body").removeClass("hovered_hd");
		mGnbReady = true;
	}

    $(".m_gnb > li > a").click(function(){
		if($(this).parent().attr("data-dep2") == "true"){
			if(!$(this).parent().hasClass("active")){
				$(".m_gnb li").removeClass("active");
				$(this).parent().addClass("active");
			}
			return false;
		}
    });
	$(".m_sub_gnb > li > a").click(function(){
		if($(this).parent().attr("data-dep3") == "true"){
			if(!$(this).parent().hasClass("active")){
				$(".m_sub_gnb li").removeClass("active");
				$(this).parent().addClass("active");
			}
			else{
				$(this).parent().removeClass("active");
			}
			return false;
		}
    });

	$(".m_gnb > li:first").addClass("active");

	/* black_bg_function */
	function black_bg_over(){
		$("body").css({"overflow-y":"hidden"});
	}
	function black_bg_leave(){
		$("body").css({"overflow-y":"visible"});
	}

	/* head_sch_btn */
	var $headSchForm = $(".head_sch_form"),
		$headSchBtn = $(".head_sch_btn");
	$headSchBtn.click(function(e){
		if($headSchForm.is(":hidden")){
			$headSchForm.show().find("input").focus();
			$(this).addClass("active").find(".acc_txt").text("닫기");
		}
		else{
			$headSchForm.hide();
			$(this).removeClass("active").find(".acc_txt").text("열기");
		}
		e.stopPropagation();
	});
	$headSchForm.click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$headSchForm.hide();
		$headSchBtn.removeClass("active");
	});

	/* head_family_btn */
	$(".head_family_btn").click(function(e){
		if($(".head_family_list").is(":hidden"))
			$(".head_family_list").show();
		else
			$(".head_family_list").hide();
		e.stopPropagation();
	});
	$(document).click(function(){
		$(".head_family_list").hide();
	});

	/* head_util_menu bus */
	var $headBusList = $(".head_bus_list");
	$(".head_util_menu > li.bus > a").click(function(e){
		if($headBusList.is(":hidden")){
			$headBusList.show();
			$(this).addClass("active").find(".acc_txt").text("닫기");
		}
		else{
			$headBusList.hide();
			$(this).removeClass("active").find(".acc_txt").text("열기");
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		$headBusList.hide();
		$(".head_util_menu > li.bus > a").removeClass("active");
	});

	/* page_top_btn */
	$(".page_top_btn").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});

	/* foot_fam_list */
	var $footFamBtn = $(".foot_family_box .btn"),
		$footFamList = $(".foot_family_box .list");
	$footFamBtn.click(function(e){
		if($footFamList.is(":hidden")){
			$footFamBtn.addClass("active");
			$footFamList.show();
		}
		else{
			footFamClose();
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		footFamClose();
	});

	function footFamClose(){
		$footFamBtn.removeClass("active");
		$footFamList.hide();
	}
	/********** // common **********/

	/********** sub **********/
	/* breadcrumb */
	/*$(".breadcrumb .btn").click(function(e){
		if($(this).siblings(".menu").is(":hidden")){
			$(".breadcrumb .menu").hide();
			$(this).siblings(".menu").show();
		}
		else{
			$(this).siblings(".menu").hide();
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		$(".breadcrumb .menu").hide();
	});*/

	/* share_box */
	var $shareList = $(".bread_area .share_box .list");
	$(".bread_area .share_box .btn").click(function(e){
		if($shareList.is(":hidden")){
			$shareList.show();
		}
		e.stopPropagation();
		return false;
	});
	$(".bread_area .share_box").click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$shareList.hide();
	});
	$shareList.find("li.close a").click(function(){
		$shareList.hide();
		return false;
	});

	/* sub_left_menu */
	$(".sub_left_menu li a").click(function(){
		if(($(this).parent().attr("data-dep3") == "true") || ($(this).parent().attr("data-dep4") == "true")){
			if($(this).parent().parent().hasClass("sub_left_menu") && !$(this).parent().hasClass("active"))
				$(".sub_left_menu li").removeClass("active");
			$(this).parent().toggleClass("active").siblings().removeClass("active");

			return false;
		}
	});

	/* fz_control_list */
	var $fzControlBtn = $(".fz_control_box .ui_btn"),
		$fzControlList = $(".fz_control_list"),
		fzIndex = 0;
	$fzControlBtn.click(function(e){
		if($fzControlList.is(":hidden")){
			$fzControlList.show();
			$fzControlBtn.addClass("active");
		}
		else{
			$fzControlList.hide();
			$fzControlBtn.removeClass("active");
		}
		e.stopPropagation();
	});
	$fzControlList.click(function(e){
		e.stopPropagation();
	});
	$fzControlList.find(".fz_btn").click(function(){
		fzIndex = $(this).parent().index();
		if(fzIndex == 0){
			$(".sub_right").css({"font-size":"12px"});
		}
		else if(fzIndex == 1){
			$(".sub_right").css({"font-size":"14px"});
		}
		else if(fzIndex == 2){
			$(".sub_right").css({"font-size":"15px"});
		}
		else if(fzIndex == 3){
			$(".sub_right").css({"font-size":"17px"});
		}
		else if(fzIndex == 4){
			$(".sub_right").css({"font-size":"19px"});
		}
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	$(document).click(function(){
		$fzControlList.hide();
		$fzControlBtn.removeClass("active");
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
	var basicTabIndex,
		basicTabSpeed = 300;
	$(".basic_tab.onoff li a").click(function(){
		basicTabIndex = $(this).parent().index();
		$(this).parent().addClass("active").siblings().removeClass("active");
		$(this).attr("title","선택됨").parent().siblings().children().attr("title","");
		$(this).parent().parent().siblings(".basic_tab_con_box").children().hide().eq(basicTabIndex).fadeIn(basicTabSpeed);

		/* 사업분야 - 정밀안전진단 */
		if($(this).parent().parent().hasClass("safe_dia")){
			safe_diaH();
			safe_diaH2();
		}

		return false;
	});


	/* rule_nav.onoff */
	var ruleNavIndex,
		ruleNavSpeed = 300;
	$(".rule_nav.onoff li a").click(function(){
		ruleNavIndex = $(this).parent().index();
		$(this).parent().addClass("active").siblings().removeClass("active");
		$(this).attr("title","선택됨").parent().siblings().children().attr("title","");
		$(this).parents(".rule_nav_box").siblings(".basic_tab_con_box").children().hide().eq(ruleNavIndex).fadeIn(ruleNavSpeed);

		return false;
	});

	// activeFunc($(".board_util_type button"));
	// activeTxt($(".board_util_type button.active"));

	function activeFunc($element){
		$element.click(function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active").siblings().removeClass("active");
				activeTxt($(this));
			}
		});
	}
	function activeTxt($element){
		$element.attr("title","선택됨").siblings().attr("title","");
	}

	/* tabOnOff */
	// tabOnOff($(".vote_dep1_tab li a"));

	function tabOnOff($element){
		var tabControl = 0,
			tabIndex;
		$element.click(function(){
			tabControl = $(this).parents("ul").attr("data-tabControl");
			tabIndex = $(this).parent().index();
			$(this).attr("title","선택됨").parent().siblings().attr("title","");
			$(this).parent().addClass("active").siblings().removeClass("active");
			$("[data-tabNumber=" + tabControl + "]").children().eq(tabIndex).stop().fadeIn(300).siblings().hide();
			return false;
		});
	}

	/* faq */
	$(".faq_q_tit a").click(function(){
		if(!$(this).closest("li").hasClass("on")){
			$(this).attr("title","선택됨").closest("li").addClass("on").siblings().removeClass("on").find("a").attr("title","");
		}
		else{
			$(this).attr("title","").closest("li").removeClass("on");
		}
		return false;
	});

	$(window).resize(function(){
		treeLineResp();
		coreValResp();
		socCorpsH();
		elec_equipH();
		safe_diaH();
		safe_diaH2();
	});
	function treeLineResp(){
		if($(".tree_line_list[data-respheight='true']").length != 0){
			$(".tree_line_list[data-respheight='true']").each(function(i){
				var maxH = 0;
				$(this).find("> li").css({height:"auto"});
				$(this).find("> li").each(function(i){
					var elH = $(this).outerHeight();
					maxH = elH > maxH ? elH : maxH;
				});
				$(this).find("> li").css({height:maxH});
			});
		}
	}
	function coreValResp(){
		if($(".core_val_list[data-respheight='true']").length != 0){
			$(".core_val_list[data-respheight='true']").each(function(i){
				var maxH = 0;
				$(this).find(".box_txt").css({height:"auto"});
				$(this).find(".box_txt").each(function(i){
					var elH = $(this).outerHeight();
					maxH = elH > maxH ? elH : maxH;
				});
				$(this).find(".box_txt").css({height:maxH});
			});
		}
	}
	// 봉사단 조직도 no
	function socCorpsH(){
		if($(".soc_corps_field").length != 0){
			$(".soc_corps_field").each(function(i){
				var maxH = 0;
				$(this).find('> li .soc_txt_box').css({height:"auto"});
				$(this).find('> li .soc_txt_box').each(function(i){
					var elH = $(this).outerHeight();
					maxH = elH > maxH ? elH : maxH;
				});
				$(this).find('.soc_txt_box').css({height:maxH});
			});
		}
	}
	// 안전진단 20-04-17
	function elec_equipH(){
		if($(".elec_equip_box").length != 0){
			$(".elec_equip_box").each(function(i){
				var maxH2 = 0;
				$(this).find('> li span').css({height:"auto"});
				$(this).find('> li span').each(function(i){
					var elH2 = $(this).outerHeight();
					maxH2 = elH2 > maxH2 ? elH2 : maxH2;
				});
				$(this).find('> li div').css({height:maxH2});
			});
		}
	}

	// 안전진단 (상단 제목 부분) 20-04-20
	function safe_diaH(){
		if($(".safe_dia_box").length != 0){
			$(".safe_dia_box").each(function(i){
				var maxH2 = 0;
				$(this).find('.safe_dia_txt em').css({height:"auto"});
				$(this).find('.safe_dia_txt em').each(function(i){
					var elH2 = $(this).outerHeight();
					maxH2 = elH2 > maxH2 ? elH2 : maxH2;
				});
				$(this).find('.safe_dia_txt em').css({height:maxH2});
			});
		}
	}

	// 안전진단 (하단 설명 부분) 20-04-20
	function safe_diaH2(){
		if($(".safe_dia_box").length != 0){
			$(".safe_dia_box").each(function(i){
				var maxH2 = 0;
				$(this).find('.safe_dia_txt span').css({height:"auto"});
				$(this).find('.safe_dia_txt span').each(function(i){
					var elH2 = $(this).outerHeight();
					maxH2 = elH2 > maxH2 ? elH2 : maxH2;
				});
				$(this).find('.safe_dia_txt span, .safe_dia_txt > ul').css({height:maxH2});
			});
		}
	}

	/* vi_social no */
	// 사회적 가치 탭메뉴 클릭 이벤트
	$('.w_social_list > li > a').click(function(){
		var social = $(this).parent().index();
		$(this).parent().addClass("active").siblings('li').removeClass("active");
		$('.social_depth2 > li').eq(social).addClass("active").siblings('li').removeClass("active");
		$('.m_social_dep2 > li').eq(social).addClass("active").siblings('li').removeClass("active");

		var social_txt = $('.m_social_dep2 > li').eq(social).addClass("active").text();
		$('.m_social_list b a').text(social_txt);
		return false;
	});

	// 사회적 가치 탭메뉴 키보드 이벤트
	/*$('.w_social_list > li > a').focusin(function(){
		var social2 = $(this).parent().index();
		$(this).addClass("active").parent().siblings('li').removeClass("active").find('a').removeClass("active");
		$('.social_depth2 > li').eq(social2).addClass("active").siblings('li').removeClass("active");
	});

	$('.w_social_list > li:last-child > a').focusout(function(){
		$(this).parent().addClass("active");
	});*/

	// 사회적 가치 탭메뉴 모바일 이벤트 (콤보박스)
	$('.m_social_list b a').click(function(){
		$(this).toggleClass("active").parent().next().toggleClass("active");
		return false;
	});

	$('.m_social_dep2 > li > a').click(function(){
		var m_social = $(this).parent().index();
		$(this).parent().parent().removeClass("active").siblings().children('a').removeClass("active");
		$('.social_depth2 > li').eq(m_social).addClass("active").siblings('li').removeClass("active");
		$('.w_social_list > li').eq(m_social).addClass("active").siblings('li').removeClass("active");

		var social_txt2 = $(this).text();
		$('.m_social_list b a').text(social_txt2);
		return false;
	});

	/* 방문신청 방문자명 focus */
	$("[data-removevisit]").click(function(){
		$("[data-addvisit]").focus();
	});

	// 통합검색 인기검색어 탭메뉴
	$('.int_sch_tab2 > li  > a').click(function(){
		$(this).addClass("active").parent().siblings().find("a").removeClass("active");
		var sch_index = $(this).parent().index();
		$(this).parent().parent().next().children('ul').eq(sch_index).stop().fadeIn().siblings().stop().fadeOut();
		return false;
	});
	/********** // sub **********/

	/* layer_pop */
    var layerPopNum = 0,
		$focusOnEle = null;
    $(document).on("click", "[data-layeropen]", function(){
		$focusOnEle = $(this);
        $("body").css({"overflow":"hidden"});
        layerPopNum = $(this).attr("data-layeropen");
        $(".layer_pop_box[data-layernum='" + layerPopNum + "']").show().focus();
        return false;
    });
    $(document).on("click", ".layer_pop_close, [data-layerclose]", function(){
		if($(this).parents(".layer_pop_box:visible").length == 1)
        	$("body").css({"overflow":"visible"});
        $(this).parents(".layer_pop_box").first().hide();
		if($focusOnEle != null)
        	$focusOnEle.focus();
        return false;
    });

	/* load callback */
	$(window).load(function(){
		var $footer = $(".footer"),
		$contents = $(".contents"),
		footerH = 0;

		$(window).resize(function(){
			/* mGnb_control */
			windowW = window.innerWidth;
			windowH = $(window).height();
			if(windowW>=991){
				if(mGnbReady){
					mGnbClose();
				}
			}
			else{
				mGnbReady = true;
			}

			footerH = $footer.outerHeight();
			$contents.css({"padding-bottom":footerH});
		});

		// var $contents = $(".contents");
		// var contentsFrontY; // 스크롤 시 gnb 고정을 위한 이벤트 발생 offset 값 설정.

		var $header = $(".header"),
			winY = 0,
			docH = 0,
			headerH = 0,
			footerH = 0,
			quickH,
			quickTopParam = 0;
		$(window).resize(function(){
			docH = $(document).height();
			headerH = $header.innerHeight();
			footerH = $(".footer").height();
			quickH = $(".common_quick_menu").height();
		});
		$(window).scroll(function(){
			winY = $(this).scrollTop();
			/* header scrolled */
			// contentsFrontY = $contents.offset().top;
			if(winY>=(headerH/2)){
				$("body").addClass("scrolled_hd");
			}
			else{
				$("body").removeClass("scrolled_hd");
			}

			/* common_quick_menu positioning */
			// @@@ 2020-06-30 퀵메뉴 height 값 수정
			quickTopParam = headerH + winY + 205;
			if(quickTopParam > docH - footerH - quickH - 100){
				return false;
			}
			$(".common_quick_menu").css({top:quickTopParam});
		});
		$(window).trigger("resize");
		$(window).trigger("scroll");

		/* header hover focus */
		$header.on("mouseenter focusin", function(){
			$("body").addClass("hovered_hd");
		});
		$header.on("mouseleave", function(){
			if(mGnbReady && $headSchForm.is(":hidden") && $headBusList.is(":hidden"))
				$("body").removeClass("hovered_hd");
		});
	});

		
		// $('.btn_popup').click(function(){
		// 	var pop_data = $(this).data("popup");
		
		// 	$('#'+pop_data).fadeIn(300).attr('tabindex','0').focus();
		// 		return false;
		// 	});
		
		// POPUP
		// @@@ 2020-06-30 팝업
			$('.popup_wrap .pop_x').click(function(){
			$(this).parents('.popup_wrap').fadeOut(300);
		  });
});

/* contents function */
function conSkipNavi(element){
	var goId = element.getAttribute("href")
	var thisY = $(goId).offset().top;
	$(goId).focus();
	$("html,body").animate({scrollTop:thisY-100},0);
}

// sub_survey_detail img클릭했을때 radio버튼 클릭 이벤트

	$(".radio_img img").click(function(){
		$(this).prev('span').click();
	})
/* window popup */
function beforePopUP(obj){
	window.open(obj+'.html','','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1000,height=600,top=100,left=200');
}
