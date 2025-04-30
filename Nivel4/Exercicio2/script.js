const quadrado = document.getElementById("quadrado");

quadrado.addEventListener("mouseover", ()=>{
    quadrado.style.backgroundColor = "red";
});

quadrado.addEventListener("mouseout", ()=>{
    quadrado.style.backgroundColor = "lightgray";
});