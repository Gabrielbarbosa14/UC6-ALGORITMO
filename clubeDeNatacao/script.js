const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const btnMostrar = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

// Função que cria os traços
function retornarTracos(nome) {
  let tracos = "";

  for (let letra of nome) {
    if (letra === " ") {
      tracos += " ";
    } else {
      tracos += "-";
    }
  }

  return tracos;
}

// Função que retorna a categoria
function categorizarAluno(idade) {
  if (idade <= 12) {
    return "Infantil";
  } else if (idade <= 18) {
    return "Juvenil";
  } else {
    return "Adulto";
  }
}

// Evento do botão
btnMostrar.addEventListener("click", () => {
  const nomeAtleta = nome.value;
  const idadeAtleta = Number(idade.value);

  if (nomeAtleta === "" || idadeAtleta <= 0) {
    alert("Preencha os dados corretamente");
    return;
  }

  let tracos = retornarTracos(nomeAtleta);

  let categoria = categorizarAluno(idadeAtleta);

  resultado.innerHTML = `
        <strong>${nomeAtleta}</strong><br>
        ${tracos}<br><br>
        Categoria: <strong>${categoria}</strong>
    `;
});
