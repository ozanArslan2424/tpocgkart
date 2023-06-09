let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoFrames = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {

    logoFrames.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("active");
      }, (index + + 1) * 400)
    });



    setTimeout(() => {
      intro.style.top = "-100vh";
      // intro.style.opacity = "0"
    }, 2600);

    setTimeout(() => {
      intro.style.display = "none";
    }, 4000);
  })
})
