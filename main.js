const sideBtn = document.querySelector(".side-btn");
const navIcons = document.querySelector("nav .side-icons");
const list = document.querySelector(".list");
const nav = document.querySelector(".nav-content");



// nav bar
sideBtn.addEventListener("click", () => {
  console.log('lll')
  sideBtn.children[0].classList.toggle("toggle");


  list.classList.toggle('show')
  navIcons.classList.toggle('show')
  nav.classList.toggle('show')


});