$(function(){
	$('.share_ico_btn').click(function(e){
		e.stopPropagation();
		$(this).next().toggleClass("active");
		return false;
	});
	$(document).click(function(){
		$('.share_ico_box').removeClass("active");
	});
	
	var title = "직접판매공제조합-지식정보아카데미";
	var url = 'http://info.macco.or.kr';
	
	$('.share_ico_box li').click(function(){
		var sns = this.id;
		
		fnSnsShare(sns, title, url);
	});
});

function fnSnsShare(sns, title, url){
	if(sns == 'kakaoTalk'){
		var og_img = $("meta[property='og:image']").attr("content");
		if(og_img.indexOf('://') == -1){
			og_img = location.protocol+'//'+location.hostname+og_img;
		}
		Kakao.Link.sendDefault({
			objectType: 'feed',
			content: {
			  title: title,
			  description: '직접판매공제조합-지식정보아카데미',
			  imageUrl: og_img,
			  link: {
			    mobileWebUrl: url,
			    webUrl: url,
			  },
			},
			social: {
			    likeCount: 10,
			    commentCount: 20,
			    sharedCount: 30,
			  },
			  buttons: [
			    {
			      title: '웹으로 이동',
			      link: {
			    	  mobileWebUrl: url,
					    webUrl: url,
			      },
			    },
			    {
			      title: '앱으로 이동',
			      link: {
			    	  mobileWebUrl: url,
					    webUrl: url,
			      },
			    },
			  ],
			success: function(response) {
			  console.log(response);
			},
			fail: function(error) {
			  console.log(error);
			}
		});

		return;
	}
	else if(sns == 'kakaoStory'){
		Kakao.Story.share({
			url: url,
			text: title
		});
			
		return;
	}
	
	var href;
	if(sns == 'naverBlog'){
		href = "http://blog.naver.com/openapi/share?url="+encodeURIComponent(url)+"&title="+encodeURIComponent(title);
	}
	else if(sns == 'naverCafe'){
		//href = "http://share.naver.com/web/shareView.nhn?url="+encodeURI(encodeURIComponent(url))+"&title="+encodeURIComponent(title);
		href = "https://m.cafe.naver.com/ExternalScrapView.nhn?serviceCode=share&url="+encodeURIComponent(url)+"&title="+encodeURIComponent(title)+"&timestamp=0&token=";
	}
	else if(sns == 'band'){
		href = "https://band.us/plugin/share?body="+encodeURIComponent(/*'[직접판매공제조합-지식정보아카데미] '+*/title+'\n'+url);
	}
	else if(sns == 'line'){
		href = "http://line.me/R/msg/text/?"+encodeURIComponent(/*'[직접판매공제조합-지식정보아카데미] '+*/title+'\n'+url);
	}
	else if(sns == 'twitter'){
		href ="http://twitter.com/intent/tweet?text="+encodeURIComponent(title)+"&url="+encodeURIComponent(url);
	}
	else if(sns == 'facebook'){
		href ="http://www.facebook.com/sharer.php?u="+encodeURIComponent(url)+"&t="+encodeURIComponent(title);
	}
	
	var a = window.open(href, sns, 'width=500, height=500, resizable=yes, scrollbars=yes').focus();
}