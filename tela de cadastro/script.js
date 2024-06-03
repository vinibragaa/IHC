const signIn = document.getElementById("sign-in");
signIn.addEventListener("click", function () {
  window.location.href = "/tela de login/index.html";
});

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  verifyEmail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (verifyEmail(email)) {
    alert(
      `Cadastro realizado com sucesso! dados: ` +
        `nome: ${name}, ` +
        `email: ${email}, ` +
        `senha: ${password}`
    );
  } else {
    alert("Por favor, insira um endereço de e-mail válido.");
  }
});

const home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = "/tela inicial/index.html";
});

const signUp = document.getElementById("sign-up");
signUp.addEventListener("click", function () {
  window.location.href = "/tela de login/index.html";
});
