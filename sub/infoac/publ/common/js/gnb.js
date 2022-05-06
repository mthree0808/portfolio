
/*
 * 
 * 공용 게시판 및 공용 컨텐츠 페이지 
 * 게시판코드, 컨텐츠ID POST 방식으로 전송하기 위한 메소드
 * 
 */

function fnSendPost(url, name, value){
	
	var input = document.createElement("input");
	input.type = "hidden";
	input.name = name;
	input.value = value;
	
	var input_menu_url = document.createElement("input");
	input_menu_url.type = "hidden";
	input_menu_url.name = "fnYn";
	input_menu_url.value = "Y";
	
	var frm = document.createElement("form");
	frm.action = url;
	frm.name = "post_frm";
	frm.id = "post_frm";
	frm.method = 'post';
	frm.appendChild(input);
	frm.appendChild(input_menu_url);
	document.body.appendChild(frm);
	
	frm.submit();
	
}

function fnSendPostDetail(url,boardcode, value){
	if(url == ''){
		url = '/ko/common/bbs/selectBBS.do';
	}
	
	if(boardcode === 'noti'){
		var input = document.createElement("input");
		input.type = "hidden";
		input.name = 'boardcode';
		input.value = boardcode;
		
		var input_value = document.createElement("input");
		input_value.type = "hidden";
		input_value.name = 'id';
		input_value.value = value;
		
		var frm = document.createElement("form");
		frm.action = url;
		frm.name = "post_detail_frm";
		frm.id = "post__detail_frm";
		frm.method = 'post';
		frm.appendChild(input);
		frm.appendChild(input_value);
		document.body.appendChild(frm);
		
		frm.submit();
		
	}
}