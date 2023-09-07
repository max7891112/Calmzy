class FeedbackSwiper {
  addInitialization() {     
    const swiper = new Swiper('.feedback__swiper', {
      loop: true,
      speed: 600,
      grabCursor: true,
      slidesPerView: 3.2,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1.4,
        },
        600: {
          slidesPerView: 1.6,
        },
        700: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 2.2,
        },
        900: {
          slidesPerView: 2.6,
        },
        1200: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 3.2,
        },
      },
    });
  };
};

export default new FeedbackSwiper();