class Calm {

    visibleElement() {
        const items = document.querySelectorAll('.calm__item');
        
        const Visible = function (arrItems) {

            arrItems.forEach( (item, i) => {
                item.addEventListener('click', () => {
                    for(let j = 0; j < arrItems.length; j++) {
                        if(i !== j) {
                            arrItems[j].querySelector('.calm__item-subtitle').classList.add('calm-anim__hidden');
                            arrItems[j].querySelector('.calm__img').classList.remove('calm-anim__arrow');
                            arrItems[j].classList.remove('calm-anim__move');
                        };
                    };

                    item.querySelector('.calm__item-subtitle').classList.toggle('calm-anim__hidden');
                    item.classList.toggle('calm-anim__move');
                    item.querySelector('.calm__img').classList.toggle('calm-anim__arrow');

                })
            } );
        };

        Visible(items);
    }
    
}

export default new Calm ();