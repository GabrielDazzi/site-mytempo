document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll("h1");
    
    titles.forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling; // Pega o próximo elemento (o conteúdo)
            content.classList.toggle("hidden");

            // Alterna a seta
            const arrow = title.querySelector(".arrow");
            if (content.classList.contains("hidden")) {
                arrow.textContent = "ᐅ"; // seta para a direita
            } else {
                arrow.textContent = "ᐁ"; // seta para baixo
            }
        });
    });
});

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