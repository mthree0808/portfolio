$(function(){
	var $leftMenu = $(".common_left_menu"),
		$mGnb = $(".m_gnb"),
		$leftMenuClone = $leftMenu.html(),
		mGnbFadeSpeed = 400,
		mGnbFadeSpeed = "easeOutQuint";
		// 모바일 메뉴 만들면서 이용문의 메뉴 필요하여 추가
		$leftMenuClone = '<li class=""><a href="/mvoting/useinqry/selectPageListUseInqry.do" data-dep2="false">이용문의</a></li>' + $leftMenuClone;

		$mGnb.html($leftMenuClone);
		$mGnb.find(".common_left_dep2").attr("class","m_sub_gnb");

	/* top_header fixed */
	// var topHeaderClone = $(".top_header").clone();

	var $header = $(".header"),
		$topHeader = $(".top_header"),
		topHeaderH = 0,
		seoulGnbH = 48; // seoul-gnb 높이값 (seoul-gnb 높이가 변경될 경우 수정 필요)
	$(window).resize(function(){
		topHeaderH = $topHeader.height();
		$header.css({"padding-top":topHeaderH});
	});

	var nowSc = 0,
		beforeSc = 0,
		thfTop = 0,
		tHparam = 0;

	$(window).scroll(function(){
		nowSc = $(this).scrollTop();

		if(($("#seoul-common-gnb").length > 0) && (nowSc<=seoulGnbH+topHeaderH)){
			thfTop = -(nowSc-48);
			if(thfTop<0){
				thfTop = 0;
			}
			$topHeader.css({transition:"none"}).stop().animate({top:thfTop},0);
			console.log("seo")
		}
		else{
			$topHeader.css({transition:"all 0.3s"});
			if($("#seoul-common-gnb").length > 0) // seoul-gnb 있다면
				tHparam = topHeaderH + seoulGnbH;
			else{
				tHparam = topHeaderH;
			}
			if(nowSc>=tHparam && nowSc>beforeSc){
				$topHeader.stop().animate({top:-topHeaderH}, 0, "easeOutQuart");
			}
			else if(nowSc<beforeSc){
				$topHeader.stop().animate({top:0}, 0, "easeOutQuart");
			}
		}
		beforeSc = nowSc;
	});
	$(window).trigger("scroll");


	/********* m_gnb **********/
	var $focusMgnb;
	$(".m_gnb_btn").click(function(e){
		$focusMgnb = this;
		black_bg_over();
		$(".m_gnb_wrap").stop().fadeIn(mGnbFadeSpeed, mGnbFadeSpeed);
	});
	$(".m_gnb_close").click(function(e){
		mGnbClose();
		return false;
	});

	function mGnbClose(){
		$(".m_gnb_wrap").stop().fadeOut( mGnbFadeSpeed, mGnbFadeSpeed, function(e){
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
	/********* // m_gnb **********/
	
	/* head_sch */
	var $headSchBox = $(".head_sch_box");
	$(".m_sch_btn").click(function(){
		if($headSchBox.is(":hidden")){
			$(".head_sch_bg").show().animate({opacity:0.5}, 400);
			$headSchBox.stop().fadeIn();
			$(this).find(".wa_txt").text("닫기");
		}
		else{
			$(".head_sch_bg").stop().animate({opacity:0}, 400, function(e){
				$(this).hide();
			});
			$headSchBox.stop().fadeOut();
			$(this).find(".wa_txt").text("열기");
		}
	});

	/* common_left */
    var lmSpeed = 300,
        lmEas = "easeOutQuint";
    $(".common_left_menu > li > a").click(function(){
		if($(this).attr("data-dep2") == "true"){
			$(".common_left_dep2").stop().slideUp(lmSpeed,lmEas);
			if(!$(this).parent().hasClass("active")){
				$(".common_left_menu > li").removeClass("active");
				$(this).parent().addClass("active");
				$(this).siblings().stop().slideDown(lmSpeed,lmEas);
			}
			else{
				$(".common_left_menu > li").removeClass("active");
				$(this).siblings().stop().slideUp(lmSpeed, lmEas);
			}
			return false;
		}
    });
    $(".common_left_menu > li:not(.active) .common_left_dep2").hide();

	/* layer_pop */
    var layerPopNum = 0,
		$focusOnEle = null;
    $("[data-layeropen]").click(function(){
		$focusOnEle = $(this);
        $("body").css({"overflow":"hidden"});
        layerPopNum = $(this).attr("data-layeropen");
        $(".layer_pop_box[data-layernum='" + layerPopNum + "']").show().focus();
        return false;
    });
    $(".layer_pop_close, [data-layerclose]").click(function(){
        $("body").css({"overflow":"visible"});
        $(".layer_pop_box").hide();
        $focusOnEle.focus();
        return false;
    });

	/* top_btn */
	/* var $topBtn = $(".top_btn");
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
	});
	$(window).scroll();

	$topBtn.click(function(){
		$("html,body").animate({scrollTop:0}, 300);
	});*/

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
		$(this).parent().parent().siblings(".basic_tab_con_box").children().hide().eq(basicTabIndex).fadeIn(basicTabSpeed);

		return false;
	});

	/* board_util_type */
	activeFunc($(".board_util_type button"));
	activeTxt($(".board_util_type button.active"));

	function activeFunc($element){
		$element.click(function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active").siblings().removeClass("active");
				activeTxt($(this));
				
				if($(this).hasClass("gal"))
					$(".vote_list").removeClass("list_type");
				else
					$(".vote_list").addClass("list_type");
			}
		});
	}
	function activeTxt($element){
		$element.attr("title","선택됨").siblings().attr("title","");
	}

	/* share_layer_box */
	$(".share_btn").click(function(){
		$(this).siblings(".share_layer_box").show();
	});
	$(".share_layer_close").click(function(){
		$(this).parents(".share_layer_box").hide().siblings(".share_btn").focus();
	});

	$(".sns_share_util_btn").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active").find(".acc_txt").text("닫기");
		}
		else{
			$(this).removeClass("active").find(".acc_txt").text("열기");
		}
	});

	/* tabOnOff */
	tabOnOff($(".vote_dep1_tab > li > a"));
	tabOnOff($(".vote_item_tab > li > a"));

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

	$("#pNumFocusing").click(function(){
		$(".form_input:first").focus();
		return false;
	});

	/* 투표 항목 체크 */
	$(".main_vote_area:not('.my') .vote_select_list > li > .slt_area").click(function(){
		if($(this).siblings().find("input").is(":checked")){
			$(this).siblings().find("input").prop("checked",false);
			$(this).attr("title","");
		}
		else{
			$(this).siblings().find("input").prop("checked",true);
			$(this).attr("title","해당 항목 선택됨");
		}
		return false;
	});

	/* 투표 항목 이미지 툴팁 */
	var voteItemImgSrc = null,
		voteItemImgAlt = null;
	$(".vote_select_list .img_view_item").hover(function(){
		voteItemImgSrc = $(this).find("img:first").attr("src");
		voteItemImgAlt = $(this).find("img:first").attr("alt");
		voteItemImgToolTip = "<div class='vote_img_tooltip'><img src='" + voteItemImgSrc + "' alt='" + voteItemImgAlt + "'></div>";
		$(this).find(".img_box").append(voteItemImgToolTip);
	},function(){
		$(this).find(".img_box .vote_img_tooltip").remove();
	});

	/* 투표 결과 주관식항목 여닫기 */
	$(".vote_item.onoff .vote_item_tit").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$(this).parents(".vote_item").find(".vote_input_box").show();
		}
		else{
			$(this).removeClass("active");
			$(this).parents(".vote_item").find(".vote_input_box").hide();
		}
		return false;
	});

	$(window).load(function(){
		/* 탭:질문이 1:1 대응되는 투표의 경우 */
		if($(".vote_item_tab").length > 0){
			$(".vote_item_tab").siblings(".vote_item_con_box").find(".vote_item:not(':first')").hide();
		}

		/* 투표 결과 퍼센트바 위치 설정 */
		if($(".vote_count").length > 0)
			voteBarPositioning();
	});

	function voteBarPositioning(){
		var $vCount = $(".vote_count"),
			$vBar = $(".vote_result_bar:first"),
			vBarLeft = $vBar.offset().left, 
			vBarRight = $vBar.offset().left + $vBar.width(),
			vCountLeft = 0,
			vCountRight = 0;

		$vCount.each(function(index){
			vCountLeft = $vCount.eq(index).offset().left;
			vCountRight = vCountLeft + $vCount.eq(index).innerWidth();
			if(vCountLeft<vBarLeft){
				$vCount.eq(index).css({left:0, right:"auto"});
			}
			else if(vCountRight>vBarRight){
				$vCount.eq(index).css({right:0});
			}
		});
	}
	
	
});