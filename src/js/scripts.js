// Função para ajustar a cor da topbar com base na rolagem da página
function adjustTopbar() {
    const topbar = document.querySelector('header');
    const navMenu = document.querySelector('.nav-menu'); 
    const burgerMenu = document.querySelector('.burger-menu'); // Seleciona o menu hambúrguer
    const scrollPosition = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (topbar) {
        if (scrollPosition === 0) {
            // Quando no topo, aplica a cor
            topbar.style.backgroundColor = isMobile ? "#3C8DBC" : "transparent"; // Cor sólida em dispositivos móveis
            
            if (isMobile && navMenu) {
                navMenu.style.backgroundColor = "#3C8DBC"; // Mantém a cor sólida no mobile
            }
        } else {
            // Rolando para baixo, muda para a cor desejada
            topbar.style.backgroundColor = "#3C8DBC"; // Cor atual quando rola a página

            if (isMobile && navMenu) {
                navMenu.style.backgroundColor = "#3C8DBC"; // A mesma cor para o menu no mobile
            }
        }
    }
}

// Configura o estado inicial da topbar
window.addEventListener('load', adjustTopbar);
window.addEventListener('scroll', adjustTopbar);

// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para abrir ou fechar a modal de contato
function toggleContactModal() {
    const contactModal = document.getElementById('contact-modal');
    if (contactModal) {
        contactModal.style.display = (contactModal.style.display === 'flex') ? 'none' : 'flex';
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
    if (servicosTitle && isElementInViewport(servicosTitle)) {
        servicosTitle.classList.add('show');
    }
}

// Verifica a visibilidade ao carregar e ao rolar a página
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Configura rolagem suave para âncoras
document.querySelectorAll('nav a[href^="#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Ajusta a ordem das divs e imagens conforme a largura da tela
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
            // Caso a tela seja maior ou igual a 768, mantém a ordem original
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

// Controle do menu hambúrguer
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
