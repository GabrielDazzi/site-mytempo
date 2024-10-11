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
