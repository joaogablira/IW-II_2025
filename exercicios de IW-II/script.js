function menssagem() {
    alert("Javascript é divertido");
};

function paragrafo() {
    document.getElementById("ppp").innerText = "Parágrafo atualizado";
};

function cor() {
    document.body.style.background = "blue";

};

function nome() {
   var name = document.getElementById("nome").value;
   alert("bem-vindo "+name);

};

function sumiu() {

    

    if (document.getElementById("sumiu").innerText == "") {
        document.getElementById("sumiu").innerText = "esse parágrafo esta visível"

        document.getElementById("aparece").innerText = "apagar"
    } else {
        document.getElementById("sumiu").innerText = ""

        document.getElementById("aparece").innerText = "mostrar"
    }

};