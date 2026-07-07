const produto = document.getElementById("produto");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

// Recupera a lista salva ou cria uma vazia
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Exibe os produtos ao abrir a página
mostrarProdutos();

btnAdicionar.addEventListener("click", () => {
  let nomeProduto = produto.value.trim();

  if (nomeProduto === "") {
    alert("Informe um produto.");
    return;
  }

  produtos.push(nomeProduto);

  // Ordena em ordem alfabética
  produtos.sort((a, b) => a.localeCompare(b));

  // Salva no localStorage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  mostrarProdutos();

  produto.value = "";
  produto.focus();
});

function mostrarProdutos() {
  lista.innerHTML = "";

  for (let item of produtos) {
    lista.innerHTML += `<li>${item}</li>`;
  }
}
