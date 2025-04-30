const form = document.getElementById("formulario");
const email = document.getElementById("email");
const erro = document.getElementById("erro");

form.addEventListener("submit", (e)=>
{
    e.preventDefault();

    if(email.value.trim() ===""){
        erro.textContent = "O campo de email é obrigatório!";
    } else {
        erro.textContent = "";
        alert("Formulário enviado com sucesso!");
    }
});