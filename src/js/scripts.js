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

// Função para aplicar a animação de fade-in
function applyFadeInAnimation() {
    const elementsToFade = document.querySelectorAll('.content1, .contents, .container, .sectiono');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para observar apenas uma vez
            }
        });
    });

    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Adiciona a classe fade-in
        observer.observe(el); // Observa cada elemento
    });
}

document.addEventListener('DOMContentLoaded', applyFadeInAnimation);

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

const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

