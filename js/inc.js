// JavaScript Document

//<![CDATA[

//로딩
$(window).load(function(){
	//$('.main_area').addClass('fadeOut');
	$('body').animate({opacity:1}, 1000);
	bodyBg();
})

//탭
$(function(){
	$('.tab_idx.over > li').each(function (i) {
		$(this).attr('idx', i);
		}).mouseenter(function () {
		var n = $(this).attr('idx');
		$(this).parents('.wrap_idx').find.hide();
		$(this).parents('.wrap_idx').find('.con_idx .idx:eq('+n+')').show();
		$(this).parents('.wrap_idx').find('.tab_idx > li').removeClass('on');
		$(this).addClass('on');
	});
	$('.tab_idx.click > li').each(function (i) {
		$(this).attr('idx', i);
		}).click(function () {
		var n = $(this).attr('idx');
		$(this).parents('.wrap_idx').find('.con_idx .idx').removeClass('on');
		$(this).parents('.wrap_idx').find('.con_idx .idx:eq('+n+')').addClass('on');
		$(this).parents('.wrap_idx').find('.tab_idx > li').removeClass('on');
		$(this).addClass('on');
	});
});

//스크롤
$(window).scroll(function() {
	var wst = $(window).scrollTop();
	var svH = $('.svisual').outerHeight();
	if(wst > svH){
		$('.svisual > a').addClass('active');
	}
	else{
		$('.svisual > a').removeClass('active');
	}
});
		 
//]]>