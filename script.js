// whatsapp
function redirecionarParaWhatsApp() {
    window.open('https://api.whatsapp.com/message/GO2TMND4TM6EJ1?autoload=1&app_absent=0', '_blank');
}

// instagram
function redirecionarParaInstagram() {
    window.open('https://www.instagram.com/consultoria.wg/', '_blank');
}


var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3
        }
    },
 });