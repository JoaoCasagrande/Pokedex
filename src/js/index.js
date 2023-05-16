const element = document.getElementById("botao-alterar-tema");
const bodyElement = document.querySelector("body");
const imageElement = document.querySelector(".imagem-botao");

element.addEventListener("click", () => {
    bodyElement.classList.toggle("modo-escuro");

    if (bodyElement.classList.contains("modo-escuro")) 
        imageElement.setAttribute("src", "./src/images/moon.png");
    else
        imageElement.setAttribute("src", "./src/images/sun.png");
})