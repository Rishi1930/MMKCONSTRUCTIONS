
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  console.log(hamburger);
  console.log(menu);

  hamburger.addEventListener("click", function () {
    console.log("Clicked");
    menu.classList.toggle("active");
  });
});

console.log("JS Loaded");
