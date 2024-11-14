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

window.addEventListener('load', applyFadeInAnimation); // Aplica ao carregar a página

// Função para aplicar a animação de fade-in
function applyFadeInAnimation() {
    const elementsToFade = document.querySelectorAll('.number-section, .instruction-section, .chip-section, .kit-contents, .real-illustration, .load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para observar apenas uma vez
            }
        });
    });

    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Adiciona a classe fade-in inicialmente
        observer.observe(el); // Observa cada elemento
    });
}
