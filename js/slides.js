
var intervalo = 3000;
var img = document.getElementsByClassName("carousel");
function slide1() {
document.getElementsByClassName("carousel").src="img/undraw_online_connection_6778.svg"
setTimeout("slide2()",intervalo)
}
function slide2 () {
document.getElementsByClassName("carousel").src="undraw_mobile_posts_tlwg.svg"
setTimeout("slide3()",intervalo)
}
function slide3 () {
document.getElementsByClassName("carousel").src="undraw_taking_selfie_lbo7.svg"
setTimeout("slide4()",intervalo)
}
function slide4 () {
document.getElementsByClassName("carousel").src="undraw_voice_assistant_nrv7 (1).svg"
setTimeout("slide5()",intervalo)
}
function slide5 () {
document.getElementsByClassName("carousel").src="undraw_trends_a5mf.svg"
setTimeout("slide6()",intervalo)
}
function slide6 () {
document.getElementsByClassName("carousel").src="undraw_swipe_profiles1_i6mr.svg"
setTimeout("slide7()",intervalo)
}

function slide7 () {
document.getElementsByClassName("carousel").src="undraw_friends_online_klj6.svg"
setTimeout("slide8()",intervalo)
}

function slide8() {
document.getElementsByClassName("carousel").src="undraw_develop_app_kvt2.svg"
setTimeout("slide1()",intervalo)
}
console.log("aaaaaaaaaaaaa");