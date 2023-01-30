let slideIndex = 1;
showSlides(slideIndex);
showSlidesTop10(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlidesTop10(n) {
  showSlidesTop10(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  console.log(n);
  console.log(slides);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/*slide top 10*/
function showSlidesTop10(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-top-10");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var el = document.getElementById('menu'); // elemento alvo
var numPx = '250'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
  if (window.scrollY > numPx) {
    el.classList.add('mudaCor'); // adiciona classe "mudaCor"
  } else {
    el.classList.remove('mudaCor'); // remove classe "mudaCor"
  }
});