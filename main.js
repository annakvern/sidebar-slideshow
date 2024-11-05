window.addEventListener("DOMContentLoaded", main);

let visibleIndex = 0;

function main() {
  setInterval(changeImage, 3000);
}

function changeImage() {
  const images = document.querySelector(".slideshow-container").children; //hämta det första html elementet som matchar det här
  images[visibleIndex].classList.remove("visible");
  visibleIndex = (visibleIndex + 1) % images.length;
  // visibleIndex++;
  // if (visibleIndex >= images.length) {
  //   visibleIndex = 0;
  // }
  images[visibleIndex].classList.add("visible");
}
