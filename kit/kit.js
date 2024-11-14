function abrirImagem(src) {
    const modal = document.getElementById('modal');
    const img = document.getElementById('imagem-grande');
    
    img.src = src;
    modal.classList.add('show');  // Adiciona a classe "show" para exibir a modal
    document.body.classList.add('modal-open');
}

function fecharImagem() {
    const modal = document.getElementById('modal');

    modal.classList.remove('show');  // Remove a classe "show" para iniciar o fade-out
    document.body.classList.remove('modal-open');
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
