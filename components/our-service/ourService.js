// import Swiper, {navigation} from 'swiper';

class MySwiper {
    addInitialization() {     
        const swiper = new Swiper('.swiper', {
            // loop: true,
            autoHeight: false,
            slidesPerView: 3,
            slidesPerColumn: 2,
            speed: 600,
            spaceBetween: 20,
            slidesPerColumnFill: 'column'
          });
    };
};

export default new MySwiper();