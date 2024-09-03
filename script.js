// Hamburger
const hamburgerOutside = document.querySelector(".lines");
const hamburgerInside =  document.getElementById("menu");
const section = document.querySelectorAll(".menu-a");
const mask = document.querySelector(".mask");

hamburgerOutside.addEventListener("click", function () {
  hamburgerOutside.classList.toggle("active");
  hamburgerInside.classList.toggle("active");
  mask.classList.toggle("active");
});

section.forEach((section)=> {
  section.addEventListener("click", function() {
    hamburgerOutside.classList.remove("active");
    hamburgerInside.classList.remove("active");
    mask.classList.remove("active");
  })
})

// Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 20, 
  // pagination: {
  //   el: '.swiper-pagination',
  // },
});