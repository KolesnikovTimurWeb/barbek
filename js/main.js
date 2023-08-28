const swiper3 = new Swiper('.holl-container ', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 30,

      },
      1000: {
         slidesPerView: 1,
         spaceBetween: 30,

      },

   },
   pagination: {
      el: ".swiper-pagination",
   },
});
const swiper2 = new Swiper('.sertifcat-container', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 30,

      },
      1000: {
         slidesPerView: 1,
         spaceBetween: 30,

      },

   },
   pagination: {
      el: ".swiper-pagination",
   },
   navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
   },
});
const swiper4 = new Swiper('.news-container', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 30,

      },
      1000: {
         slidesPerView: 1,
         spaceBetween: 30,

      },

   },
   pagination: {
      el: ".swiper-pagination",
   },
   navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
   },
});
const swiper5 = new Swiper('.trofey-container', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 30,

      },
      1000: {
         slidesPerView: 4,
         spaceBetween: 30,

      },

   },
   pagination: {
      el: ".swiper-pagination",
   },
   navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
   },
});

let headerBurger = document.querySelector('.burger-menu')
let headerNav = document.querySelector('.header-nav')

headerBurger.addEventListener('click', () => {
   headerNav.classList.toggle('active')
   headerBurger.classList.toggle('active')
})


