let lnkData    = document.querySelector('.lnk-data');
let modal      = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

lnkData.addEventListener('click', function() {
    if(modal.classList.contains('modal--none')) {
        modal.classList.remove('modal--none')
    }
})

modalClose.addEventListener('click', function() {
    if(!modal.classList.contains('modal--none')) {
        modal.classList.add('modal--none')
    }
})