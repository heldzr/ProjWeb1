document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menuContent = document.querySelector(".header-inner-content");
  
    menuBtn.addEventListener("click", function () {
      menuContent.classList.toggle("show-menu");
    });
  });