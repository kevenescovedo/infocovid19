var intervalo = 3000;
var img = document.getElementsByClassName("carousel");
function slide1() {
document.getElementById("img_slide_form").src="img/undraw_Group_chat_unwm (1).svg"
setTimeout("slide2()",intervalo)
}
function slide2 () {
document.getElementById("img_slide_form").src="img/undraw_filter_4kje.svg"
setTimeout("slide3()",intervalo)
}
function slide3 () {
document.getElementById("img_slide_form").src="img/undraw_social_user_lff0.svg"
setTimeout("slide4()",intervalo)
}
function slide4 () {
document.getElementById("img_slide_form").src="img/undraw_messages1_9ah2 (1).svg"
setTimeout("slide5()",intervalo)
}
function slide5 () {
document.getElementById("img_slide_form").src="img/undraw_followers_4i0p.svg"
setTimeout("slide6()",intervalo)
}
function slide6 () {
document.getElementById("img_slide_form").src="img/undraw_intense_feeling_ft9s.svg"
setTimeout("slide7()",intervalo)
}

function slide7 () {
document.getElementById("img_slide_form").src="img/undraw_friends_online_klj6.svg"
setTimeout("slide8()",intervalo)
}

function slide8() {
document.getElementById("img_slide_form").src="img/undraw_group_selfie_ijc6.svg"
setTimeout("slide9()",intervalo)
}
function slide9() {
document.getElementById("img_slide_form").src="img/undraw_social_influencer_sgsv.svg"
setTimeout("slide1()",intervalo)
}
