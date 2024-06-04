document.addEventListener("DOMContentLoaded", function () {
  var precoFinal = 0;
  const price1 = 650;
  const price2 = 550;
  let totalMonitor = 1;
  let totalControle = 1;
  const finalPrice = document.getElementById("finalPrice");
  const finalPrice2 = document.getElementById("finalPrice2")
  const monitorPrice = document.getElementById("monitorPrice");
  const controllerPrice = document.getElementById("controllerPrice");

  precoFinal = totalMonitor*price1 + totalControle*price2;

  function incrementarQuantidade(elemento) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    quantidadeAtual++;
    display.textContent = quantidadeAtual;
    return quantidadeAtual;
  }

  function decrementarQuantidade(elemento) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    if (quantidadeAtual > 1) {
      quantidadeAtual--;
      display.textContent = quantidadeAtual;
    }
    return quantidadeAtual;
  }

  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  incrementButton.addEventListener("click", function () {
    totalMonitor = incrementarQuantidade("quantity");
    precoFinal = totalMonitor*price1 + totalControle*price2;
    let total = document.getElementById("individualMonitorPrice");
    let num = totalMonitor*price1
    total.textContent = "R$" + num.toFixed(2);
    finalPrice.textContent = precoFinal;
    finalPrice2.textContent = precoFinal;
  });

  decrementButton.addEventListener("click", function () {
    totalMonitor = decrementarQuantidade("quantity");
    precoFinal = totalMonitor*price1 + totalControle*price2;
    let total = document.getElementById("individualMonitorPrice");
    let num = totalMonitor*price1;
    total.textContent = "R$" + num.toFixed(2);
    finalPrice.textContent = precoFinal;
    finalPrice2.textContent = precoFinal;
  });

  const incrementButton2 = document.getElementById("increment2");
  const decrementButton2 = document.getElementById("decrement2");

  incrementButton2.addEventListener("click", function () {
    totalControle = incrementarQuantidade("quantity2");
    precoFinal = totalMonitor*price1 + totalControle*price2;
    let total = document.getElementById("individualControllerPrice");
    let num = totalControle*price2;
    total.textContent = "R$" + num.toFixed(2);
    finalPrice.textContent = precoFinal;
    finalPrice2.textContent = precoFinal;
  });

  decrementButton2.addEventListener("click", function () {
    totalControle = decrementarQuantidade("quantity2");
    precoFinal = totalMonitor*price1 + totalControle*price2;
    let total = document.getElementById("individualControllerPrice");
    let num = totalControle*price2;
    total.textContent = "R$" + num.toFixed(2);
    finalPrice.textContent = precoFinal;
    finalPrice2.textContent = precoFinal;
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

const pagamento = document.getElementById("pagamento");
pagamento.addEventListener("click", function () {
  window.alert("Pagamento realizado!")
});