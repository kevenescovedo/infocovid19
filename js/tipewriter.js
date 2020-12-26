
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  // Se estiver tendo problemas com performance, uso o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);

var intervalo = 3000;
var img = document.getElementsByClassName("carousel");
function slide1() {
document.getElementById("carousel").src="img/undraw_online_connection_6778.svg"
setTimeout("slide2()",intervalo)
}
function slide2 () {
document.getElementById("carousel").src="img/undraw_mobile_posts_tlwg.svg"
setTimeout("slide3()",intervalo)
}
function slide3 () {
document.getElementById("carousel").src="img/undraw_taking_selfie_lbo7.svg"
setTimeout("slide4()",intervalo)
}
function slide4 () {
document.getElementById("carousel").src="img/undraw_voice_assistant_nrv7 (1).svg"
setTimeout("slide5()",intervalo)
}
function slide5 () {
document.getElementById("carousel").src="img/undraw_trends_a5mf.svg"
setTimeout("slide6()",intervalo)
}
function slide6 () {
document.getElementById("carousel").src="img/undraw_intense_feeling_ft9s.svg"
setTimeout("slide7()",intervalo)
}

function slide7 () {
document.getElementById("carousel").src="img/undraw_friends_online_klj6.svg"
setTimeout("slide8()",intervalo)
}

function slide8() {
document.getElementById("carousel").src="img/undraw_develop_app_kvt2.svg"
setTimeout("slide9()",intervalo)
}
function slide9() {
document.getElementById("carousel").src="img/undraw_social_influencer_sgsv.svg"
setTimeout("slide1()",intervalo)
}
