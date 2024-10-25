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

  function aplicarZoom(xPercent, yPercent) {
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = "scale(2)";
    textModal.forEach(el => el.style.visibility = 'hidden');
  }

  function removerZoom() {
    img.style.transform = "scale(1)";
    textModal.forEach(el => el.style.visibility = 'visible');
  }

  img.addEventListener('mousemove', function(e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    aplicarZoom(xPercent, yPercent);
  });

  img.addEventListener('mouseleave', removerZoom);

  let zoomAtivo = false;
  img.addEventListener('touchstart', function(e) {
    const rect = img.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    if (!zoomAtivo) {
      aplicarZoom(xPercent, yPercent);
      zoomAtivo = true;
    } else {
      removerZoom();
      zoomAtivo = false;
    }
  });
}

function fecharImagem() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open'); // Libera o scroll

  const img = document.getElementById('imagem-grande');
  const textModal = document.querySelectorAll('.text-modal, .text-modal-2');
  img.style.transform = "scale(1)";
  textModal.forEach(el => el.style.visibility = 'visible');

  img.removeEventListener('mousemove', null);
  img.removeEventListener('mouseleave', null);
  img.removeEventListener('touchstart', null);
}
