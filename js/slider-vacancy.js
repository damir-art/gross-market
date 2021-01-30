let   positionV       = 0;
const slidesToShowV   = 3; // сколько элементов показывать
const slidesToScrollV = 1; // сколько элементов проскроливать
const containerV      = document.querySelector('.vacancy-container');
const trackV          = document.querySelector('.vacancy-track');
const btnPrevV        = document.querySelector('.btn-prev-vac');
const btnNextV        = document.querySelector('.btn-next-vac');
const itemsV          = document.querySelectorAll('.vacancy__item');
const itemsCountV     = itemsV.length;
const itemWidthV      = containerV.clientWidth / slidesToShowV;
const movepositionV   = slidesToScrollV * itemWidthV;

itemsV.forEach((item) => {
    // item.style.minWidth = `${itemWidthV}px`;
    item.style.minWidth = `${350}px`;
});

btnNextV.addEventListener('click', () => {
    const itemsLeft = itemsCountV - (Math.abs(positionV) + slidesToShowV * itemWidthV) / itemWidthV;
    
    positionV -= itemsLeft >= slidesToScrollV ? movepositionV : itemsLeft * itemWidthV;

    setpositionV();
    checkBtnsV();
});

btnPrevV.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionV) / itemWidthV;

    positionV += itemsLeft >= slidesToScrollV ? movepositionV : itemsLeft * itemWidthV;

    setpositionV();
    checkBtnsV();
});

const setpositionV = () => {
    trackV.style.transform = `translateX(${positionV}px)`;
}

// Проверка кнопок
const checkBtnsV = () => {
    btnPrevV.disabled = positionV === 0;
    
    btnNextV.disabled = positionV <= -(itemsCountV - slidesToShowV) * itemWidthV;
}

checkBtnsV();
