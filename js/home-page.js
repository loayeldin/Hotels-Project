
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
  
      menuToggle.classList.toggle("active");
      console.log('work');
    });
   
  });