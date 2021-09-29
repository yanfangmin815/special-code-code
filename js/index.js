/*
 * @Author: your name
 * @Date: 2021-09-28 14:52:46
 * @LastEditTime: 2021-09-29 12:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tiny-heart/birthday-mobile/js/index.js
 */
$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="玥玥" &&  pwd=="930823") {
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="index1.html";},2000);
		}
	else{
		alert("告诉你账号密码都不听？");
	}
});
