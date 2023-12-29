let menubtn= document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".course-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });