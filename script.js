
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

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("contactForm");

  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      const whatsappNumber = "919490539941";

      const text =
`New Contact Form Message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

      const encodedText = encodeURIComponent(text);

      const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      window.open(url, "_blank");
    });
  }

});
