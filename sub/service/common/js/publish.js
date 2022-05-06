$(function(){
	var width1=window.innerWidth;
	var height1=$(window).height();
	if(width1 > 1180) desktopF();
	else tabletF();
	sub_height();

	//초기화
	$('.lnb ul ol, .form_sel ul, .ranking div ul').hide();// dropDown 초기화 처리

	$(window).resize(function(){
		var windowW = window.innerWidth;
		if (windowW < 1180){
			$('.m_menu_open').css({'height':'auto', 'display':'none'}).stop().animate({'left':'100%'},100); 
		} else {
			$('.m_menu_open').css({'height':'auto', 'display':'block'}).stop().animate({'left':'0'},10);
		}
	});

	//resize event
	$(window).resize(function(){
		width1=window.innerWidth;
		//console.log('resize : '+width1);
		if(width1 > 1180) desktopF();
		else tabletF();
		sub_height();
	});
	function tabletF(){//테블릿 초기화
		//$('.m_menu_open,.m_search_open').css({'height':'auto', 'left':'100%'});//1. 검색창, 2.전체메뉴
		$('.gnb').css('height','auto'); //3. gnb
		$('.gnb ul>li').css('height','48px');
		$('.ranking div ul').css({'display':'block'});//5. ranking 초기화
		$('#header .m_menu_open .gnb ul > li > a').attr("href","javascript:void(0)");
		$('#header .m_menu_open .gnb ul > li > a').removeAttr("onclick","alert('공통 페이지입니다.')");
	}
	function desktopF(){//웹 초기화
		$('.m_menu_open').css({'height':'auto', 'left':'0', 'display':'block'});//2. 전체메뉴
		$('.m_search_open').css({'height':'60px', 'left':'0'});//1. 검색창
		$('.m_search,.gnb ul>li').removeClass('active');
		$('.gnb ul>li').css('height','auto');//3. gnb
		$('.lnb ul ol').hide();//4. lnb 초기화
		$('.ranking div ul').hide();//5. ranking 초기화
		$('#header .m_menu_open .gnb ul > li > a').attr({"href":"sports_board_img.html", "onclick":"alert('공통 페이지입니다.')"});
		$('#header .m_menu_open .gnb ul > li:nth-child(6) > a').attr("href","commu_board.html");
	}

	function sub_height(){
		/* sub_contents */
    var winH = $(window).height(),
				hfH = $('#header').height() + $('#footer').outerHeight() + $('#seoul').outerHeight(),
				conP = parseInt($('#sub_contents').css('padding-top')) + parseInt($('#sub_contents').css('padding-bottom'));
				//console.log(conP, hfH)
    if ( $('#sub_contents').height() < (winH-hfH) ){
      $('#sub_contents').css({'min-height':winH - hfH - conP});
    }
	}

	//top_Banner 
	$('.top_banner .btn_x').click(function(){
		$(this).parent().addClass('off');
	});

	//전체메뉴 보이기
	$('.m_menu').click(function(){
		//검색창 닫아주기
		$('.m_search_open').stop().animate({'left':'100%'},100);
		$('.m_search').removeClass('active');
		var hh=$('#wrapper').height();
		//console.log(hh);
		$('.m_menu_open').css('display','block').stop().animate({'left':'0'},300);
	});
	$('.m_btn_close').click(function(){
		$('.m_menu_open').css({'height':'auto', 'display':'none'}).stop().animate({'left':'100%'},100); //
		$('.m_search_open').stop().animate({'left':'0'},100); //추가
	});

	//검색창 보이기
	$('.m_search').click(function(){
		var tit=$(this).hasClass('active');
		var hh=$('#wrapper').height();
		$('.ranking div ul').css({'display':'block'}); //초기화
		if(tit==true){
			$('.search_top .form_inp').hide();
			$('body, .search_top').removeClass('active');
			$('.search_top_txt').text('검색창 열기');
		}else{
			$('.search_top .form_inp').show();
			$('body, .search_top').addClass('active');
			$('.search_top_txt').text('검색창 닫기')
		}
		$(this).toggleClass('active');
	});

	//검색순위 보이기
	$('.ranking div').hover(function(){
		width1=$(window).width();
		//console.log(width1+"aa");
		if( $(window).width() >= 1180 ) {$(this).find('ul').stop().slideDown(200);}
	},function(){
		if( $(window).width() >= 1180 ) $(this).find('ul').stop().slideUp(200);
	});
	//접근성
	$('.ranking>div').focusin(function(){
		$(this).mouseenter();
	});
	$('.ranking ul li:last-child a').focusout(function(){
		$('.ranking>div').mouseleave();
	});
	//language 접근성
	$('.language h3').focusin(function(){
		$('.language').addClass('active');
	});
	$('.language ul>li:last-child').focusout(function(){
		$('.language').removeClass('active');
	});

	//gnb 보이기
	$('.gnb ul>li').hover(function(){
		width1=$(window).width();
		if(width1>1180){
			$('.gnb').addClass('active');
			var hh=$(this).find('div').height();
			//console.log(hh);
			$('.gnb').stop().animate({'height':(hh+60)+'px'},200);
		}
	},function(){
		if(width1>=1180){
			$('.gnb').removeClass('active');
			$('.gnb').stop().animate({'height':'60px'},200);
		}
	});
	//접근성
	$('.gnb ul>li>a').focusin(function(){
		$(this).parent('li').addClass('active').mouseenter();
	});
	$('.gnb ul>li:last-child ol>li:last-child>a').focusout(function(){
		$('.gnb ul>li').removeClass('active').mouseleave();
	});

	$('.gnb ul>li').click(function(){
		width1=$(window).width();
		if(width1<1180){
			$(this).addClass('active');
			var hh=$(this).find('div').height();	//console.log(hh);
			$(this).addClass('active').stop().animate({'height' : (hh+48)+'px'},200)
				.siblings().stop().animate({'height' : '48px'},200);
			$(this).siblings().removeClass('active');
		}
	});

	//lnb 보이기
	$('.lnb ul>li').mouseenter(function(){
		if( $(window).width() >= 1180 ){
			$(this).addClass('active').find('ol').stop().slideDown(200);
		}
	}).mouseleave(function(){
		if( $(window).width() >= 1180 ){
			$(this).removeClass('active').find('ol').stop().slideUp(100);
		}
	});
	//웹접근성 포커스 이동
	$('.lnb ol>li:last-child>a').focusout(function(){
		$(this).parent('li').mouseleave();
	});
	$('.lnb ul>li>a').focusin(function(){
		$(this).parent('li').mouseenter();
	});
	//tablet
	$('.lnb ul>li').click(function(){
		var tt=$(this).hasClass('active');
		console.log(tt);
		if( $(window).width() < 1180 && tt==false){
			$(this).toggleClass('active').find('ol').stop().slideDown(200)
				.parent().siblings().removeClass('active').find('ol').stop().slideUp(100);
		}else $(this).removeClass('active').find('ol').stop().slideUp(100)
	});
	$('.lnb ul ol li').click(function(){
		event.stopPropagation();
		$(this).parent().prev('a').text($(this).find('a').text());
		$(this).parents('li').removeClass('active');
		$(this).parent('ol').slideUp(100);
	});

	//Form select checked 이벤트
	// $('.form_sel h4').click(function(){
	// 	$('.form_sel').toggleClass('active');
	// 	$(this).next('ul').stop().slideDown(200);

	// 	if( !$('.form_sel').hasClass('active') ){
	// 		$(this).next('ul').stop().slideUp(200);
	// 	}
	// });
	// $('.form_sel ul li').click(function(){
	// 	$('.form_sel').toggleClass('active');
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	var num=$(this).index();
	// 	//console.log(num);
	// 	$('.form_sel h4').text($(this).text()).next('ul').stop().slideUp(200);
	// 	$('.form_sel select option').eq(num).attr('checked','checked')
	// 		.siblings().removeAttr('checked');
	// });

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

	// faq
	$('.faq_tit').click(function(){
		$(this).parents('li').toggleClass('active').find('.faq_txt_wrap').slideToggle(300);
		return false;
	});

	//font size
	var font_i = 3,
			font_con_box = $('#contents');
	$('.font_up').click(function(){
		if ( font_i < 5 ){
			font_i++;
			font_con_box.removeClass().addClass('fz'+font_i);
		}
		return false;
	});
	$('.font_down').click(function(){
		if ( font_i > 1 ){
			font_i--;
			font_con_box.removeClass().addClass('fz'+font_i);
		}
		return false;
	});
	$('.font_default').click(function(){
		font_con_box.removeClass().addClass('fz3');
		font_i = 3;
		return false;
	});

	//상세검색
	$('.search_field .btn_plus').click(function(){
		var sch_box = $('.search_field');
		$(this).toggleClass('active');
		sch_box.toggleClass('open');

		if ( sch_box.hasClass('open') ){
			$(sch_box).find('.form_plus').fadeIn(300);
		}else{
			$(sch_box).find('.form_plus').fadeOut(300);
		}
	});

	$('.form_each .chk_plus').click(function(){
		$(this).parents('.plus_box').toggleClass('active');
	});

	//table mobile
	$('.tbl_mob tr').each(function(){
		var arr = new Array();
		var td=$(this).children('td');

		$(td).each(function(i){
			var th = $(this).parents('.tbl_mob').find('th').eq(i).text();
			arr.push(td.eq(i).children('.m_th').text(th));
		});
	});

	// 체육시설 카테고리
	/* $cate_slider = $('.cate_list');
  settings_slider = {
    dots: false,
		arrows: false,
		variableWidth: true,
		rows: 2,
		infinite: false,
		swipeToSlide: true,
  }
  slick_on_mobile( $cate_slider, settings_slider); */

  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 900) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
	};
	
	//상세검색 접근성
	$('.form_plus .common_btn:last-of-type').focusout(function(){
		$('.btn_plus').focus();
	});

	//popup
	var layerPopNum = 0,
	$focusOnEle = null;
	$(document).on("click", "[data-popopen]", function(){
	$focusOnEle = $(this);
		scrollDisable();
		layerPopNum = $(this).attr("data-popopen");
		$(".pop_wrap[data-pop='" + layerPopNum + "']").fadeIn(300).focus();
		return false;
	});
	$(document).on("click", ".pop_x, [data-popx]", function(){
	if($(this).parents(".pop_wrap:visible").length == 1)
		scrollAble();
		$(this).parents(".pop_wrap").first().fadeOut(300);
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

	//달력
	$('.tbl_cal td a').click(function(){
		$('.tbl_cal td a').removeClass('on').attr('title','');
		$(this).addClass('on').attr('title','선택됨');
		return false;
	});

	// attach
	$(document).on('click','.attach_vinput, .attach_btn', function(){
		$(this).parents('.attach_box').find('.attach_input').trigger('click');
	});
	$(document).on('change','.attach_input', function(){
		var attText = $(this).val();
		var attTextIndex = attText.lastIndexOf('\\') + 1;
		attText = attText.slice(attTextIndex);
		$(this).next().find('.attach_vinput').val(attText);
	});
	
	// 예약 스크롤링
	if ( $('.book_box').length > 0 ){
		$(window).load(function(){
			var scrollItem = $(".book_box .right_box"),
			oldPosition = parseInt(scrollItem.offset().top),
			maxHeight = parseInt($('.book_box .left_box').outerHeight()),
			itemHeight = parseInt(scrollItem.outerHeight());

			$(window).scroll(function() { 
				var position = $(window).scrollTop(),
						maxPosition = parseInt($(document).outerHeight() - $('body').outerHeight());
				
				if (position < 646 && position < maxPosition-210){
					scrollItem.stop().animate({"top": 0},500);
				}else if(position >= maxPosition-210){
					scrollItem.stop().animate({"top":maxHeight-itemHeight-15},500); 
				}else{
					scrollItem.stop().animate({"top":position-oldPosition+20+"px"},500); 
				}
			});
		});
	}
	
	//예약취소 호버
	$('.btn_book_x').on('mouseenter focusin', function(){
		$(this).siblings('.hover_box').stop().fadeIn(300);
	}).on('mouseleave focusout', function(){
		$(this).siblings('.hover_box').stop().fadeOut(300);
	});

	$('.m_info_toggle').click(function(){
		$(this, '.info_tit_box').toggleClass('active');

		if( $(this).hasClass('active') ){
			$(this).siblings('.m_info_box').find('.book_info').slideUp(300);
		}else{
			$(this).siblings('.m_info_box').find('.book_info').slideDown(300);
		}
	});

	//공유하기
	if(width1 > 1180){
		$('.share_box').hover(function(){
			$(this).find('.btn_share_toggle').toggleClass('active');
			$(this).find('.share_list').stop().fadeToggle(300);
	
			if ( $('.btn_share_toggle').hasClass('active') ){
				$('.btn_share_toggle').find('.hide').text('공유하기 닫기');
			}else{
				$('.btn_share_toggle').find('.hide').text('공유하기 열기');
			}
		});
		$('.btn_share_toggle').focusin(function(){
			$(this).addClass('active').siblings().fadeIn(300);
		});
		$('.btn_share:last-child').focusout(function(){
			$(this).parent('.share_list').fadeOut(300);
			$('.btn_share_toggle').removeClass('active').find('.hide').text('공유하기 열기');
		});
	}else{
		$('.btn_share_toggle').click(function(){
			if ( $('.btn_share_toggle').hasClass('active') ){
				$(this).removeClass('active');
				$(this).siblings('.share_list').stop().fadeOut(300);
			}else{
				$(this).addClass('active');
				$(this).siblings('.share_list').stop().fadeIn(300);
			}
		});
	}
	

	//공지사항 슬라이드
	$('button[data-popopen="pop_board"]').click(function(){
		if ( $('.board_slide').length > 0 ){
			$('.board_slide').not('.slick-initialized').slick({
				infinite: false,
				centerPadding: 0,
				slidesToShow: 1,
				prevArrow: $('.bs_prev'),
				nextArrow: $('.bs_next')
			});
			$('.board_slide').resize().slick("refresh");
		}
	});
	
	$('.board_slide').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.bs_paging').html('<span class="p_current">'+ i +'</span>' + '/ ' + slick.slideCount);
	});

	//tab
	$('.tab_listA>li>a, .tab_listB>li>a, .service_list>li>a').click(function () {
		var tabindex = $(this).parent('li').index();
		$(this).attr('title','선택됨').parent('li').addClass('active').siblings().removeClass('active').children('a').attr('title','');
		$(this).parent().parent().siblings('.tab_con_box').children('.tab_con').removeClass('active').eq(tabindex).addClass('active');
		return false;
	});

	$(function () {
		$(".tab_idx.over > li").each(function () {
		}).mouseenter(function () {
			var n = $(this).index();
			$(this).parents(".wrap_idx").find(".con_idx .idx").removeClass("on");
			$(this).parents(".wrap_idx").find(".con_idx .idx:eq(" + n + ")").addClass("on");
			$(this).parents(".wrap_idx").find(".tab_idx > li").removeClass("on").attr('title', '');
			$(this).addClass("on").attr('title', '선택됨');
		});
		$(".tab_idx.click > li").each(function () {
		}).click(function () {
			var n = $(this).index();
			$(this).parents(".wrap_idx").find(".con_idx .idx").removeClass("on");
			$(this).parents(".wrap_idx").find(".con_idx .idx:eq(" + n + ")").addClass("on")
			$(this).parents(".wrap_idx").find(".tab_idx > li").removeClass("on").attr('title', '');
			$(this).addClass("on").attr('title', '선택됨');

			var val = $('[name=loc_now]').val();

			if(val != ''){
				$(this).parents(".wrap_idx").find(".con_idx .idx .sch_loc option[value2="+val+"]").prop('selected',true);
				var temp = $(this).parents(".wrap_idx").find(".con_idx .idx:eq(" + n + ") .sch_loc").val().split("|");

				fnLocaleList(temp[1],temp[0]);
			}

		});
	});

	//최근 본 서비스 슬라이드
	if ( $('.img_slide').length > 0 ){
		$('.img_slide').not('.slick-initialized').slick({
			infinite: false,
			centerPadding: 0,
			slidesToShow: 2,
			slidesToScroll: 2,
			prevArrow: $('.img_attr .is_prev'),
			nextArrow: $('.img_attr .is_next')
		});
		$('.img_slide').resize().slick("refresh");
		$('.img_slide').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = Math.round(((currentSlide ? currentSlide : 0) + 1)/2),
					Max = Math.round(slick.slideCount/2);
			$('.img_attr .is_paging').html('<span class="p_current">'+ i +'</span>' + '/ ' + Max);
		});
	}
	if ( $('.img_slide2').length > 0 ){
		$('.img_slide2').not('.slick-initialized').slick({
			infinite: false,
			centerPadding: 0,
			slidesToShow: 2,
			slidesToScroll: 2,
			prevArrow: $('.img_attr2 .is_prev'),
			nextArrow: $('.img_attr2 .is_next')
		});
		$('.img_slide2').resize().slick("refresh");
		$('.img_slide2').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = Math.round(((currentSlide ? currentSlide : 0) + 1)/2),
					Max = Math.round(slick.slideCount/2);
			$('.img_attr2 .is_paging').html('<span class="p_current">'+ i +'</span>' + '/ ' + Max);
		});
	}

	//별 점수
	$('button.star').click(function(){
		$(this).siblings('.star').removeClass('on');
		$(this).addClass('on').prevAll('.star').addClass('on');

		var index = $(this).index() + 1;
		$(this).siblings('.hide').text('별점 '+index+'점');
	});

	//인기검색어
	$('.word_toggle').click(function(){
		$(this).toggleClass('active').parent().siblings('ul').slideToggle(300);

		if( $(this).hasClass('active') ){
			$(this).text('열기');
		}else{
			$(this).text('접기');
		}
	});

	//관심정보설정
	$('.btn_int').click(function(){
		$(this).toggleClass('active');

		if ( $(this).hasClass('active') ){
			$(this).attr('title','선택됨');
		}else{
			$(this).attr('title','');
		}
	});

	$('.btn_int.all').click(function(){
		$(this).parent().siblings().find('.btn_int').addClass('active').attr('title','선택됨');

		if ( !$(this).hasClass('active') ){
			$(this).parent().siblings().find('.btn_int').removeClass('active').attr('title','');
		}
	});

	$('.btn_map_all').click(function(){
		$(this).toggleClass('active');

		if( $(this).hasClass('active') ){
			$('.map_list>li').addClass('active');
			$('.img_map area').attr('title','선택됨');
		}else{
			$('.map_list>li').removeClass('active');
			$('.img_map area').attr('title','');
		}
	});

	$('.int_each .img_map area').click(function(){
		var thisIndex = $(this).index();
		$(this).toggleClass('active');
		if( $(this).hasClass('active') ){
			$(this).attr('title','선택됨');
		}else{
			$(this).attr('title','')
		}
		$('.map_list li').eq(thisIndex).toggleClass('active');
		return false;
	});

	$('.int_each .map_list>li').click(function(){
		$(this).toggleClass('active');
	});

	//main map
	$('.step_con .img_map area').click(function(){
		var thisIndex = $(this).index();
		$(this).toggleClass('active').siblings().removeClass('active');
		if( $(this).hasClass('active') ){
			$(this).attr('title','선택됨');
		}else{
			$(this).attr('title','')
		}
		$(this).parents('.img_map_box').find('.map_list li').eq(thisIndex).toggleClass('active').siblings().removeClass('active');
		return false;
	});

	$('.step_con .map_list>li').click(function(){
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	// 리스트형 게시판
	/* $('.cate_list .item').not('.disable').click(function(){
		$(this).toggleClass('active');

		if( $(this).hasClass('active') ){
			$(this).attr('title','선택됨');
		}else{
			$(this).attr('title','');
		}

		return false;
	}); */

	/* $('.cate_list .item.all').click(function(){
		$('.cate_list .item').not(this).not('.disable').addClass('active').attr('title','선택됨');

		if ( !$(this).hasClass('active') ){
			$('.cate_list .item').not(this).removeClass('active').attr('title','');
		}
	}); */

	//main
	function svc_bn(){
		if ( $('.svc_bn').length > 0 ){
			$('.tab_con.active .svc_bn').not('.slick-initialized').slick({
				infinite: true,
				dots: true,
				appendDots: $('.tab_con.active  .svc_paging'),
				centerPadding: 0,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
				prevArrow: $('.tab_con.active  .svc_prev'),
				nextArrow: $('.tab_con.active  .svc_next')
			});
			$('.tab_con.active .svc_bn').slick("refresh");
			$('.tab_con.active .svc_bn').slick("slickPlay");

			$('.tab_con.active .svc_stop').click(function(){
				if ( $(this).hasClass('play') ){
					$(this).removeClass('play').children('.hide').text('자동재생 일시정지');
					$('.tab_con.active  .svc_bn').slick('slickPlay');
				}else{
					$(this).addClass('play').children('.hide').text('자동재생 시작');
					$('.tab_con.active  .svc_bn').slick('slickPause');
				}
			});
		}
	}

	if ( $('.faq_bn').length > 0 ){
		$('.faq_bn').not('.slick-initialized').slick({
			infinite: true,
			centerPadding: 0,
			slidesToShow: 1,
			prevArrow: $('.faq_prev'),
			nextArrow: $('.faq_next')
		});
		$('.faq_bn').slick("refresh");

		$('.faq_bn').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = Math.round(((currentSlide ? currentSlide : 0) + 1)),
					Max = Math.round(slick.slideCount);
			$('.faq_paging').html('<span class="p_current">'+ i +'</span>' + ' / ' + Max);
		});
	}

	if ( $('.pop_bn').length > 0 ){
		$('.pop_bn').not('.slick-initialized').slick({
			infinite: true,
			centerPadding: 0,
			slidesToShow: 1,
			autoplay: true,
			prevArrow: $('.pop_prev'),
			nextArrow: $('.pop_next')
		});
		$('.pop_bn').slick("refresh");

		$('.pop_stop').click(function(){
			if ( $(this).hasClass('play') ){
				$(this).removeClass('play').children('.hide').text('자동재생 일시정지');
				$('.pop_bn').slick('slickPlay');
			}else{
				$(this).addClass('play').children('.hide').text('자동재생 시작');
				$('.pop_bn').slick('slickPause');
			}
		});

		$('.pop_bn').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = Math.round(((currentSlide ? currentSlide : 0) + 1)),
					Max = Math.round(slick.slideCount);
			$('.pop_paging').html('<span class="p_current">'+ i +'</span>' + ' / ' + Max);
		});
	}

	//main service tab
	svc_bn();
	$('.svc_tab_list>li>a').click(function () {
		var tabindex = $(this).parent('li').index();
		$(this).attr('title','선택됨').parent('li').addClass('active').siblings().removeClass('active').children('a').attr('title','');
		$(this).parent().parent().parent().siblings('.tab_con_box').children('.tab_con').removeClass('active').eq(tabindex).addClass('active');

		svc_bn();
		return false;
	});

	//main_step_list
	$('.step_con_box.active .step_con').show();
	$('.main_step_list .tit_box').click(function(e){
		e.preventDefault();
		var con_box =  $(this).parent('.step_con_box');
		
		con_box.toggleClass('active').parent('li').siblings().find('.step_con_box').removeClass('active').find('.step_con').stop().slideUp(300);

		if( con_box.hasClass('active') ){
			$(this).siblings('.step_con').stop().slideDown(300); 
		}else{
			$(this).siblings('.step_con').stop().slideUp(300);
		}

		main_bg();
		return false;
	});

	// 빠른예약서비스 버튼 클릭시 컨텐츠 교체
	$('.quick_reserv a').on('click',function(){
		$('.main_step').hide();
		$('.main_step.step2').show();
	});
	$('.main_step.step2 .btn-close').on('click',function(){
		$('.main_step').show();
		$('.main_step.step2').hide();
		$('.main_step.type5').removeClass('place');
		$('.main_step.type5').removeClass('plan');
		$('.main_step.type5').removeClass('service');
	});
	$(document).on('keydown',function(){
		if($('.pop_wrap').is(":visible") && !($('.pop_wrap .con_box').find(":focus").length > 0)){
			console.log($('.pop_wrap .con_box').find(":focus").length);
			$('.pop_wrap .pop_x').eq(0).focus();
		}
	});

	$('.main_tab_list>li>a').click(function(){
		var tabindex = $(this).parent('li').index();
		$(this).attr('title','선택됨').parent('li').addClass('active').siblings().removeClass('active').children('a').attr('title','');
		$(this).parent().parent().siblings('.tab_con_box').children('.tab_con').removeClass('active').eq(tabindex).addClass('active');

		main_bg();
		return false;
	});

	function main_bg(){
		if( $('.active .step_con_box.service').hasClass('active') ){
			$('.main_step').addClass('service');
		}else{
			$('.main_step').removeClass('service');
		}
		if( $('.active .step_con_box.place').hasClass('active') ){
			$('.main_step').addClass('place');
		}else{
			$('.main_step').removeClass('place');
		}
		if( $('.active .step_con_box.plan').hasClass('active') ){
			$('.main_step').addClass('plan');
		}else{
			$('.main_step').removeClass('plan');
		}
	}

}); //jQuery End