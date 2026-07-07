const supermercadoPromocao = () => {
  let produto = document.querySelector("#produto").value;
  let preco = Number(document.querySelector("#preco").value);
  let calculoPromocao = preco * 2.5;

  let saidaPromocao = document.querySelector("#saidaPromocao");
  saidaPromocao.innerHTML = `O valor de 3 unidades do produto ${produto} com a promoção é de R$: ${calculoPromocao.toFixed(2)}`;
};

let calcularPromocao = document.querySelector("#calcularPromocao");
calcularPromocao.addEventListener("click", supermercadoPromocao);
