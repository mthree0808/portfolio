var headH; // 전역변수
var breakPoint = 1063; // 가변구간

function blackCover(arg) {
  //검정색 레이어 덮개
  if (arg == 'on') {
    $('#wrapper').addClass('active'); // 헤더만 노출
  } else if (arg == 'top') {
    $('#wrapper').addClass('active2'); // 전체 덮음
  } else if (arg == 'off') {
    $('#wrapper').removeClass(); //제거
  }
}

function quick_slide(){
  var ell = $('.main .bg_con1 .quick ul');
  if( window.innerWidth < 720 ){
    ell.not('.slick-initialized').slick({
      slidesToShow: 4,
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

// slick on mobile
function slick_on_mobile(slider, settings) {
  $(window).on('load resize', function () {
      if ($(window).width() > 720) {
          if (slider.hasClass('slick-initialized')) {
              slider.slick('unslick');
          }
          return;
      }
      if (!slider.hasClass('slick-initialized')) {
          return slider.slick(settings);
      }
  });
}

function imgResize() {
  //이미지 사이즈 조절
  if (pcChk(720)) {
    function imgResizeH() {
      $('.img').each(function () {
        var imgBoxH, imgH, img;
        imgBoxH = $(this).height();
        img = $(this).children('img');
        imgH = img.height();
        if (imgBoxH > imgH) {
          img.width('auto').height('100%');
        }
      });
    }
    $('.img').each(function () {
      var imgBoxW, imgW, img;
      imgBoxW = $(this).width();
      img = $(this).children('img');
      imgW = img.width();
      if (imgBoxW > imgW) {
        //이미지box가 클경우
        img.width('100%').height('auto');
        imgResizeH();
      } else {
        imgResizeH();
      }
    });
  }
}
function tabBoxSizing(target) {
  //active li의 높이를 구하고 tab_box 높이 설정
  var tab = $(target).closest('.tap_box');
  var tabConH = tab.find('.active > div').outerHeight(true);
  tab.height(tabConH);
}
function tabBoxReset() {
  //active li의 높이를 구하고 tab_box 높이 설정
  $('.tap_box').each(function () {
    var tabConH = $(this).find('.active > div').outerHeight(true);
    $(this).height(tabConH);
  });
}

function pcChk(width) {
  //창크기 width보다 크면 true 반환
  if ($(window).width() > width) {
    return true;
  } else {
    return false;
  }
}
function openGnbM() {
  //사이트맵 gnb복사 후 열기
  $('#gnb').fadeIn();
}
function closeGnbM() {
  //사이트맵 닫고 복사한 nav 지우기
  $('#gnb').fadeOut();
}
function focusLoop() {
  //이벤트가 발생한 요소의 상위 tabindex="0"을 찾아 포커스이동
  $(event.target).closest('[tabindex="0"]').focus();
}
function saveFocus() {
  //이벤트 발생한 요소 elFocus변수에 저장
  return (elFocus = $(event.target));
}
function returnFocus() {
  //저장된 요소로 포커스 이동
  elFocus.focus();
}
function bodyScroll(arg) {
  //인자값에 따른 body 스크롤 on/off
  if (arg == 'off') {
    $('body').css('overflow', 'hidden');
  } else if (arg == 'on') {
    $('body').removeAttr('style');
  }
}
function menuInit(target) {
  // 하위메뉴가 있으면 a태그에 클래스 추가
  $(target).each(function () {
    if ($(this).next().length) {
      $(this).addClass('menu_btn');
    }
  });
}
function resizeGnbHeight(target) {
  //pc화면에서 gnb모션
  if (pcChk(breakPoint)) {
    var dep2H = $(target).next('div').outerHeight();
    $('#gnb')
      .stop()
      .animate({ height: headH + dep2H + 'px' }, 200);
    $('.header').addClass('active');
    $(target).closest('li').addClass('active').closest('li').siblings('li').removeClass('active');
    blackCover('on');
  }
}
function gnbReset() {
  //gnb 초기화
  if (pcChk(breakPoint)) {
    $('#gnb')
      .stop()
      .animate({ height: headH + 'px' }, 200, function () {
        $('#gnb').removeClass('active').removeAttr('style');
        $('.header').removeClass('active');
        $('#gnb .dep1 > li').removeClass('active');
        blackCover('off');
      });
  }
}
function reset() {
  var el = '#gnb, #gnb .dep1 > li, #gnb .dep1 > li > div, #gnb .dep3, .open_sch, .hd_sch';
  $(el).removeClass('active').removeAttr('style');
  bodyScroll('on');
  blackCover('off');
  closeSitemap();
}

function closeSitemap() {
  $('.sitemap')
    .stop()
    .animate({ top: '50%', opacity: 0 }, 500, function () {
      bodyScroll('on');
      blackCover('off');
      $(this).removeClass('active');
    });
}

function changeValue(obj) {
  // console.log(obj.files[0].name);
  $(obj).siblings('span').children('em').html(obj.files[0].name);
}
function tabBoxSizing() {
  //active li의 높이를 구하고 tab_box 높이 설정
  var tabConH = $('.tab_area').find('.active > div').outerHeight();
  var tabH = $('.tab_area').find('li').outerHeight();
  $('.tab_area').height(tabConH + tabH);
}

function tab2Reset() {
  $('.tab_list2').each(function () {
    var j = $(this).children('li').length;
    $(this).children('li').width(100 / j + '%');
  });
  $('.tab_wrap .tab_list2').each(function () {
    if (!pcChk(breakPoint)) {
      var txt = $(this).children('li.active').text();
      $(this).children('li').removeAttr('style');
      $(this).siblings('button').text(txt);
    }
  });
}

$(window).scroll(function () {
  // top button controll
  if ($(this).scrollTop() > 500) {
    $('.btn_scr_top').fadeIn();
  } else {
    $('.btn_scr_top').fadeOut();
  }
});

$(function () {
  //사이트맵 오픈
  $('.btn_sitemap').click(function () {
    bodyScroll('off');
    blackCover('top');
    $('.sitemap').addClass('active').stop().animate({ top: 0, opacity: 1 }, 500);
  });
  //사이트맵 닫기
  $('.close_sitemap').click(function () {
    closeSitemap();
  });
  //데이터피커 실행
  if ($('.date_inp input').length > 0) {
    $('.date_inp input').datepicker();
  }
  //스크롤 탑 이동
  $('.btn_scr_top').click(function () {
    // 스크롤탑 버튼
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  //탭 기능
  $('.tap_box > li > button').on('click', function () {
    $(this).closest('li').addClass('active').closest('li').siblings('li').removeClass('active');
    tabBoxSizing(this);
  });
  //pc gnb 사이즈 조절 - 마우스 온
  $('#gnb .dep1 > li > a').on({
    //헤더 높이조절
    mouseenter: function () {
      resizeGnbHeight(this);
    },
    focusin: function () {
      resizeGnbHeight(this);
    },
  });
  //pc gnb 사이즈 초기화 - 마우스 오프
  $('#gnb .dep1').on({
    mouseleave: function () {
      gnbReset(); //헤더 높이 초기화
    },
  });
  //pc gnb 사이즈 초기화 - 포커스 오프
  $('#gnb .dep2 a').last().on({
    focusout: function () {
      gnbReset(); //헤더 높이 초기화
    },
  });
  //모바일 헤더 검색창 보이기
  $('.open_sch').click(function () {
    if (!pcChk(breakPoint)) {
      $('.hd_sch').slideToggle();
      $(this).toggleClass('active');
    }
  });
  //모바일 헤더 검색창 감추기
  $(document).on('click', function (e) {
    if ($(e.target).closest('.hd_sch').length == 0 && $(e.target).closest('.open_sch').length == 0 && !pcChk(breakPoint)) {
      $('.hd_sch').slideUp();
      $('.open_sch').removeClass('active');
    }
  });
  //모바일 GNB 클릭시 하위메뉴 노출
  $('#gnb .dep1 a').on('click', function () {
    if (!pcChk(breakPoint)) {
      var innerMenu = $(this).next('ul');
      var innerMenu2 = $(this).next('div');
      if (innerMenu.length > 0 && !pcChk(breakPoint)) {
        $(this).closest('li').toggleClass('active').siblings('li').removeClass('active').find('ul').stop().slideUp(200);
        innerMenu.stop().slideToggle(200);
        return false;
      } else if (innerMenu2.length > 0 && !pcChk(breakPoint)) {
        $(this).closest('li').toggleClass('active').siblings('li').removeClass('active').find('div').stop().slideUp(200).find('li').removeClass('active').find('.dep3').stop().slideUp(200);
        innerMenu2.stop().slideToggle(200);
        return false;
      }
    }
  });
  //모바일 dep3 클릭시 하위메뉴 active
  $('#gnb .dep3 a').on('click', function () {
    if (!pcChk(breakPoint)) {
      $(this).closest('li').addClass('active').siblings('li').removeClass('active');
    }
  });

  // 모바일 메뉴 열기
  $('.open_gnb').on('click', function () {
    if (!pcChk(breakPoint)) {
      openGnbM(); //사이트맵 열기
      bodyScroll('off'); //body 스크롤 없애기
    }
  });
  // 모바일 메뉴 닫기
  $('.close_gnb').on('click', function () {
    if (!pcChk(breakPoint)) {
      closeGnbM(); //사이트맵 열기
      bodyScroll('on'); //body 스크롤 없애기
    }
  });

  //lnb dep2클릭시
  $(document).on('click', '#lnb .dep2 a', function () {
    var innerMenu = $(this).next('ul');
    $(this).closest('li').toggleClass('active').siblings('li').removeClass('active').find('ul').stop().slideUp(200);
    innerMenu.stop().slideToggle(200);
    if ($(this).hasClass('menu_btn')) {
      return false;
    }
  });
  $('#lnb .dep2 > li').each(function () {
    if ($(this).hasClass('active')) {
      $(this).children('.dep3').slideDown(200);
    }
  });

  //공통 - 아코디언
  $('.dropdown > button').click(function () {
    var parents = $(this).closest('.dropdown');
    if (parents.hasClass('active')) {
      $(this).attr('title', '열기');
    } else {
      $(this).attr('title', '닫기');
    }
    $(this)
      .next()
      .stop()
      .slideToggle(300)
      .closest('.dropdown')
      .toggleClass('active')
      .siblings('.dropdown')
      .removeClass('active')
      .children('button')
      .next()
      .stop()
      .slideUp(300);
  });
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.dropdown button').length) {
      $('.dropdown ul').stop().slideUp().parents('.dropdown').removeClass('active').find('button').attr('title', '열기');
    }
  });

  //tab 이벤트
  $('.tab_list2 a').click(function () {
    var active_txt = $(this).text(),
      j = $(this).parent('li').index(),
      tabBox = $(this).closest('.tab_list2');
    if (tabBox.next('.tab_con').length) {
      tabBox.next('.tab_con').children('li').eq(j).addClass('active').siblings('li').removeClass('active');
    }
    $(this)
      .attr('title', '선택됨')
      .parent('li')
      .addClass('active')
      .siblings()
      .removeClass('active')
      .children('a')
      .attr('title', '');

    if ($(window).width() < 850) {
      $(this)
        .parent()
        .parent()
        .siblings('.btn_select')
        .removeClass('active')
        .text(active_txt)
        .siblings('.tab_list2')
        .hide();
    }
    // return false;
  });
  // tab mobile
  $('.btn_select').click(function () {
    $(this).toggleClass('active').siblings('.tab_list2').slideToggle(300);
  });
  // 컨텐츠 드롭다운메뉴
  var dropBtn = $('.list_dropdown dt button');
  dropBtn.on('click', function () {
    if ($(this).closest('dt').hasClass('active')) {
      $(this).closest('dt').removeClass('active').children('button').attr('title', '열기');
      $('.list_dropdown dd').slideUp();
    } else {
      $('.list_dropdown dt').removeClass('active').children('button').attr('title', '열기');
      $('.list_dropdown dd').slideUp();
      $(this).closest('dt').addClass('active').next().slideDown();
      $(this).closest('dt').children('button').attr('title', '닫기');
    }
    return false;
  });

  $('.sort').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).attr('title', '내림차순 정렬');
    } else {
      $(this).attr('title', '오름차순 정렬');
    }
  });

  $('.anc_box a').click(function () {
    var el = $(this).data('id');
    var elP = $('#' + el).offset().top;
    $(this).closest('li').addClass('active').siblings('li').removeClass('active');
    $('html,body').animate({ scrollTop: elP });
    $('#' + el).click();
    return false;
  });

  $(window).resize(function () {
    var windowW = window.innerWidth,
      active_txt = $('.tab_wrap .tab_list2 .active a').text();
    if (windowW >= 990) {
      $('.tab_list2').css({ display: '' });
    }
    $('.btn_select').text(active_txt);
  });

  $('.tab_area > li > button').on('click', function () {
    $(this).closest('li').addClass('active').closest('li').siblings('li').removeClass('active');
    tabBoxSizing();
  });
  $(window).on('resize load', function () {
    tabBoxSizing();
  });

  //파일 이벤트
  $('.file_box span, .file_box button').click(function (e) {
    $(this).siblings('input').click();
  });
  //슬라이드배너
  $slick_slider = $('.main .bg_con1 .quick ul');
  settings_slider = {
    dots: false,
    arrows: false,
    slidesToShow: 6,
    variableWidth: true,
    infinite: false,
    swipeToSlide: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  slick_on_mobile($slick_slider, settings_slider);

  //footer 배너슬라이드
  var f_banner = $('.f_banner .slide');
  if (f_banner.find('.item').length < 6) {
    for (var i = 0; i < 6; i++) {
      $('.f_banner .slide .item').eq(i).clone().appendTo('.f_banner .slide');
    }
  }
  f_banner.slick({
    variableWidth: true,
    slidesToShow: 6,
    autoplay: true,
    cssEase: 'ease-in',
    infinite: true,
    dots: false,
    touchThreshold: 100,
    accessibility: true,
    autoplaySpeed: 2000,
    prevArrow: $('.f_banner .prev'), //arrow 설정
    nextArrow: $('.f_banner .next'), //arrow 설정
  });
  $('.f_banner .pause').click(function () {
    if ($(this).hasClass('play')) {
      $(this).removeClass('play').text('자동재생 정지');
      f_banner.slick('slickPlay');
    } else {
      $(this).addClass('play').text('자동재생 시작');
      f_banner.slick('slickPause');
    }
  });

});
$(window).on('resize load', function () {
  quick_slide();
  reset();
  tab2Reset();
  tabBoxReset();
  if (pcChk(breakPoint)) {
    headH = $('#gnb').outerHeight(); //기본 헤더 높이 전역변수
    var gnbLeng = $('#gnb .dep1 > li').length; //gnb 너비 조정
    $('#gnb .dep1 > li').width(100 / gnbLeng + '%'); //gnb 너비 조정
    menuInit('#lnb .dep2 a');
  } else {
    $('#gnb .dep1 > li').removeAttr('style'); //gnb 너비 조정
    menuInit('#gnb .dep1 a');
  }
});
$(window).on('load', function () {
  //메인배너슬라이드
  var slide = $('.main .bg_con1 .slide');
  slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.main .bg_con1 .pagination_num').html('<span class="current">' + i + '</span> / ' + slick.slideCount);
  });
  slide.slick({
    autoplay: true,
    cssEase: 'ease-in',
    prevArrow: $('.main .bg_con1 .prev'), //arrow 설정
    nextArrow: $('.main .bg_con1 .next'), //arrow 설정
  });
  $('.main .bg_con1 .pause').click(function () {
    if ($(this).hasClass('play')) {
      $(this).removeClass('play').text('자동재생 정지');
      slide.slick('slickPlay');
      isPause = false;
    } else {
      $(this).addClass('play').text('자동재생 시작');
      slide.slick('slickPause');
      isPause = true;
    }
  });
});

//data-btn 값과 동일한 모달 노출
$(document).on('click', '[data-btn]', function (event) {
  bodyScroll('off');
  var popName = $(this).data('btn');
  $('.modal_wrap[data-pop="' + popName + '"]').fadeIn();
  return false;
});

/* 팝업 on/off */
$(document).on('click', '.modal_wrap .close, .btn_box .close_btn', function () {
  bodyScroll('on');
  $(this).closest('.modal_wrap').fadeOut();
});
