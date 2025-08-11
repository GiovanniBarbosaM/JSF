let canvas = document.getElementById("progress");
let ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let largura = 0;
let altura = 10;
let fator = 60;
let resolucao = 1280;

ctx.fillStyle = "#4169E1"; // Azul Royal

function animacao() {
    largura += fator;
    ctx.fillRect(x, y, largura, altura);

    if (largura > resolucao) {
        clearInterval(atualiza);
    }
}

let atualiza = setInterval(animacao, 100);
