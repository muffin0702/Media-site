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
});

// Feature
document.addEventListener('scroll', function() {
  document.querySelectorAll('.fadein img').forEach(function(image) {
      let scroll = window.scrollY;
      let target = image.getBoundingClientRect().top + window.scrollY;
      let windowHeight = window.innerHeight;
      
      if (scroll > target - windowHeight + 200) {
          image.style.opacity = '1';
          image.style.transform = 'translateY(0)';
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fadein img').forEach(function(image) {
      image.style.opacity = '0';
      image.style.transform = 'translateY(20px)';
      image.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
});