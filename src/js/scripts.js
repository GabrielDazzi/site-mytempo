// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Função para abrir ou fechar a modal de contato
function toggleContactModal() {
    const contactModal = document.getElementById('contact-modal');
    if (contactModal.style.display === 'flex') {
        contactModal.style.display = 'none';
    } else {
        contactModal.style.display = 'flex';
    }
}

window.toggleContactModal = toggleContactModal;

const contactBtn = document.querySelector('.contact-btn');
const closeBtn = document.querySelector('.close-btn');
const contactLink = document.getElementById('contact-link'); // Referência ao link "Contato"

// Configura eventos para abrir e fechar a modal de contato
if (contactBtn) {
    contactBtn.addEventListener('click', toggleContactModal);
}

if (closeBtn) {
    closeBtn.addEventListener('click', toggleContactModal);
}

if (contactLink) {
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        toggleContactModal(); // Abre a modal
    });
}

// Fecha a modal ao clicar fora dela
window.addEventListener('click', function(event) {
    const contactModal = document.getElementById('contact-modal');
    if (contactModal && event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Função para verificar se o elemento está visível na janela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left < window.innerWidth &&
        rect.right >= 0
    );
}

// Função para aplicar a classe 'show' aos elementos visíveis
function checkVisibility() {
    const services = document.querySelectorAll('.service');
    const servicosTitle = document.getElementById('servicos'); // Seleciona o título "Nossos Serviços"

    services.forEach(service => {
        if (isElementInViewport(service)) {
            service.classList.add('show');
        }
    });

    // Verifica a visibilidade do título "Nossos Serviços"
    if (isElementInViewport(servicosTitle)) {
        servicosTitle.classList.add('show');
    }
}

// Verifica a visibilidade ao carregar e ao rolar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Ajusta a cor da topbar com base na rolagem da página
function adjustTopbar() {
    var topbar = document.querySelector('header');
    var navMenu = document.querySelector('.nav-menu'); // Altere '.nav-menu' para o seletor correto, se necessário
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        // Quando no topo, aplica a cor da imagem ou transparente
        topbar.style.backgroundColor = "transparent";
        navMenu.style.backgroundColor = "transparent"; // Fica transparente quando no topo
    } else {
        // Rolando para baixo, muda para a cor desejada
        topbar.style.backgroundColor = "#3C8DBC"; // Cor atual quando rola a página
        navMenu.style.backgroundColor = "#3C8DBC"; // A mesma cor para o menu de navegação
    }
}


// Configura o estado inicial da topbar
adjustTopbar();

window.addEventListener('scroll', adjustTopbar);

document.querySelectorAll('nav a[href^="#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const iconBoxes = document.querySelectorAll('.icon-box');
    const imgBoxes = document.querySelectorAll('.img-box');

    function adjustLayout() {
        if (window.innerWidth < 768) {
            iconBoxes.forEach((box, index) => {
                if (imgBoxes[index]) {
                    box.parentNode.appendChild(imgBoxes[index]);
                }
            });
        }
    }

    adjustLayout(); // Chama a função no carregamento da página
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            // Caso a tela seja maior ou igual a 768, mantenha a ordem original
            iconBoxes.forEach((box, index) => {
                if (imgBoxes[index]) {
                    box.parentNode.insertBefore(imgBoxes[index], box);
                }
            });
        } else {
            adjustLayout(); // Reajusta em telas menores
        }
    });
});

// Hamburger Menu Functionality
const menuToggle = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Toggle the 'active' class to trigger animations
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
