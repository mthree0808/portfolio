$(function () {
    /***** 반응형 초기화 작업 *****/

    /* 반응형 세팅을 위한 변수값 세팅 */
    var winW = window.outerWidth;
    var winW2 = window.innerWidth;
    var winH = window.outerHeight;
    var scPos = $(window).scrollTop();

    // 웹, 모바일 리사이즈 이벤트
    $(window).resize(function () {
        winW = window.outerWidth;
        winW2 = window.innerWidth;
    });

    // visual
    if ($('.visual_slide').length > 0) {
        var visual = $('.visual_slide');

        visual.slick({
            slide: 'a', //슬라이드 되어야 할 태그 ex) div, li
            slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
            autoplay: true, // 자동 스크롤 사용 여부
            autoplaySpeed: 4000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            infinite: true, //무한 반복 옵션
            speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows: true, // 옆으로 이동하는 화살표 표시 여부
            dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
            appendDots: $('.visual .mb_paging'),
            customPaging: function (slide, i) {
                return '<button type="button">' + (i + 1) + '번째 슬라이드로 이동</button>';
            },
            pauseOnHover: true, // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
            // vertical: false, // 세로 방향 슬라이드 옵션
            draggable: true, //드래그 가능 여부
            prevArrow: $('.visual .prev'), // 이전 화살표 특정한 클래스로 변경
            nextArrow: $('.visual .next'), // 다음 화살표 특정한 클래스로 변경
            // accessibility: true, // 접근성 여부
            responsive: [
                // 반응형 웹 구현 옵션
                {
                    breakpoint: 1030, //화면 사이즈 px
                    settings: {
                        // 여기에 추가하면 그걸로 변경
                        arrows: false,
                    },
                },
            ],
        });
        visual.slick('refresh');
    }

    $('.visual .stop').click(function () {
        var s_btn = $(this).attr('class');

        if (s_btn == 'stop') {
            visual.slick('slickPause');
            $(this).attr('class', 'play');
            $(this).attr('title', '재생');
        } else {
            visual.slick('slickPlay');
            $(this).attr('class', 'stop');
            $(this).attr('title', '정지');
        }
    });

    $('.visual .prev').click(function () {
        visual.slick('slickPrev');
    });

    $('.visual .next').click(function () {
        visual.slick('slickNext');
    });

    /* 탭메뉴 */
    $('.tabMenu ul > li > a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.tab_slide').slick('setPosition');
        $('.tab_slide').slick('refresh');
    });

    // archive
    var archive = $('.archive_slide');

    archive.slick({
        slide: 'a', //슬라이드 되어야 할 태그 ex) div, li
        slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 4000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        infinite: true, //무한 반복 옵션
        speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
        pauseOnHover: true, // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        draggable: true, //드래그 가능 여부
        appendDots: $('.archive .mb_paging'),
        customPaging: function (slide, i) {
            return '<button type="button">' + (i + 1) + '번째 슬라이드로 이동</button>';
        },
        prevArrow: $('.archive .prev'), // 이전 화살표 특정한 클래스로 변경
        nextArrow: $('.archive .next'), // 다음 화살표 특정한 클래스로 변경
        accessibility: true, // 접근성 여부
        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 1230, //화면 사이즈 px
                settings: {
                    // 여기에 추가하면 그걸로 변경
                    arrows: false,
                },
                breakpoint: 1080, //화면 사이즈 px
                settings: {
                    // 여기에 추가하면 그걸로 변경
                    slidesToShow: 4,
                    accessibility: true,
                    // variableWidth: true,
                },
                breakpoint: 780, //화면 사이즈 px
                settings: {
                    // 여기에 추가하면 그걸로 변경
                    slidesToShow: 3,
                    accessibility: true,
                    // variableWidth: true,
                },
                breakpoint: 750, //화면 사이즈 px
                settings: {
                    variableWidth: true,
                    accessibility: true,
                    draggable: true,
                },
                // breakpoint: 483, //화면 사이즈 px
                // settings: {
                //     variableWidth: true,
                //     accessibility: true,
                //     draggable: true,
                // },
            },
        ],
    });
    $(window).on('load resize orientationchange', function () {
        $('.tab_slide').each(function () {
            var $tab_slide = $(this);
            if ($(window).width() > 816) {
                if ($tab_slide.hasClass('slick-initialized')) {
                    $tab_slide.slick('unslick');
                }
            } else {
                if (!$tab_slide.hasClass('slick-initialized')) {
                    $tab_slide.slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // mobileFirst: true,
                        draggable: true,
                        responsive: [
                            {
                                breakpoint: 830, //화면 사이즈 px
                                settings: {
                                    variableWidth: true,
                                    // slidesToShow: 1.9,
                                    slidesToScroll: 1,
                                    accessibility: true,
                                    draggable: true,
                                    // variableWidth: true,
                                },
                            },
                        ],
                    });
                    $tab_slide.slick('setPosition');
                    $tab_slide.slick('refresh');
                }
            }
        });
    });
    // $('.tab_slide').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     mobileFirst: true,
    //     responsive: [
    //         // 반응형 웹 구현 옵션
    //         {
    //             breakpoint: 800, //화면 사이즈 px
    //             settings: 'unslick'

    //         },
    //     ],
    // });

    $('.archive .stop').click(function () {
        var s_btn = $(this).attr('class');

        if (s_btn == 'stop') {
            archive.slick('slickPause');
            $(this).attr('class', 'play');
            $(this).attr('title', '재생');
        } else {
            archive.slick('slickPlay');
            $(this).attr('class', 'stop');
            $(this).attr('title', '정지');
        }
    });

    $('.archive .prev').click(function () {
        archive.slick('slickPrev');
    });

    $('.archive .next').click(function () {
        archive.slick('slickNext');
    });

    $('.archive_slide a').css('outline', 'none');


    // banner
    var banner = $('.banner_slide');

    banner.slick({
        slide: 'a', //슬라이드 되어야 할 태그 ex) div, li
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 4000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        infinite: true, //무한 반복 옵션
        speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
        appendDots: $('.banner .mb_paging'),
        customPaging: function (slide, i) {
            return '<button type="button">' + (i + 1) + '번째 슬라이드로 이동</button>';
        },
        pauseOnHover: true, // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        draggable: true, //드래그 가능 여부
        prevArrow: $('.banner .prev'), // 이전 화살표 특정한 클래스로 변경
        nextArrow: $('.banner .next'), // 다음 화살표 특정한 클래스로 변경
        accessibility: true, // 접근성 여부
        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 1030, //화면 사이즈 px
                settings: {
                    // 여기에 추가하면 그걸로 변경
                    arrows: false,
                },
            },
        ],
    });

    $('.banner .stop').click(function () {
        var s_btn = $(this).attr('class');

        if (s_btn == 'stop') {
            banner.slick('slickPause');
            $(this).attr('class', 'play');
            $(this).attr('title', '재생');
        } else {
            banner.slick('slickPlay');
            $(this).attr('class', 'stop');
            $(this).attr('title', '정지');
        }
    });

    $('.banner .prev').click(function () {
        banner.slick('slickPrev');
    });

    $('.banner .next').click(function () {
        banner.slick('slickNext');
    });

    /* 체크박스 */

    // 동 전체선택 클릭 시 하단 라디오 체크 해제
    /*
    $('#town_all').click(function(){
        $(this).parent().parent().next().find('li').removeClass('active').find('input').attr("checked", false);
	});
	
	// 프로그램 안내 라디오 버튼 스타일
	$('.sel_town .radio li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});*/
});
/*
function change_img(img){
	$('.visual_slide .slide-track').each(function(i){
		$(this).find('img').attr('src','../images/main/m_visu'+(i+1)+'_'+img+'.jpg');
	});
}*/
