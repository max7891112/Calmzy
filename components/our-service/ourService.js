class MySwiper {
    addInitialization() {     
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 3000,
            running: true,
            grabCursor: true,
            autoplay: {
              delay: 1,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
              waitForTransition: true,
              stopOnLastSlide: false,
            },
            breakpoints: {
              320: {
                slidesPerView: 0.35,
              },
              400: {
                slidesPerView: 0.5,
              },
              500: {
                slidesPerView: 0.65,
              },
              600: {
                slidesPerView: 0.75,
              },
              700: {
                slidesPerView: 0.9,
              },
              800: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 1.1,
              },
          },
          });
    };
};

export default new MySwiper();