const produtos = document.querySelectorAll(".produto");
const cartoes = document.querySelectorAll(".cartao");

produtos.forEach((produto, indice) => {
  produto.addEventListener("click", () => {
    Desselecionarbotao();
    Desselecionarcartao();

    produto.classList.add("ativo");
    cartoes[indice].classList.add("ativo");
    
  });
});

function Desselecionarcartao() {
  const cartaoAtivo = document.querySelector(".cartao.ativo");
  cartaoAtivo.classList.remove("ativo");
}

function Desselecionarbotao() {
  const produtoAtivo = document.querySelector(".produto.ativo");
  produtoAtivo.classList.remove("ativo");
}
