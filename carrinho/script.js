document.addEventListener("DOMContentLoaded", function () {
  function incrementarQuantidade(elemento) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    display.textContent = quantidadeAtual + 1;
  }

  function decrementarQuantidade(elemento) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    if (quantidadeAtual > 1) {
      display.textContent = quantidadeAtual - 1;
    }
  }

  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  incrementButton.addEventListener("click", function () {
    incrementarQuantidade("quantity");
  });

  decrementButton.addEventListener("click", function () {
    decrementarQuantidade("quantity");
  });

  const incrementButton2 = document.getElementById("increment2");
  const decrementButton2 = document.getElementById("decrement2");

  incrementButton2.addEventListener("click", function () {
    incrementarQuantidade("quantity2");
  });

  decrementButton2.addEventListener("click", function () {
    decrementarQuantidade("quantity2");
  });

  const home = document.getElementById("home");
  const home2 = document.getElementById("home2");
  home.addEventListener("click", function () {
    window.location.href = "/tela inicial/index.html";
  });

  home2.addEventListener("click", function () {
    window.location.href = "/tela inicial/index.html";
  });

  const signIn = document.getElementById("sign-in");
  signIn.addEventListener("click", function () {
    window.location.href = "/tela de login/index.html";
  });
});
