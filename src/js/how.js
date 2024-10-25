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
  let zoomAtivo = false;

  // Função para aplicar o zoom e definir a origem
  function aplicarZoom(xPercent, yPercent) {
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = "scale(2)";
    textModal.forEach(el => el.style.visibility = 'hidden');
  }

  // Função para remover o zoom
  function removerZoom() {
    img.style.transform = "scale(1)";
    textModal.forEach(el => el.style.visibility = 'visible');
  }

  // Evento de clique para alternar o zoom no desktop
  img.addEventListener('click', function(e) {
    if (!zoomAtivo) {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      aplicarZoom(xPercent, yPercent);
      zoomAtivo = true;
    } else {
      removerZoom();
      zoomAtivo = false;
    }
  });

  // Eventos para toque e movimento no mobile
  img.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Impede a rolagem da página
    zoomAtivo = true;
    const rect = img.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    aplicarZoom(xPercent, yPercent);
  });

  img.addEventListener('touchmove', function(e) {
    if (zoomAtivo) {
      e.preventDefault(); // Impede a rolagem da página enquanto move
      const rect = img.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Atualiza a origem do zoom com o movimento do toque
      img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    }
  });

  img.addEventListener('touchend', function() {
    removerZoom(); // Remove o zoom ao soltar o dedo
    zoomAtivo = false;
  });
}

function fecharImagem() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open');

  const img = document.getElementById('imagem-grande');
  const textModal = document.querySelectorAll('.text-modal, .text-modal-2');
  img.style.transform = "scale(1)";
  textModal.forEach(el => el.style.visibility = 'visible');

  img.removeEventListener('click', null);
  img.removeEventListener('touchstart', null);
  img.removeEventListener('touchmove', null);
  img.removeEventListener('touchend', null);
}
