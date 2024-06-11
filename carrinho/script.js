document.addEventListener("DOMContentLoaded", function () {
  var precoFinal = 0;
  const price1 = 650;
  const price2 = 550;
  let totalMonitor = 1;
  let totalControle = 2;
  const finalPrice = document.getElementById("finalPrice");
  const finalPrice2 = document.getElementById("finalPrice2");
  const monitorPrice = document.getElementById("individualMonitorPrice");
  const controllerPrice = document.getElementById("individualControllerPrice");
  const selectMonitor = document.getElementById("selectMonitor");
  const selectController = document.getElementById("selectController");

  function atualizarPrecoFinal() {
    precoFinal = 0;
    if (selectMonitor.checked) {
      precoFinal += totalMonitor * price1;
    }
    if (selectController.checked) {
      precoFinal += totalControle * price2;
    }
    finalPrice.textContent = "R$" + precoFinal.toFixed(2);
    finalPrice2.textContent = "R$" + precoFinal.toFixed(2);
  }

  function atualizarPrecoIndividual(quantidade, price, priceElement) {
    let novoPreco = quantidade * price;
    priceElement.textContent = "R$" + novoPreco.toFixed(2);
  }

  function incrementarQuantidade(elemento, price, checkbox, priceElement) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    quantidadeAtual++;
    display.textContent = quantidadeAtual;
    atualizarPrecoIndividual(quantidadeAtual, price, priceElement);
    if (checkbox.checked) {
      precoFinal += price;
      finalPrice.textContent = "R$" + precoFinal.toFixed(2);
      finalPrice2.textContent = "R$" + precoFinal.toFixed(2);
    }
    return quantidadeAtual;
  }

  function decrementarQuantidade(elemento, price, checkbox, priceElement) {
    var display = document.getElementById(elemento);
    var quantidadeAtual = parseInt(display.textContent);
    if (quantidadeAtual > 1) {
      quantidadeAtual--;
      display.textContent = quantidadeAtual;
      atualizarPrecoIndividual(quantidadeAtual, price, priceElement);
      if (checkbox.checked) {
        precoFinal -= price;
        finalPrice.textContent = "R$" + precoFinal.toFixed(2);
        finalPrice2.textContent = "R$" + precoFinal.toFixed(2);
      }
    }
    return quantidadeAtual;
  }

  document.getElementById("increment").addEventListener("click", function () {
    totalMonitor = incrementarQuantidade(
      "quantity",
      price1,
      selectMonitor,
      monitorPrice
    );
  });

  document.getElementById("decrement").addEventListener("click", function () {
    totalMonitor = decrementarQuantidade(
      "quantity",
      price1,
      selectMonitor,
      monitorPrice
    );
  });

  document.getElementById("increment2").addEventListener("click", function () {
    totalControle = incrementarQuantidade(
      "quantity2",
      price2,
      selectController,
      controllerPrice
    );
  });

  document.getElementById("decrement2").addEventListener("click", function () {
    totalControle = decrementarQuantidade(
      "quantity2",
      price2,
      selectController,
      controllerPrice
    );
  });

  document
    .getElementById("removeMonitor")
    .addEventListener("click", function () {
      totalMonitor = 0;
      var monitorSection = document.getElementById("monitor-section");
      monitorSection.style.display = "none";
      selectMonitor.checked = false;
      monitorPrice.textContent = "R$0,00";
      atualizarPrecoFinal();
    });

  document
    .getElementById("removeController")
    .addEventListener("click", function () {
      totalControle = 0;
      var controllerSection = document.getElementById("controller-section");
      controllerSection.style.display = "none";
      selectController.checked = false;
      controllerPrice.textContent = "R$0,00";
      atualizarPrecoFinal();
    });

  selectMonitor.addEventListener("change", atualizarPrecoFinal);
  selectController.addEventListener("change", atualizarPrecoFinal);

  const updateCart = document.getElementById("updateCart");
  updateCart.addEventListener("click", function () {
    window.location.href = "/carrinho/index.html";
  });

  const applyCoupon = document.getElementById("applyCoupon");
  applyCoupon.addEventListener("click", function () {
    window.alert("Cupom aplicado!");
  });

  const home = document.getElementById("home");
  home.addEventListener("click", function () {
    window.location.href = "/tela inicial/index.html";
  });

  const signIn = document.getElementById("sign-in");
  signIn.addEventListener("click", function () {
    window.location.href = "/tela de login/index.html";
  });

  const pagamento = document.getElementById("pagamento");
  pagamento.addEventListener("click", function () {
    window.alert("Pagamento realizado!");
  });

  atualizarPrecoFinal();
});

const voltarinicio = document.getElementById("voltar-inicio");
voltarinicio.addEventListener("click", function () {
  window.location.href = "/tela inicial/index.html";
});
