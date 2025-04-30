const form = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const nome = inputNome.value.trim();

    if (nome){
        saudacao.textContent = `Olá, ${nome}`;
    } else {
        saudacao.textContent = `Por favor, digite seu nome.`;
    }
});