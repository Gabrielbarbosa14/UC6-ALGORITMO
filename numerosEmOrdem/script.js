// Vetor que armazenará os números
const numeros = [];

// Selecionando elementos
const numero = document.getElementById("numero");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnVerificar = document.getElementById("btnVerificar");

const listaNumeros = document.getElementById("listaNumeros");
const resultado = document.getElementById("resultado");

const btnLimpar = document.getElementById("btnLimpar");

// Adicionar número
btnAdicionar.addEventListener("click", () => {
  // Converte para número
  let valor = Number(numero.value);

  // Verifica se está vazio
  if (numero.value === "") {
    alert("Digite um número");
    return;
  }

  // indexOf retorna -1 quando não encontra
  if (numeros.indexOf(valor) !== -1) {
    alert("Número repetido!");

    numero.value = "";
    numero.focus();

    return;
  }

  // Adiciona ao vetor
  numeros.push(valor);

  // Mostra números na tela
  listaNumeros.innerHTML = numeros.join(" → ");

  // Limpa campo
  numero.value = "";
  numero.focus();
});

// Verificar ordem crescente
btnVerificar.addEventListener("click", () => {
  let ordem = true;

  // Percorre o vetor comparando o atual com o próximo
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false;
      break;
    }
  }

  if (ordem) {
    resultado.innerHTML = "Os números estão em ordem crescente ✅";
  } else {
    resultado.innerHTML = "Os números NÃO estão em ordem crescente ❌";
  }
});

// Limpar lista e começar novamente
btnLimpar.addEventListener("click", () => {
  // Esvazia o vetor
  numeros.length = 0;

  // Atualiza os textos na tela
  listaNumeros.innerHTML = "Nenhum número adicionado.";

  resultado.innerHTML = "Aguardando verificação...";

  // Limpa input
  numero.value = "";

  // Coloca cursor no input
  numero.focus();
});
