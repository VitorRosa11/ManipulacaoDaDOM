const input = document.getElementById("tarefa");
const botao = document.getElementById("adiicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", ()=>{
    const texto = input.value.trim();
    if (texto !== ""){
        const item = document.createElement("li");
        item.textContent = texto;

        item.addEventListener("click", ()=>{
        item.classList.toggle("riscado");
        });
        lista.appendChild(item);
        input.value = "";
    }
});