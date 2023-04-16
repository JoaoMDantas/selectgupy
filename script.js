let INDICE = 13;
let SOMA = 0;

for (let K = 1; K <= INDICE; K++) {
  SOMA += K;
}


document.getElementById("resultado").textContent = "Resultado: " + SOMA;