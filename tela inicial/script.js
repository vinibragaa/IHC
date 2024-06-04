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

const images = [
  "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg",
  "https://c.animaapp.com/SiCCbQBA/img/hero-endframe--cvklg0xk3w6e-large-2@2x.png",
];

let index = 0;
const slider = document.getElementById("slider");
slider.style.transition = "transform 0.5s ease-in-out";
console.log(slider);

function updateImage() {
  slider.style.transform = "translateX(-100%)";
  slider.style.transition = "transform 0.5s ease-in-out";

  setTimeout(() => {
    slider.src = images[index];

    slider.style.transition = "none";
    slider.style.transform = "translateX(100%)";

    requestAnimationFrame(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = "translateX(0)";
    });
  }, 500);
}

setInterval(() => {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateImage();
}, 3000);
