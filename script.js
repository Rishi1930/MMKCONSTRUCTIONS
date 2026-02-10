const homePage = document.getElementById("homePage");
const infoPage = document.getElementById("infoPage");

const exploreBtn = document.getElementById("exploreBtn");
const backBtn = document.getElementById("backBtn");
const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");

window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
    title.style.transition = "all 1s ease";
  }, 300);
});

function showHome() {
  infoPage.classList.add("hidden");
  homePage.style.display = "flex";
}

function showInfo() {
  homePage.style.display = "none";
  infoPage.classList.remove("hidden");
}

exploreBtn.onclick = showInfo;
backBtn.onclick = showHome;
navHome.onclick = showHome;
navAbout.onclick = showInfo;
