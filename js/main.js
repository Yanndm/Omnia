// var loading = document.querySelector('.loading');
// var body = document.querySelector('body');
//
// window.addEventListener('load', function() {
//   setTimeout(function () {
//       loading.style.display = 'none';
//   }, 3500);
// });

var presentationLink = document.querySelector('.presentationLink');
var persoLink = document.querySelector('.persoLink');
var pres = document.querySelector('.pres');
var perso = document.querySelector('.perso');

window.addEventListener('scroll', function() {
  if (Math.round(window.pageYOffset) >= 5550) {
    presentationLink.classList.remove("is-active");
    persoLink.classList.add("is-active");
    pres.classList.remove("isActiveColor");
    perso.classList.add("isActiveColor");
  }
  else if (Math.round(window.pageYOffset) <= 5550) {
    presentationLink.classList.add("is-active");
    persoLink.classList.remove("is-active");
    perso.classList.remove("isActiveColor");
    pres.classList.add("isActiveColor");
  }
});
