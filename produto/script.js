document.addEventListener("DOMContentLoaded", function () {
  const decreaseButton = document.getElementById("decrease-quantity");
  const increaseButton = document.getElementById("increase-quantity");
  const quantityDisplay = document.getElementById("quantity");
  const buyButton = document.getElementById("buy-button");
  const home = document.getElementById("home");
  const signIn = document.getElementById("sign-in");

  let quantity = 1;

  decreaseButton.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  increaseButton.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  buyButton.addEventListener("click", function () {
    window.location.href = "/carrinho/index.html";
  });

  home.addEventListener("click", function () {
    window.location.href = "/tela inicial/index.html";
  });
  signIn.addEventListener("click", function () {
    window.location.href = "/tela de login/index.html";
  });
});
