const mostrarNome = () => {
  let inputNome = document.querySelector("#texto").value.trim();
  let nome = document.querySelector("#nome");

  nome.innerText = `Olá, ${inputNome}`;
};

let mostrar = document.querySelector("#mostrar");
mostrar.addEventListener("click", mostrarNome);

let inputTexto = document.querySelector("#texto");
inputTexto.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    mostrar.click();
  }
});
