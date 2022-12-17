/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')




/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content, .content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
  
  sr.reveal(`.home__title, .features__img, .featured__filters, .popupcontainer`)
  sr.reveal(`.home__subtitle`,{delay: 500})
  sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
  sr.reveal(`.about__group, .offer__data`,{origin: 'left'})
  sr.reveal(`.about__data, .offer__img`,{origin: 'right'})
  sr.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
  sr.reveal(`.features__card`,{interval: 300})
  sr.reveal(`.featured__card, .logos__content, .footer__content, .popupcontainer, .content`,{interval: 100})