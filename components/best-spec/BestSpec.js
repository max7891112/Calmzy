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
            duration: 1,
        })
         gsap.to('.card__title',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 1,
            delay: 0.5,
        })

        gsap.to('.card__text',{
            scrollTrigger: {
                trigger: '.our-service',
                start: 'center top',
            },
            opacity: 1,
            duration: 1,
            delay: 1,
        })
    };
};

export default new BestSpecAnimation();