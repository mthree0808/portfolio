$(function(){
	// sb gnb
	$('#gnb >ul>li').each(function(index, el) {
		if ($(this).has('ul').length<1) {
			$(this).addClass('nosub')
		}
	});
	var menuover=false; //메뉴가 활성화 되고있는지 파악
	var clearenter
	//gnb 시작
	var bgIndex;
	var gnb_link_depth1=$("#gnb>ul>li");				// 1depth
	var gnb_link_depth2=$("#gnb>ul>li>div>div>ul>li");			// 2depth
	var gnb_link_depth3=$("#gnb>ul>li>div>div>ul>li>ul>li");	// 3depth
	var gnbBg = $(".bg_gnb");

	function menuclear(){
		// console.log(menuover)
		if(!menuover){
			gnb_link_depth1.removeClass("on"); //지워야할 클래스위치
			gnb_link_depth2.removeClass("on"); //지워야할 클래스위치
			gnbBg.hide();
			$('#gnb').removeClass('active')
			$('#gnb').removeClass('on')
		}
	}
	gnb_link_depth1.each(function(){
		$(this).find('>a').on('touchstart', function(event) {
			if ($(this).has('ul').length>0) {
				if ($(window).width()>991) {
					$('#gnb').addClass('on');
					event.preventDefault();
				}
			}
		});
		$(this).on('mouseenter keyup' , function(event) {
			if ($(window).width()>991) {
				event.preventDefault();
				clearTimeout(clearenter)
				menuover=true;
				$('#gnb').addClass('on');
				gnbBg.show();
			}
		});

	});
	$('#gnb').on('mouseleave', function() {
		if ($(window).width()>991) {
			menuover = false;
			clearTimeout(clearenter);
			clearenter = setTimeout(function () {
				menuclear();
			}, 50)
		}
	});
	var gnbDepth1=$('#gnb>ul a')
	gnbDepth1.click(function(event) {
		if ($(window).width()<992) {
			if ($(this).next().has('ul').length>0){
				if ($(this).parent().hasClass('active')) {
					$(this).parent().removeClass('active')
				}else{
					$(this).parent().addClass('active').siblings().removeClass('active')
				}
				event.preventDefault();
			}else{
				if ($(this).next().has('ul').length){
					$(this).parent().toggleClass('on');
					event.preventDefault();
				}
			}
		}
	});
	$('.btn_share, .main_slide .item, .kid_slide .item').on('focus', function(e) {
		//if(!(e.shiftKey && e.keyCode == 9) && e.keyCode == 9 ){
			menuover = false;
			clearTimeout(clearenter);
			clearenter = setTimeout(function () {
				menuclear();
			}, 500)
		//}
	});
	// @@@ sb gnb

	// share
	$('.btn_share').click(function(){
		$('.share_box>ul').toggleClass('active');
		if ( $('.share_box>ul').hasClass('active') ){
			$('.share_box>ul>li:first-child a').focus();
		}
	});
	$('.share_box .btn_x').click(function(){
		$('.share_box>ul').removeClass('active');
		$('.btn_share').focus();
	});

	//lnb
	$('.lnb_list>li>a').click(function(){
		$(this).parent('li').addClass('active').siblings().removeClass('active').find('.lnb_dep2').slideUp(300);

		if ( $(this).parent('li').hasClass('has_dep2') ){
			$(this).siblings('.lnb_dep2').slideDown(300);
		}
	});
	$('.has_dep2').each(function(){
		if( $(this).hasClass('active') ){
			$(this).find('.lnb_dep2').show();
		}
	});
	

	//tab
	$('.tab_list a, .tab_onoff>li>a, .kb_tab_list a').click(function () {
		var tabindex = $(this).parent('li').index(),
				active_txt = $(this).text();
		$(this).attr('title','선택됨').parent('li').addClass('active').siblings().removeClass('active').children('a').attr('title','');
		$(this).parent().parent().siblings('.tab_con_box').children('.tab_con').removeClass('active').eq(tabindex).addClass('active');
		if ( $(window).width() < 991 ){
			$(this).parent().parent().siblings('.btn_select').removeClass('active').text(active_txt).siblings('.tab_list').hide();
		}
		return false;
	});
	// tab mobile
	$('.btn_select').click(function(){
		$(this).toggleClass('active').siblings('.tab_list').slideToggle(300);
	});
	$(window).resize(function(){
		var windowW = window.innerWidth,
				active_txt = $('.tab_wrapA .tab_list .active a').text();
		if (windowW >= 990){
			$('.tab_list').css({'display':''});
		}
		$('.btn_select').text(active_txt);
	});

	// faq
	$('.faq_tit').click(function(){
		$(this).toggleClass('active').siblings('.faq_txt_wrap').slideToggle(300);
		return false;
	});

	// attach
	$(document).on('click','.attach_vinput, .attach_btn', function(){
		$(this).parent().siblings('.attach_input').trigger('click');
	});
	$(document).on('change','.attach_input', function(){
		var attText = $(this).val();
		var attTextIndex = attText.lastIndexOf('\\') + 1;
		attText = attText.slice(attTextIndex);
		$(this).next().find('.attach_vinput').val(attText);
	});

	//paging
	if( $('.paging').length > 0 ){
		$('.paging li').each(function(){
			var text = $(this).children('a').text();

			if( $(this).hasClass('active') ){
				$(this).children('a').attr('title', '현재 페이지');
			}else{
				$(this).children('a').attr('title', text+'페이지로');
			}
		});
	}

	// file icon
	if( $('.board_list>li').length > 0 ){
		$('.board_list .file').each(function(){
			var ac_ell = $(this).children('.hide');
			if( $(this).hasClass('pdf') ){
				ac_ell.text('pdf 파일 있음');
			}else if( $(this).hasClass('hwp') ){
				ac_ell.text('한글 파일 있음');
			}else if( $(this).hasClass('img') ){
				ac_ell.text('이미지 파일 있음');
			}else if( $(this).hasClass('ppt') ){
				ac_ell.text('ppt 파일 있음');
			}else if( $(this).hasClass('xls') ){
				ac_ell.text('엑셀 파일 있음');
			}else{
				ac_ell.text('첨부 파일 있음');
			}
		});
	}

	//btn_onoff
	$('.btn_onoff').click(function(){
		var $btn_onoff = $(this),
				thisLine = $btn_onoff.parents('tr'),
				thisType = $btn_onoff.attr('data-btn');
		thisLine.siblings().removeClass(thisType).find('.btn_onoff[data-btn=' +thisType+ ']').removeClass('active');
		$btn_onoff.toggleClass('active').siblings().removeClass('active');
		if ( $btn_onoff.hasClass('active') ){
			thisLine.removeClass().addClass(thisType);
		}else{
			thisLine.removeClass(thisType);
		}
	});

	//popup
	var layerPopNum = 0,
	$focusOnEle = null;
	$(document).on("click", "[data-popopen]", function(){
	$focusOnEle = $(this);
		scrollDisable();
		layerPopNum = $(this).attr("data-popopen");
		$(".popup_wrap[data-pop='" + layerPopNum + "']").show().focus();
		return false;
	});
	$(document).on("click", ".pop_x, [data-popx]", function(){
	if($(this).parents(".popup_wrap:visible").length == 1)
		scrollAble();
		$(this).parents(".popup_wrap").first().hide();
	if($focusOnEle != null)
		$focusOnEle.focus();
		return false;
	});

	function scrollDisable(){
		$('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
		});
	}
	function scrollAble(){
		$('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
	}

	// map popup
	$('.map_label a[class^=map]').click(function(){
		var ThisData = $(this).attr('data-mapopen');
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active').siblings('.popup_map').hide();
			$('.srch_list a[data-maplist='+ ThisData +']').removeClass('active');
		}else{
			$('.map_label a').removeClass('active').siblings('.popup_map').hide();
			$('.srch_list a').removeClass('active');
			$(this).addClass('active').siblings('.popup_map').show();
			$('.srch_list a[data-maplist='+ ThisData +']').addClass('active');
		}
	});
	$('.map_x').click(function(){
		$(this).parents('.popup_map').hide().siblings('a').removeClass('active');
		$('.srch_list a').removeClass('active');
		var ThisData = $(this).parents('.popup_map').attr('data-map');
		$('.srch_list a[data-maplist='+ ThisData +']').focus();
	});

	$('.srch_list a').click(function(){
		var ThisData = $(this).attr('data-maplist');
		$('.map_label a[data-mapopen='+ ThisData +']').click().focus();
	});

	//slide
	if ( $('.main_slide').length > 0 ){
		$('.main_slide').slick({
			centerPadding: 0,
			arrows: false,
			dots: true,
			appendDots: $('.ms_paging'),
			customPaging: function(slide, i){
				return '<button type="button" class="ms_dot"><span class="hide">' + (i+1) + '번째 배경으로' + '</span></button>'
			},
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
		});
		$('.main_slide').slick("refresh");
	}
	$('.ms_stop').click(function(){
		if ( $(this).hasClass('play') ){
			$(this).removeClass('play').children('.hide').text('자동재생 일시정지');
			$('.main_slide').slick('slickPlay');
		}else{
			$(this).addClass('play').children('.hide').text('자동재생 시작');
			$('.main_slide').slick('slickPause');
		}
	});

	if ( $('.notice_slide').length > 0 ){
		$('.notice_slide').slick({
			slidesToShow: 4,
			swipeToSlide: true,
			prevArrow: $('.ns_prev'),
			nextArrow: $('.ns_next'),
			responsive: [
				{
					breakpoint: 990,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 720,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	qm_slide();
	kid_fav_slide();
	$(window).resize(function(){
		qm_slide();
		kid_fav_slide();
	});

	function qm_slide(){
		var ell = $('.quick_menu>.container');
		if( $(window).width() < 991 ){
			ell.not('.slick-initialized').slick({
				slidesToShow: 1,
				variableWidth: true,
				adaptiveHeight: true,
				swipeToSlide: true,
				arrows: false,
			})
		}else{
			if( ell.hasClass('slick-initialized') ){
				ell.slick('unslick');
			}
		}
	}

	if ( $('.main_kid_slide').length > 0 ){
		$('.main_kid_slide').slick({
			slidesToShow: 5,
			swipeToSlide: true,
			prevArrow: $('.mks_prev'),
			nextArrow: $('.mks_next'),
			responsive: [
				{
					breakpoint: 990,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 720,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});
	}

	if ( $('.kid_slide').length > 0 ){
		var kidSlider = $('.kid_slide');

		var $status = $('.kid_slide_wrap .ks_paging');
		kidSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + '/' + slick.slideCount);
		});

		$('.kid_slide').slick({
			centerPadding: 0,
			dots: false,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 4000,
			prevArrow: $('.ks_prev'),
			nextArrow: $('.ks_next')
		});
		$('.kid_slide').slick("refresh");

		kidSlider.on('afterChange', function(){
			$('.pro_bar').addClass('pro-ani');
		});
		kidSlider.on('beforeChange', function(){
			$('.pro_bar').removeClass('pro-ani');
		});
	}
	$('.ks_stop').click(function(){
		if ( $(this).hasClass('play') ){
			$(this).removeClass('play').children('.hide').text('자동재생 일시정지');
			$('.kid_slide').slick('slickPlay');
			$('.pro_bar').removeClass('pause');
		}else{
			$(this).addClass('play').children('.hide').text('자동재생 시작');
			$('.kid_slide').slick('slickPause');
			$('.pro_bar').addClass('pause');
		}
	});

	if ( $('.kid_ps').length > 0 ){
		$('.kid_ps').slick({
			swipeToSlide: true,
			arrows: false,
			dots: true,
			appendDots: $('.ps_paging'),
			customPaging: function(slide, i){
				return '<button type="button" class="ps_dot"><span class="hide">' + (i+1) + '번째 배경으로' + '</span></button>'
			},
			autoplay: true,
			infinite: true
		});
	}
	$('.ps_stop').click(function(){
		if ( $(this).hasClass('play') ){
			$(this).removeClass('play').children('.hide').text('자동재생 일시정지');
			$('.kid_ps').slick('slickPlay');
		}else{
			$(this).addClass('play').children('.hide').text('자동재생 시작');
			$('.kid_ps').slick('slickPause');
		}
	});

	function kid_fav_slide(){
		var ell = $('.fav_list');
		if( window.innerWidth < 661 ){
			ell.not('.slick-initialized').slick({
				slidesToShow: 1,
				variableWidth: true,
				swipeToSlide: true,
				arrows: false,
				infinite: false,
			})
		}else{
			if( ell.hasClass('slick-initialized') ){
				ell.slick('unslick');
			}
		}
	}

	if( $('.zoom_img').length > 0 ){
		$('.zoom_img').not('.slick-initialized').slick({
			dots: false,
			infinite: true,
			centerPadding : 0,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			asNavFor: '.thumb_img'
		});

		$('.thumb_img').not('.slick-initialized').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerPadding : 0,
			asNavFor: '.zoom_img',
			dots: false,
			focusOnSelect: true,
			prevArrow: $('.ti_prev'),
			nextArrow: $('.ti_next'),
			responsive: [
				{
					breakpoint: 990,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});

		$('.zoom_img, .thumb_img').slick("refresh");
	}

	// list thumbnail
	$('.tab_style>li>a').click(function(){
		var tabindex = $(this).parent('li').index();
		$(this).attr('title','선택됨').parent('li').addClass('active').siblings().removeClass('active').children('a').attr('title','');
		if ( tabindex==1 ){
			$(this).parents('.bd_attr').siblings('.list_board').addClass('thumb');
		}else{
			$(this).parents('.bd_attr').siblings('.list_board').removeClass('thumb');
		}
		return false;
	});

}); //jQuery End
