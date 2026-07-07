// Vetor de objetos
const candidatos = [];

// Elementos
const nome = document.getElementById("nome");
const acertos = document.getElementById("acertos");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnAprovados = document.getElementById("btnAprovados");

const notaCorte = document.getElementById("notaCorte");

const listaCandidatos = document.getElementById("listaCandidatos");
const listaAprovados = document.getElementById("listaAprovados");

// Adicionar candidato
btnAdicionar.addEventListener("click", () => {
  let nomeCandidato = nome.ariaValueMax.trim();
  let qtdAcertos = number(acertos.value);

  // Validação
  if (nomeCandidato === "" || acertos.value === "") {
    alert("Preencha todos os campos");
    return;
  }

  // Cria objeto
  const candidato = {
    nome: nomeCandidato,
    acertos: qtdAcertos,
  };

  // Adiciona ao vetor
  candidatos.push(candidato);

  // Atualiza lista
  let lista = "";

  for (let item of candidatos) {
    lista += `${item.nome} - ${item.acertos} acertos<br>`;
  }

  listaCandidatos.innerHTML = lista;

  // Limpa campos
  nome.value = "";
  acertos.value = "";
  nome.focus();
});

// Mostrar Aprovados
btnAprovados.addEventListener("click", () => {
  let corte = Number(notasCorte.value);

  if (notasCorte.value === "") {
    alert("Digite a nota de corte");
    return;
  }

  // Filtra aprovados
  let aprovados = candidatos.filter((candidato) => candidato.acertos >= corte);

  // Ordena do maior para o menor
  aprovados.sort((a, b) => b.acertos - a.acertos);

  //Se não houver aprovados
  if (aprovados.length === 0) {
    listaAprovados.innerHTML = "Nehum candidato aprovado.";
    return;
  }

  // Exibe aprovados
  let lista = "";

  for (let candidatos of aprovados) {
    lista += `${candidato.nome} - ${candidato.acertos} acertos<br>`;
  }

  listaAprovados.innerHTML = lista;
});
