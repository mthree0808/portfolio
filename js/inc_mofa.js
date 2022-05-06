// JavaScript Document

//<![CDATA[

//스크롤
$(window).scroll(function() {
	//외교부
	var wst = $(window).scrollTop();
	var svH = $('.svisual').outerHeight();
	var ovH = $('.ov_area').outerHeight();
	var maH = $('.main_area').outerHeight();
	var topH = svH + ovH - 400
	var sec1 = topH + maH
	var sec2 = sec1 + $('.section1').outerHeight();
	var sec2_nt = sec2 + $('.mofa .section2 .map').outerHeight() + 300
	var sec2_eu = sec2_nt + $('.mofa .mock_list > li:nth-child(1)').outerHeight()
	var sec3 = sec2_nt + $('.mofa .section2').outerHeight() - 400
	var sec4 = sec3 + $('.mofa .section3').outerHeight() - 200
	var info = sec4 + $('.mofa .section4').outerHeight() - 200	
	var common = info + 500

	//공통
	if(wst > svH){
		$('.svisual > a').addClass('active');
	}
	else{
		$('.svisual > a').removeClass('active');
	}
	//최상단
	if(wst > topH){
		$('.main_area').removeClass('fadeOut');
		$('.main_area').addClass('fadeIn');
	}
	else{
		$('.main_area').removeClass('fadeIn');
		$('.main_area').addClass('fadeOut');
	}
	//인트로
	if(wst > sec1){
		$('.mofa .section1 .sub_tit').removeClass('fadeOut_t');
		$('.mofa .section1 .sub_tit').addClass('fadeIn_t');
		$('.mofa .section1 .mock_list').removeClass('fadeOut');
		$('.mofa .section1 .mock_list').addClass('fadeIn');
	}
	else{
		$('.mofa .section1 .sub_tit').removeClass('fadeIn_t');
		$('.mofa .section1 .sub_tit').addClass('fadeOut_t');
		$('.mofa .section1 .mock_list').removeClass('fadeIn');
		$('.mofa .section1 .mock_list').addClass('fadeOut');
	}
	//지도
	if(wst > sec2){
		$('.mofa .section2 .map').removeClass('fadeOut');
		$('.mofa .section2 .map').addClass('fadeIn');
	}
	else{
		$('.mofa .section2 .map').removeClass('fadeIn');
		$('.mofa .section2 .map').addClass('fadeOut');
	}
	//국가/지역검색
	if(wst > sec2_nt){
		$('.mofa .section2 .mock_list > li:nth-child(1)').removeClass('fadeOut');
		$('.mofa .section2 .mock_list > li:nth-child(1)').addClass('fadeIn');
	}
	else{
		$('.mofa .section2 .mock_list > li:nth-child(1)').removeClass('fadeIn');
		$('.mofa .section2 .mock_list > li:nth-child(1)').addClass('fadeOut');
	}
	//국가/지역검색
	if(wst > sec2_eu){
		$('.mofa .section2 .mock_list > li:nth-child(2)').removeClass('fadeOut');
		$('.mofa .section2 .mock_list > li:nth-child(2)').addClass('fadeIn');
	}
	else{
		$('.mofa .section2 .mock_list > li:nth-child(2)').removeClass('fadeIn');
		$('.mofa .section2 .mock_list > li:nth-child(2)').addClass('fadeOut');
	}
	//서브 페이지
	if(wst > sec3){
		$('.mofa .section3 .sub_tit').removeClass('fadeOut_t');
		$('.mofa .section3 .sub_tit').addClass('fadeIn_t');
		$('.mofa .section3 .mock_list').removeClass('fadeOut');
		$('.mofa .section3 .mock_list').addClass('fadeIn');
	}
	else{
		$('.mofa .section3 .sub_tit').removeClass('fadeIn_t');
		$('.mofa .section3 .sub_tit').addClass('fadeOut_t');
		$('.mofa .section3 .mock_list').removeClass('fadeIn');
		$('.mofa .section3 .mock_list').addClass('fadeOut');
	}
	//모바일 디자인
	if(wst > sec4){
		$('.mofa .section4').removeClass('fadeOut');
		$('.mofa .section4').addClass('fadeIn');
		$('.mofa .section4 .sub_tit').removeClass('fadeOut_t');
		$('.mofa .section4 .sub_tit').addClass('fadeIn_t');
	}
	else{
		$('.mofa .section4').removeClass('fadeIn');
		$('.mofa .section4').addClass('fadeOut');
		$('.mofa .section4 .sub_tit').removeClass('fadeIn_t');
		$('.mofa .section4 .sub_tit').addClass('fadeOut_t');
	}
	//정보
	if(wst > info){
		$('.mofa .info').removeClass('fadeOut');
		$('.mofa .info').addClass('fadeIn');
	}
	else{
		$('.mofa .info').removeClass('fadeIn');
		$('.mofa .info').addClass('fadeOut');
	}
	//공통
	if(wst > common){
		$('.mofa .common').removeClass('fadeOut');
		$('.mofa .common').addClass('fadeIn');
	}
	else{
		$('.mofa .common').removeClass('fadeIn');
		$('.mofa .common').addClass('fadeOut');
	}
});
		 
//]]>