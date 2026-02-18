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

const contactBtn = document.querySelectorAll("#contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");
const sendWhatsApp = document.getElementById("sendWhatsApp");

contactBtn.forEach(btn => {
  btn.onclick = () => {
    contactModal.classList.remove("hidden");
  };
});

closeModal.onclick = () => {
  contactModal.classList.add("hidden");
};

sendWhatsApp.onclick = () => {
  const name = document.getElementById("userName").value;
  const phone = document.getElementById("userPhone").value;
  const area = document.getElementById("userArea").value;
  const msg = document.getElementById("userMsg").value;

  if (!name || !phone || !area || !msg) {
    alert("Please fill all fields");
    return;
  }

  const text = `Hello MMK Constructions,%0A%0AName: ${name}%0APhone: ${phone}%0A%0AArea: ${area}%0A%0AMessage:%0A${msg}`;
  const url = `https://wa.me/919490539941?text=${text}`;

  window.open(url, "_blank");
};

const video = document.querySelector(".bg-video");

video.addEventListener("loadeddata", () => {
  video.play();
});
