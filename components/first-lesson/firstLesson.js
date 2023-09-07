class firstLesson {

    visibleElement() {
        const wrapper = document.querySelector('.first-lesson__img-wrapper');
        const title = document.querySelector('.first-lesson__title-main');
        const btn = document.querySelector('.first-lesson__button-choice');
        const text = document.querySelector('.first-lesson__text-block');

        const Visible = function (target) {

            const targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            };

            const windowPosition = {
                top: window.pageYOffset,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom) // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            {   // Если элемент полностью видно, то запускаем следующий код
                if( text.classList.contains('f-l-anim__hidden') ) {

                    setTimeout( () => {

                        text.classList.remove('f-l-anim__hidden');
                        btn.classList.remove('f-l-anim__hidden');
                        title.classList.remove('f-l-anim__title');
                        wrapper.classList.remove('f-l-anim__wrapper');
                    }, 500 );

                }

            };

        };

        window.addEventListener('scroll', function () {
            Visible(title);
        });

        // А также запустим функцию сразу. А то вдруг, элемент изначально видно
        Visible(title);


    }
}

export default new firstLesson();