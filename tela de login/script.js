const logIn = document.getElementById("log-in");

logIn.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  window.alert(`Email: ${email} \n Senha: ${password}`)
});

const signIn = document.getElementById("sign-in");
signIn.addEventListener("click", function () {
  window.location.href = "/tela de login/index.html";
});
const home = document.getElementById("homeheader");
home.addEventListener("click", function () {
  window.location.href = "/tela inicial/index.html";
});

const btncadastrar = document.getElementById("btncadastrar");
btncadastrar.addEventListener("click", function() {
  window.location.href = "/tela de cadastro/index.html";
});