const parOuImpar = () => {
  const input = document.querySelector("#inputNumero");
  const texto = document.querySelector("#texto");
  const valor = input.value.trim();

  if (!valor) {
    texto.innerText = "Digite um número antes de continuar.";
    return;
  }

  const inputNumero = Number(valor);
  if (Number.isNaN(inputNumero)) {
    texto.innerText = "Digite um número válido.";
    return;
  }

  if (inputNumero % 2 === 0) {
    texto.innerText = `O seu número é par`;
  } else {
    texto.innerText = `Seu número é ímpar`;
  }
};

const mostrar = document.querySelector("#mostrar");
mostrar.addEventListener("click", parOuImpar);
