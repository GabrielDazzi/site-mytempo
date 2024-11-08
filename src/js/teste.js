const container = document.querySelector('.Modalidades-P');
let isDuplicating = false;

function duplicateItems() {
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;

    // Verifica se está perto do final e se já não está duplicando
    if (scrollLeft + clientWidth >= scrollWidth * 0.9 && !isDuplicating) {
        isDuplicating = true; // Evita duplicações múltiplas enquanto processa
        const items = container.innerHTML; // Armazena os itens atuais
        container.innerHTML += items; // Duplica os itens no final

        isDuplicating = false; // Libera para futuras duplicações
    }
}

// Monitora o scroll e chama a função de duplicação
container.addEventListener('scroll', duplicateItems);
