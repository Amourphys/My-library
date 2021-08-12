import $ from '../core';

$.prototype.modal = function() {
    //let scroll = calcScroll();
    let modalContent = document.querySelector('.modal-content');
    let paddingOffsetNow = window.innerWidth - document.body.offsetWidth + 'px';
    console.log(paddingOffsetNow);
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            //document.body.style.marginRight = `${scroll}px`;
            modalContent.style.marginRight = modalContent.style.marginRight + paddingOffsetNow;
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    calcScroll();
    
    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            paddingOffsetNow = null;
            //modalContent.style.marginRight = modalContent.style.marginRight - paddingOffsetNow;
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            paddingOffsetNow = null;
            //modalContent.style.marginRight = modalContent.style.marginRight - paddingOffsetNow;
        }
    });

};

/* $.prototype.moveX = function(move) {
    for (let i = 0; i < this.length; i++) {
        if (!move) {
            this[i].style.transform = '';
        } else {
            this[i].style.transform = `TranslateX(${move}px)`;
        }
    }
}; */

$('[data-toggle="modal"]').modal();