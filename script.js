
console.log("Site Agro Forte, Futuro Sustentável carregado com sucesso!");


const formulario = document.querySelector("form");


if (formulario) {
    formulario.addEventListener("submit", function(event) {

        const nome = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();

        if (nome === "" || email === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            event.preventDefault();
            return;
        }

        alert("Mensagem enviada com sucesso!");
    });
}


const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Você acessou a seção: ${link.textContent}`);
    });
});


const secoes = document.querySelectorAll("section");

function revelarSecoes() {
    secoes.forEach(secao => {
        const topo = secao.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";
        }
    });
}


secoes.forEach(secao => {
    secao.style.opacity = "0";
    secao.style.transform = "translateY(20px)";
    secao.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revelarSecoes);
window.addEventListener("load", revelarSecoes);
