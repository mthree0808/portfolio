$(function(){
	/***** 반응형 초기화 작업 *****/

	/* 반응형 세팅을 위한 변수값 세팅 */
	var winW = window.outerWidth;
	var winW2 = window.innerWidth;
	var winH = window.outerHeight;
	var scPos = $(window).scrollTop();

	// 웹, 모바일 리사이즈 이벤트
	$(window).resize(function() {
		winW = window.outerWidth;

		if(winW > 1120) {
			$('.lnb ol').css('height', 'auto');
		}
		$('.lnb > div > div').removeClass('active').find('ol').stop().slideUp(200).css('height', 'auto');
	});

	
	/* lnb */
	/*
	$('.lnb > div > div').hover(function(){
		winW = window.outerWidth;

		if (winW > 1120) {
			$(this).addClass('active').find('ol').stop().slideDown(200).parent().siblings().removeClass('active').find('ol').stop().slideUp(200);
			$('.srh_open').removeClass('active').next().stop().slideUp(200);
			$('.srh_box').removeClass('active');
		}
	}, function(){
		if (winW > 1120) {
			$(this).removeClass('active').find('ol').stop().slideUp(200);
		}
	});*/

	$('.lnb > div > div > a').click(function(){
		winW = window.outerWidth;
		var lnbAct = $(this).parent().hasClass('active');
		var lnbH = $(this).outerHeight();

		if (lnbAct !== true) {
			$(this).next().stop().slideToggle(200).parent().addClass('active').siblings().removeClass('active').find('ol').stop().slideUp(200);
			$('.srh_open').removeClass('active').next().stop().slideUp(200);
			$('.srh_box').removeClass('active');
		} else {
			$(this).next().stop().slideUp(200).parent().removeClass('active');
		}

		if (winW < 801) {
			if (lnbH > 45) $('.lnb .container > div ol').css('top', '64px');
			else $('.lnb .container > div ol').css('top', '46px');
		}
	});

	$('.lnb ol > li > a').click(function(){
		$(this).parents('ol').slideUp(200).parent().removeClass("active");
	});


	/* file_box 파일 업로드 */
	$('.file_box .input em').click(function(){
        $(this).siblings('input').click();
	});

	$('.file_box button').click(function(){
        $(this).prev().children('input').click();
	});


	/* 라디오 체크 여부 확인 */
	$('.radio label').click(function(){
		var chk = $(this).prev().is(":checked");

		if(chk === false) {	
			$(this).prev().attr("checked", "checked").parent().addClass('checked').siblings().removeClass('checked');
			$(this).prev().prop("checked", false);
		} else $(this).prev().prop("checked", true);
	});
	
	/* 체크박스 체크 여부 확인 */
	$('.checkbox label').click(function(){
		var chk = $(this).prev().is(":checked");
		var chk2 = $(this).parent().hasClass("checked");
		if(chk2 === false) {	
			$(this).parent().addClass('checked');
			$(this).prev().prop("checked", false);
		} else {
			$(this).parent().removeClass('checked');
			$(this).prev().prop("checked", true);
		}
	});


	/* 탭메뉴 */
	$('.tabA > ul > li > a').click(function(){
		var tabIndex = $(this).parent().index();

		$(this).attr('title','선택됨').parent().addClass('active').siblings().removeClass('active').find('a').attr('title','');
		$(this).parent().parent().next().children().eq(tabIndex).addClass('active').siblings().removeClass('active');
	});


	/* 설립현황 지도 */
	$('.map_box map > area').click(function(){
		var imgIndex = $(this).index();
		var imgSrc = $('.img_map').attr('src');

		$('.img_map').attr('src', '../common/images/sub/map_' + imgIndex + '.jpg');
	});

		/* backup
		$(this).addClass('active').siblings().removeClass('active');
		if( $(this).hasClass('active') ){
			$(this).attr('title','선택됨');
		}else{
			$(this).attr('title','')
		}
		$(this).parents('.img_map_box').find('.map_list li').eq(thisIndex).toggleClass('active').siblings().removeClass('active');
		return false;*/
});


// 파일 업로드 경로 표시
function changeValue(obj){
	// console.log(obj.files[0].name);
	$(obj).siblings('em').html(obj.files[0].name);
}