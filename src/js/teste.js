const modalidadesContainer = document.querySelector('.Modalidades-P');
const items = Array.from(modalidadesContainer.children);

// Função para duplicar os itens no final do container
function duplicateItems() {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        modalidadesContainer.appendChild(clone);
    });
}

// Monitora a posição de rolagem para saber quando duplicar
modalidadesContainer.addEventListener('scroll', () => {
    const scrollPosition = modalidadesContainer.scrollLeft;
    const maxScrollPosition = modalidadesContainer.scrollWidth - modalidadesContainer.clientWidth;

    // Quando chega ao final do container, duplicar os itens
    if (scrollPosition >= maxScrollPosition - 1) {
        duplicateItems();
    }
});
