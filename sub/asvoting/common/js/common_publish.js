$(function () {
  
    var gnbEasing = "easeOutQuint";
    var scPos = $(window).scrollTop();

    // 하이퍼 링크 새로고침 이벤트
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
	});




    // 메인페이지 공유버튼 클릭 이벤트
    $('.vote_share > a').click(function () {
        $(this).next().addClass('active').siblings().removeClass('active');
    });
    // 통합검색 공유버튼 클릭 이벤트
    $('.share_ico').click(function(){
        $(this).next().addClass('active').siblings().removeClass('active');
    });



    $('.cl_btn').click(function () {
        black_bg_leave();
        $(this).parent().removeClass('active');
    });



    $('.gnb_list > li > a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });



    $('.dept2 li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(this).parent().parent().prev().parent().addClass('active').siblings().removeClass('active');
    });


    // 카테고리 셀렉트 박스 이벤트

    $('.slt_box .select').click(function (e) {
        e.stopPropagation();
        $('a.select.active').not(this).each(function () {
            $(this).removeClass('active').next().hide();
        });
        $(this).toggleClass('active').next().toggle();
    });
    $('.tap_result li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    
    $(document).click(function () {
        $('.slt_box .select').removeClass('active');
        $('.select_list').hide();
    });
 // 통합검색 모바일버전 셀렉트박스 이벤트
   
    $('.select_list li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().prev().text($(this).text());
    });



    $('.tap_result li').click(function () {
            if (window.innerWidth <= 720){
                $(this).parent().hide();
                $(this).parent().prev().text($(this).text()); 
            }
     });

     $('.select2').click(function (e) {
        if (window.innerWidth <= 720){
        e.stopPropagation();
        $('.select2.active').not(this).each(function(){
            $(this).removeClass('active').next().hide();
        });
        $(this).toggleClass('active').next().toggle();
    }
    });
  
    $(window).on('load resize', function () {
        var width_size = window.outerWidth;
        if (width_size <= 1086) {
            mGnbOpen();

        } else {
            mGnbClose();
        }
        if (width_size <= 736) {
            inputOpen();
        } else {
            inputClose();
            
        }
        if (width_size < 721) {
            $('.btn_search').click(function () {
                $(this).prev().css('display','block');
                $(this).addClass('active').stop().animate({ 'right': '-80px' }, 150);
                $(this).prev().css('visibility','visible');
                $(this).prev().css('transform','translate(0%)');
                $(this).prev().css('padding-left', '27px');
                $(this).next().addClass('active');
            });
            $('.m_btn_del').click(function () {
                $(this).toggleClass('active');
                $(this).prev().removeClass('active').stop().animate({ 'right': '0px' }, 150);
                $(this).siblings('input').css('padding-left', '0px');
                $(this).siblings('input').css('visibility','hidden');
                $(this).siblings('input').css('transform','translate(100%)');

            });
           
           
            
            $(document).click(function () {
                $('.select2').removeClass('active');
                // $('.tap_result').hide();
            });

        }
        if (width_size > 737){
            $('.tap_result').css('display','block');
        } else{
            $('.tap_result').css('display','none');
        }

        
        if (width_size <= 475) {
            $('.btn_search').click(function () {
                $(this).addClass('active').stop().animate({ 'right': '-8px' }, 150);
                $(this).prev().css('padding-left', '27px');
                $(this).next().addClass('active');
            })
        }




        if (width_size <= 375) {
            $('.btn_search').click(function () {
                $(this).addClass('active').stop().animate({ 'right': '-8px' }, 150);
                $(this).prev().css('padding-left', '27px');
                $(this).next().addClass('active');
            })
        }



    });



    // $('.par_voting').hover(function(){
    //     $(this).toggleClass('active').children().fadeToggle();
    // })
    /* black_bg_function */
	function black_bg_over(){
		$("html").css({"overflow-y":"hidden"});
    }
    


	function black_bg_leave(){
		$("html").css({"overflow-y":"visible"});
    }



    $('.m_btn_open').click(function () {
        black_bg_over();
        $(this).removeClass('active');
        $(this).parent().next().children('.m_btn_cl').addClass('active');
        $(this).parent().next().stop().animate({ 'left': '0%' }, 150, gnbEasing);
        $(this).parent().next().children('.gnb_list').children('li').removeClass('active');
    });



    $('.m_btn_cl').click(function () {
        black_bg_leave();
        $(this).removeClass('active');
        $(this).parent().stop().animate({ 'left': '100%' }, 150, gnbEasing);
        $(this).parent().prev().children('.m_btn_open').removeClass('active');
    });




    $('.select_list li').click(function () {
        $(this).parent().prev().text($(this).text());
        $(this).parent().removeClass('active');
        $(this).parent().prev().toggleClass('active');
        console.log($(this).val());
    });


    // gnb 리셋작업 pc화면으로 늘어날때

    function mGnbClose(){

    $('.gnb').css('left','0%');
    

    black_bg_leave();
 
    }

    // gnb 리셋작업 모바일화면으로 줄어들때

    function mGnbOpen(){
        $('.gnb').css('left','100%');
            $('.gnb').prev().children('.m_btn_open').removeClass('active');
            $('.gnb').children('.m_btn_cl').addClass('active');
    
            black_bg_leave();

    }



    function inputOpen(){
        $('.sch_input').hide().css('transform','translateX(100%)');

    }

   function inputClose(){
       $('.sch_input').show();
       $('.sch_input').css('transform','translate(0%)');
       $('.sch_input').css('visibility','visible');
       $('.sch_input').css('padding-left','40px');
       
   }

  




    // 이미지 있는 팝업 슬라이드
    $('.slick_list').slick({
		dot: false,
		infinite: true, //양방향 무한 모션
		speed: 400, // 슬라이드 스피드
		autoplay: false, //자동플레이 유무( false시 자동플레이 안됨 )
        arrows: true,
        adaptiveHeight: true,
        cssEase: 'ease',
		slidesToShow: 1, //한 화면에 보여줄 아이템수
        slidesToScroll: 1 // 한번에 슬라이드 시킬 아이템 개수
       
    });
   
    //   $("[data-layeropen]").click(function(){gd_slide();});
	// 						function gd_slide(){
	// 							var ell = $('.img_question_pop');
	// 							ell.not('.slick-initialized').slick({
	// 								slidesToShow: 1,
	// 								adaptiveHeight: true,
	// 								swipeToSlide: true,
	// 								arrows: false,
	// 								infinite: false,
	// 								speed: 300,
	// 								cssEase: 'ease'
	// 							});
	// 							ell.slick("refresh");
    //                         }
    //                     });
    
    // 이미지 있는 팝업 클릭 이벤트
    
    $('.view_item').click(function(){
        //black_bg_over()
     $(this).parents('#wrapper').next().addClass('active').siblings().removeClass('active');
     $('.slick_list').slick('setPosition');
    //  $(window).on('click', function(e){
    //     var target = $(e.target);
    //     if (!target.closest('.img_question_pop').length){
    //       $('.img_question_pop').removeClass('active');
    //     }
    //   });
     
    });
    $('.img_pop').click(function(){
        black_bg_over()
        $(this).parents('#wrapper').next().addClass('active').siblings().removeClass('active');
        $('.slick_list').slick('setPosition');
       });

      


    // 이미지 없는 팝업 클릭 이벤트
    
    $('.view_txt_item').click(function(){
        $(this).parents('#wrapper').next().children('div').children('div').children('div:first').css('display','none');
        $(this).parents('#wrapper').next().addClass('active').siblings().removeClass('active');
        
    });
     // 비밀번호 확인 팝업 클릭 이벤트
    
     $('.pwd_pop').click(function(){
        $(this).parents('#wrapper').next().next().addClass('active').siblings().removeClass('active');});
    

    // 등록한 투표 중지버튼 클릭 이벤트

    $('.stop_vote').click(function(){
        $(this).siblings('.resume_box').children().toggleClass('active');
    });
    // 등록한 투표 재개버튼 클릭 이벤트
    
    $('.resume_vote').click(function(){
        $(this).toggleClass('active');
    })

    // 공개 라디오 버튼 클릭시 비밀번호 입력창 없애는 이벤트

    $('.public_box').click(function(){
        $(this).parent().next().removeClass('active');
    })
          
    // 비공개 라디오 버튼 클릭시 비밀번호 입력창 나오는 이벤트
    
    $('.private_box').click(function(){
        $(this).parent().next().addClass('active').siblings().removeClass('active');
    })

    $('.file').click(function(e){
        //e.preventDefault();
        document.getElementById('file_01').click();
    });
    
    $('.file_regist').click(function(){
        $(this).prev().addClass('active').siblings().removeClass('active');
        $(this).parent().next().addClass('active').siblings().removeClass('active');
    });
    $('.file_delete').click(function(){
        $(this).prev().children('span').removeClass('active');
        $(this).removeClass('active');
    });
    
    //마우스 스크롤 이벤트

    $(window).scroll(function(){
        scPos = $(window).scrollTop();

        surveyAct();
    })
    var headH = $('#header').outerHeight();
    var comH = $('.common_box').outerHeight();
    var itemH = $('.regist_item:first').outerHeight();

    function surveyAct(){
        winW = window.outerWidth;

        headH = $('#header').outerHeight();
        comH = $('.common_box').outerHeight();
        itemH = $('.regist_item:first').outerHeight();

        var surveyH = headH + comH + itemH + 50;
        // console.log(surveyH);
        if (winW >= 320) {
			if(surveyH  < scPos) {$('.survey_add_box').addClass('active')}
			else if(surveyH > scPos) $('.survey_add_box').removeClass('active');
        } 
        else {$('.survey_add_box').removeClass('active');}
        if (winW <= 1071) {
            if(surveyH - 160 < scPos ){ 
                 $('.survey_add_box').addClass('active')}
            
             } else if(surveyH > scPos) $('.survey_add_box').removeClass('active');
    }


    // 투표등록 tab 이벤트

    $('.tab_list .radio_each').click(function(){
        var tabIndex = $(this).index();
        $(this).parent().parent().next().children('.tab_con').removeClass('active').eq(tabIndex).addClass('active');

       
    })


    });
    
    function changeValue(a){
        console.log(a.files[0].name);
        $('.file em').text(a.files[0].name);
        
    }