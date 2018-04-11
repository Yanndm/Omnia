var loading = document.querySelector('.loading');
var body = document.querySelector('body');

window.addEventListener('load', function() {
  setTimeout(function () {
      loading.style.display = 'none';
  }, 3500);
});
