import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 
class BestSpecAnimation {
    addInitialization() {     
        gsap.to('.best-spec__card',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
        })
         gsap.to('.card__title',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
        })

        gsap.to('.card__text',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
            delay: 0.6,
        })

        gsap.to('.card__price',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
            delay: 0.9,
        })
        gsap.to('.card__gift',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
            delay: 1.2,
        })

        gsap.to('.card__img-container',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 0.5,
            delay: 1.5,
        })
    };
};

export default new BestSpecAnimation();