// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Controle do pop-up de cadastro
    const cadastroPopup = document.getElementById("cadastroPopup");
    const openCadastroButtons = document.querySelectorAll("#openCadastro");
    const closeCadastroButton = cadastroPopup.querySelector(".close-btn");

    openCadastroButtons.forEach(button => {
        button.addEventListener("click", () => {
            cadastroPopup.style.display = "block";
        });
    });

    closeCadastroButton.addEventListener("click", () => {
        cadastroPopup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === cadastroPopup) {
            cadastroPopup.style.display = "none";
        }
    });

    // Controle do pop-up de login
    const loginPopup = document.getElementById("loginPopup");
    const openLoginButton = document.getElementById("openLogin");
    const closeLoginButton = loginPopup.querySelector(".close-btn");

    openLoginButton.addEventListener("click", () => {
        loginPopup.style.display = "block";
    });

    closeLoginButton.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });
});


// Função de rolagem suave
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
