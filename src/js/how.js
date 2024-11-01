var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "550px";
    }
  });
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('toggle');
    navMenu.classList.toggle('nav-active');
  });
});

function abrirImagem(src) {
  document.getElementById('imagem-grande').src = src;
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('modal-open'); // Bloqueia o scroll

  const img = document.getElementById('imagem-grande');
  const textModal = document.querySelectorAll('.text-modal, .text-modal-2');

}

function fecharImagem() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open');

  const img = document.getElementById('imagem-grande');
  const textModal = document.querySelectorAll('.text-modal, .text-modal-2');
  textModal.forEach(el => el.style.visibility = 'visible');
}

document.querySelectorAll('.carousel').forEach((carousel) => {
  let currentIndex = 0;
  const slides = carousel.querySelectorAll('.carousel-item');

  function changeSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  // Inicia o primeiro item visível
  slides[currentIndex].classList.add('active');

  // Adiciona os event listeners para os botões de controle
  carousel.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
  carousel.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
