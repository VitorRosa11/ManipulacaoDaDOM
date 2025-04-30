const texto = document.getElementById("texto");
const btnAdicionar = document.getElementById("adicionar");
const btnRemover = document.getElementById("remover");

btnAdicionar.addEventListener("click",()=>{
    texto.classList.add("destacado");
});

btnRemover.addEventListener("click", ()=>{
    texto.classList.remove("destacado");
});