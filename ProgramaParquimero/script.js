let tempo = document.querySelector("#span-tempo");
let troco = document.querySelector("#span-troco");
let valorInsufuciente = document.querySelector("#valor-insuficiente");

const calculartempo = () => {
  let input = Number(document.querySelector("#input").value);

  valorInsufuciente.textContent = "";
  tempo.innerText = "";
  troco.innerText = "";

  if (input < 1) {
    valorInsufuciente.textContent = `Valor Insuficiente`;
  } else if (input < 1.75) {
    tempo.innerText = `30 Min`;
    troco.innerText = `R$ ${(input - 1).toFixed(2)}`;
  } else if (input < 3.0) {
    tempo.innerText = `60 Min`;
    troco.innerText = `R$ ${(input - 1.75).toFixed(2)}`;
  } else {
    tempo.innerText = `120 Min (tempo máximo)`;
    troco.innerText = `R$ ${(input - 3).toFixed(2)}`;
  }
};

let btn = document.querySelector("#enviar");
btn.addEventListener("click", calculartempo);
