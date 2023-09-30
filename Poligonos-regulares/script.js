let canvas = document.getElementById('canvas');
let contexto = canvas.getContext('2d');
let contenedorCanvas = document.getElementById("contenedor-canvas");
canvas.width = contenedorCanvas.clientWidth;
canvas.height = contenedorCanvas.clientHeight;

let inputLados = document.getElementById('numLados');
let inputTamLados = document.getElementById('tamLados');

let xCentro = canvas.width/2;
let yCentro = canvas.height/2;
let centimetro = 10;
let dimPunto = 5;
contexto.fillStyle = "black";
contexto.fillRect(xCentro, yCentro, dimPunto, dimPunto);
contexto.fillStyle = "red";

function graficar() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    let cantLados = inputLados.value;
    let tamLados = inputTamLados.value*centimetro;
    let anguloTriangulos = (2*Math.PI)/cantLados;
    for (let i = 0; i <= cantLados; i++) {
        let puntosPoligono = [xCentro+(tamLados*(Math.cos(i*anguloTriangulos))), yCentro+(tamLados*(Math.sin(i*anguloTriangulos)))];
        contexto.fillRect(puntosPoligono[0], puntosPoligono[1], dimPunto, dimPunto);
    }
}

inputLados.addEventListener("change", graficar);
inputTamLados.addEventListener("change", graficar);







