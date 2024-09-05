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

// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    const targetSection = document.querySelector(href);
    const sectionTop = targetSection.getBoundingClientRect().top;
    const currentPos = window.scrollY;
    const target = sectionTop + currentPos;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 60,
  centeredSlides: true,
  loop: true,

  // breakpoints: {
  //   600: {
  //     slidesPerView: 1,
  //     spaceBetween: 40,
  //   },
  // },

  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    690: { 
      slidesPerView: 2,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1,
    },
    100: {
      slidesPerView: 1,
    }
  },
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