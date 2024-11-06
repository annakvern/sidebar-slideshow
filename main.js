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
    item.addEventListener("click", collapseSidebar);
  }
  burgerMenu.addEventListener("click", expandSidebar);
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

function collapseSidebar() {
  sidebar.style.width = "3.5rem";
  profile.style.display = "none";

  const sidebarItems = document.querySelectorAll(".sidebarItem");
  for (let item of sidebarItems) {
    item.style.width = "3.4rem";
    // Select the span within each sidebarItem and hide it
    const spanToHide = item.querySelector("span");
    if (spanToHide) {
      spanToHide.style.display = "none";
    }
  }
  settings.style.display = "none";
}

function expandSidebar() {
  sidebar.style.display = "block";
  sidebar.style.width = "10rem";
  profile.style.display = "block";

  const sidebarItems = document.querySelectorAll(".sidebarItem");
  for (let item of sidebarItems) {
    item.style.width = "9.9rem";
    // Select the span within each sidebarItem and hide it
    const spanToShow = item.querySelector("span");
    if (spanToShow) {
      spanToShow.style.display = "block";
    }
  }
  settings.style.display = "block";
}

// När bildslidern är på plats är det dags att skapa sidebaren som ska
// ligga fixerad till vänster. Sidebaren ska kunna fällas ihop på desktop
// så att bara ikonerna syns. På mobilen skall den gömmas helt och visas när
// användaren klickar på en ikon som ligger uppe i vänster hörn.
// När användaren har valt en ikon ska sidebaren fällas ihop på datorn och
// gömmas helt på mobilen. Tänkt på att dela upp den här punkten i mindre
// delmål för att lyckas genomföra den.
