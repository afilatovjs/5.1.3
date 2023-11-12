let items = document.querySelector('.brands__items');
let allItems = document.querySelectorAll('.brands__item');
let buttonShow = document.querySelector('.show-all-button');
let buttonShowText = buttonShow.querySelector('.show-all-button_text');
let buttonShowIcon = buttonShow.querySelector('.show-all-button_img');

let isHidden = true;
isHidden ? hideItems() : showItems();

buttonShow.addEventListener('click', showHide)

function showHide(){
    isHidden ? hideItems() : showItems();
}

function hideItems(){
    isHidden = false;
    buttonShowText.textContent = 'Показать все';
    buttonShowIcon.style = 'transform: rotate(0deg)';
    items.classList.add('hidden');
}

function showItems(){
    isHidden = true;
    buttonShowText.textContent = 'Скрыть';
    buttonShowIcon.style = 'transform: rotate(180deg)';
    items.classList.remove('hidden');
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto',
});