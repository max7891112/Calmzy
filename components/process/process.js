class Procces {

    visibleElement () {
        const elements = document.querySelectorAll('.process__item');
        let counter = 1;

        const Visible = function (arrItems) {
            arrItems.forEach( elem => {
                elem.addEventListener('click', () => {
                    arrItems[counter].classList.remove('p-anim__item');
                    if (counter < arrItems.length) counter++;
                    if(counter == arrItems.length) {
                        counter = 0;
                    };
                });
            });
        };

        Visible(elements);
    }
};

export default new Procces();