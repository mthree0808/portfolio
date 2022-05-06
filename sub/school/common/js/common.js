$(function () {
    /********** common **********/

    // 하이퍼 링크 새로고침 막기
    $('a[href="#"]').click(function (e) {
        return false;
    });


    /***** 반응형 초기화 작업 *****/

    /* 반응형 세팅을 위한 변수값 세팅 */
    var winW = window.outerWidth;
    var winH = window.outerHeight;
    var scPos = $(window).scrollTop();
    var $header = $('#header');

    // 웹, 모바일 리사이즈 이벤트
    $(window).on('load resize orientationchange', function() {
        winW = window.outerWidth;

        if (winW < 1121) {
            $('#gnb, .head_dim').removeClass('active');
            $('.dep2_box, .dep2_list').removeAttr('style');
        } else {
            $('.dep2_box, .dep2_list').css('height', 'auto');
            
        }
        $('#gnb ul > li').removeClass('active');
        $('body').css({'overflow-y': 'auto'}, {'overflow-x': 'hidden'});

        var popAct = $('.popup').hasClass('active');
        console.log(popAct);
        if (popAct === true) $('body').css({'overflow-y': 'hidden'});
        else $('body').css({'overflow-y': 'auto'});
        
    });
    /* backup
    $(window).resize(function () {
        winW = window.outerWidth;

        if (winW < 1121) {
            $('#gnb').removeClass('active');
            $('.dep2_box, .dep2_list').removeAttr('style');
        } else {
            $('.dep2_box, .dep2_list').css('height', 'auto');
        }
        // $('#gnb ul > li').removeClass('active').find('ol').stop().slideUp();
        $('body').css({'overflow-y': 'auto'}, {'overflow-x': 'hidden'});
    });*/


    /********** pc **********/
    var speed = 150;
    var $gnb = $('#gnb ul');
    var $gnb2 = $('#gnb ul > li');
    var gnbAni = false;
    var headH = 91;
    var gnbH = 0;

    $('#gnb ul > li').mouseenter(function(){
        winW = window.outerWidth;

        if(winW > 1120) {
            $('#gnb .dep2_box').each(function(){
                var pc_menu = $(this).innerHeight();
                if (gnbH < pc_menu) gnbH = pc_menu;
            });

            $('#header').css('overflow', 'visible').stop().animate({'height': (gnbH + 90)}, 200);
            $(this).children('div').addClass("active").parent().siblings().children('div').removeClass("active");
            $('.srh_open').removeClass('active').next().stop().slideUp(200);
            $('.srh_box').removeClass('active');
            $('.lnb ol').slideUp(200).parent().removeClass("active");
            $('#gnb > div > a').css('display','block');
            $('.head_dim').addClass("active");
        }
    });

    $('#gnb ul > li').mouseleave(function(){
        winW = window.outerWidth;

        if(winW > 1120 && !($('#gnb > div > a').is(':hover'))) {
            $('#header').css('overflow', 'hidden').stop().animate({'height': '90px'}, 200);
            $(this).children('div').removeClass("active");
            $('.head_dim').removeClass("active");
            $('#gnb > div > a').css('display','none');
        }
    });
    
    $('#gnb > div > a').mouseleave(function(){
        winW = window.outerWidth;

        if(winW > 1120) {
            $('#header').css('overflow', 'hidden').stop().animate({'height': '90px'}, 200);
            $(this).children('div').removeClass("active");
            $('.head_dim').removeClass("active");
            $('#gnb > div > a').css('display','none');
        }
    });

    /* gnb 백업
    $(window).on('load resize orientationchange', function() {

        
        if ($(window).width() > 1120) {
            $('#gnb > div ul > li > div').css('height', 'auto');
            $('#gnb ul >li >a').on('mouseenter focusin', function () {
                $('#gnb ul >li,.dep2_box').removeClass('active');
                if (!gnbAni) {
                    var subH = $(this).siblings('div').find('ol').outerHeight();
                    // console.log(subH);
                    $('.srh_open').removeClass('active').next().stop().slideUp(200);
                    $('.srh_box').removeClass('active');
                    $('#gnb > div > a').css('display', 'block');
                    $('#gnb > div ul > li > div').css('height', 'auto');
                    $('.lnb ol').slideUp(200).parent().removeClass("active");
                    $('#gnb > div ul > li > div').css('border-top', '1px solid #dedede');
                    /*if($('.srh_open').hasClass('active')){
                        $('.srh_open').removeClass('active').next().stop().slideUp(200);
                        $('body').css('overflow', 'visible');
                        $('#header').css('overflow','hidden');
                        $('.srh_box').removeClass('active');
                    }*//*
                    $(this).parent('li').addClass('active').children('.dep2_box').addClass('active');
                    $header
                        .addClass('active')
                        .stop()
                        .animate(
                            {
                                height: subH + headH,
                            },
                            speed
                        );
                    $(this).parents('#gnb').children('div').children('a').addClass('active');
                } else {
                    var subH = $(this).siblings('div').find('ol').outerHeight();
                    if($('.srh_open').hasClass('active')){
                        $('.srh_open').removeClass('active').next().stop().slideUp(200);
                        $('body').css('overflow', 'visible');
                        // $('#header').css('overflow','hidden');
                        $('.srh_box').removeClass('active');
                    }
                    $(this).parent('li').addClass('active').children('.dep2_box').addClass('active');
                    $header
                        .addClass('active')
                        .stop()
                        .animate(
                            {
                                height: subH + headH,
                            },
                            speed
                        );
        
                    // $header.addClass('active').stop().css(
                    //     {
                    //         height: subH,
                    //     },
                    //     speed
                    // );
                    // $gnbBg.addClass('active').stop().css({ height: subH }, speed);
                }
                $('#gnb ul >li').each(function () {
                    var thisH = $(this).find('.dep2_list').outerHeight();
                    console.log(thisH);
                    $(this).find('h2').css({
                        height: thisH,
                    });
                    $(this).find('.dep2_list').css({
                        height: thisH,
                    });
                });
            });
            $gnb.mouseleave(function () {
                $header.removeClass('active').stop().animate(
                    {
                        height: headH,
                    },
                    300
                );
                $gnb2
                    .children('.dep2_box')
                    .stop()
                    .animate(
                        {
                            height: 'auto',
                        },
                        300,
                        function () {
                            $('#gnb ul >li').removeClass('active');
                            $('.dep2_box').removeClass('active');
                            $('#gnb > div > a').css('display', 'none');
                        }
                    );
                $('#gnb > div > a').removeClass('active');
                $('#gnb > div ul > li > div').css('border-top', '0');
            });
        }
        else{
            $('#gnb .dep2_list').css('height','auto');
        }
    });*/
    

    /* gnb */

    // gnb 마우스오버 이벤트
    // $('#gnb ul > li').mouseenter(function(){
    // 	winW = window.outerWidth;

    // 	if(winW > 1120) {
    // 		$(this).find('> div').stop().slideDown(200);
    // 		$(this).find('> div ol').stop().slideDown(200);
    // 		$('#gnb > div > a').addClass('active');
    // 		$('.srh_open, .srh_box').removeClass('active');
    // 		$('.srhTxt_box').slideUp(200);
    // 	}
    // });

    // $('#gnb ul > li').mouseleave(function(){
    // 	winW = window.outerWidth;

    // 	if(winW > 1120 && !($('#gnb > div > a').is(':hover'))) {
    // 		$(this).find('> div').stop().slideUp(200);
    // 		$('#gnb > div > a').removeClass('active');
    // 	}
    // });

    // $('#gnb > div > a').mouseleave(function(){
    // 	winW = window.outerWidth;

    // 	if(winW > 1120) {
    // 		$('#gnb ul > li > div').stop().slideUp(200);
    // 		$('#gnb > div > a').removeClass('active');
    // 	}
    // });

    // gnb 키보드 이벤트
    // $('#gnb ul > li').focusin(function () {
    //     winW = window.outerWidth;

    //     if (winW > 1120) {
    //         // $(this).find('> div').stop().slideDown(200);
    //         // $(this).find('> div ol').stop().slideDown(200);
    //         // $('#gnb > div > a').addClass('active');
    //         // $('.srh_open, .srh_box').removeClass('active');
    //         // $('.srhTxt_box').slideUp(200);
    //     }
    // });

    // $('#gnb > a').focusout(function () {
    //     winW = window.outerWidth;

    //     if (winW > 1120) {
    //         $('#gnb ul > li > div').stop().slideUp(200);
    //         $('#gnb > div > a').removeClass('active');
    //     }
    // });


    /* 검색창 */
    $('.srh_open').click(function () {
        var srhAct = $(this).hasClass('active');
        if (srhAct !== true) {
            $('#gnb > div > a').css('display','none');
            $('#gnb > div ul > li > div').removeClass('active');
            $('#header').css('overflow','visible');
            $(this).addClass('active').next().stop().slideDown(200);
            $('.srh_box').addClass('active');
            $('.lnb ol').slideUp(200).parent().removeClass("active");
            $('.head_dim').removeClass("active");
            
        } else {
            $(this).removeClass('active').next().stop().slideUp(200);
            $('body').css({'overflow-y': 'auto'}, {'overflow-x': 'hidden'});
            $('#gnb > div > a').css('display','block');
            $('#header').css('overflow','hidden');
            $('.srh_box').removeClass('active');
        }
    });

    
    // calendar
    $('.calendar td').click(function () {
        $(this).addClass('active').siblings().removeClass('active').parent().siblings().find('td').removeClass('active');
    });
    

    /* 팝업 */    
    $('.popup_open').click(function(){
        $('body').css('overflow-y', 'hidden');
        $('#popup').addClass('active');
        popH();
    });

    $('.popup_close').click(function(){
        $('body').css('overflow-y', 'auto');
        $('#popup, .popup').removeClass('active');
    });
    
    $('#popup, .popup').focus();
    popFocus();

    $('.popup_open2').click(function(){
        $('body').css('overflow-y', 'hidden');
        $('#popup2').addClass('active');
        popH();
    });


    /********** mobile **********/

    /* lnb */

    $('.m_open').click(function () {
        winW = window.outerWidth;

        if (winW < 1121) {
            
            $('#gnb').addClass('active');
            $('body').css('overflow', 'hidden');
            $('.srh_open, .srh_box').removeClass('active');
            $('.srhTxt_box').slideUp(200);
            $('.lnb ol').slideUp(200).parent().removeClass("active");
            $('.dep2_box, .dep2_list').css('height', 'auto');
            $('#gnb > div > a').css('display','block');
        }
    });

    $('.m_close').click(function () {
        winW = window.outerWidth;

        if (winW < 1121) {
            $('#gnb').removeClass('active');
            $('body').css('overflow', 'auto');
            $('#gnb > div > a').css('display','none');

            // 메뉴 닫을 때 모바일 메뉴 사라지고 2댑스 초기화
            $('#gnb ul > li').removeClass('active').find('ol').stop().slideUp();
        }
    });


    // 2댑스 열기, 닫기
    $('#gnb ul > li > a').click(function () {
        var lnbA = $(this).hasClass('active');

        winW = window.outerWidth;

        if (winW < 1121) {
            if (lnbA === false) {
                $(this).parent().toggleClass('active').siblings().removeClass('active');
                $(this).next().find('ol').stop().slideToggle(200).parents('li').siblings().find('ol').stop().slideUp(200);
            } else {
                $(this).parent().removeClass('active');
                $(this).next().stop().slideUp(200);
            }
        }
    });
});


// 팝업 접근성 - 웹 접근성 레이어 팝업 (탭키를 눌러도 레이어 팝업 밖으로 포커스가 나기지 않기)
function popFocus() { 
    $(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){ 
        var next = $(e.target).attr('data-focus-next'), 
            prev = $(e.target).attr('data-focus-prev'), 
            target = next || prev || false;
        
        if(!target || e.keyCode != 9) { 
            return; 
        } 
        
        if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) { 
            setTimeout(function(){ 
                $('[data-focus="' + target + '"]').focus();
            }, 1);
        } 
    });
}