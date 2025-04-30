const caixa = document.getElementById("caixa");
    const botao = document.getElementById("botao");

    botao.addEventListener("click", ()=> {
        caixa.innerHTML = "<strong>Conteúdo em negrito</strong>";
    });