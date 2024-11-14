function abrirImagem(src) {
    document.getElementById('imagem-grande').src = src;
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('modal-open');

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
