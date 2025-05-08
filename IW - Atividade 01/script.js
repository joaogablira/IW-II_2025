function menssagem() {
    alert("Javascript é divertido");
}

function paragrafo() {
    document.getElementById("ppp").innerText = "Parágrafo atualizado";
}

function cor() {
    document.body.style.background = "blue";
}

function mostrarNome() {
    var name = document.getElementById("nome").value;
    alert("Bem-vindo " + name);
}

function alternarParagrafo5() {
    const par = document.getElementById("sumiu");
    const btn = document.getElementById("aparece");

    if (par.innerText === "") {
        par.innerText = "Esse parágrafo está visível";
        btn.innerText = "Apagar";
    } else {
        par.innerText = "";
        btn.innerText = "Mostrar";
    }
}

function mudarConteudo() {
    document.getElementById('div').innerHTML = `
        <h1>Título</h1>
        <p>Conteúdo alterado!</p>
    `;
}

function mudarCorTexto() {
    document.getElementById("par7").style.color = "red";
}

function contarCaracteres() {
    const texto = document.getElementById("input8").value;
    document.getElementById("contagem").innerText = "Caracteres: " + texto.length;
}

let tamanhoFonte = 16; 
function aumentarFonte() {
    tamanhoFonte += 2;
    document.getElementById("par9").style.fontSize = tamanhoFonte + "px";
}

function alternarParagrafo() {
    const par = document.getElementById("par10");
    if (par.style.display === "none") {
        par.style.display = "block";
    } else {
        par.style.display = "none";
    }
}
