document.getElementById("icon-send").addEventListener("click", function () {
  const email = document.getElementById("enter-your-email").value;
  window.location.href = `mailto:${email}`;
});

const iconArrowUp = document.getElementById("icon-arrow-up");
iconArrowUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const signIn = document.getElementById("sign-in");
signIn.addEventListener("click", function () {
  window.location.href = "/tela de login/index.html";
});

const viewAllProducts = document.getElementById("view-all-products");
viewAllProducts.addEventListener("click", function () {
  window.location.href = "/produto/index.html";
});
