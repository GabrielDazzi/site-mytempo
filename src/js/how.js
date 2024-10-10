// Seleciona todos os títulos das seções
const titles = document.querySelectorAll('h1');

// Adiciona um evento de clique a cada título
titles.forEach(title => {
    title.addEventListener('click', () => {
        // Encontra o conteúdo correspondente ao título clicado
        const content = title.nextElementSibling;

        // Verifica se o conteúdo está escondido ou visível
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden'); // Exibe o conteúdo
        } else {
            content.classList.add('hidden'); // Esconde o conteúdo
        }
    });
});
