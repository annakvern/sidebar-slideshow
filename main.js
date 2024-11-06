window.addEventListener("DOMContentLoaded", main);

let visibleIndex = 0;

function main() {
  setInterval(changeImage, 3000);
  setupEventListeners();
}

function setupEventListeners() {
  const sidebarItems = document.querySelectorAll(".sidebarItem");
  for (item of sidebarItems) {
    item.addEventListener("click", showSelected);
  }
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

function showSelected(clickedItem) {
  // Remove "selected" class from any previously selected item
  const sidebarItems = document.querySelectorAll(".sidebarItem");
  for (item of sidebarItems) {
    item.classList.remove("selected");
  }

  // Add "selected" class to the clicked item
  clickedItem.currentTarget.classList.add("selected");
}

// När bildslidern är på plats är det dags att skapa sidebaren som ska
// ligga fixerad till vänster. Sidebaren ska kunna fällas ihop på desktop
// så att bara ikonerna syns. På mobilen skall den gömmas helt och visas när
// användaren klickar på en ikon som ligger uppe i vänster hörn.
// När användaren har valt en ikon ska sidebaren fällas ihop på datorn och
// gömmas helt på mobilen. Tänkt på att dela upp den här punkten i mindre
// delmål för att lyckas genomföra den.
