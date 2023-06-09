
const dwnldBtn = document.getElementById("printCard");
const cardImg = document.querySelector("#cardDwnld");
const findScale = document.getElementById("application")
dwnldBtn.addEventListener("click", () => {
  findScale.classList.remove("scaled");
  html2canvas(cardImg, { dpi: 300 }).then(canvas => {

   // Create a new anchor element to download the image
   const downloadLink = document.createElement('a');
   downloadLink.href = canvas.toDataURL('image/jpeg');
   downloadLink.download = `TPÖÇGKart'ım.jpg`;
   downloadLink.click();
 });
 findScale.classList.add("scaled");
})