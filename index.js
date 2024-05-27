//navigational bar/menu bar
const menu = document.querySelector('.menu')
const screenMenu = document.querySelector('.screen-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  screenMenu.classList.toggle('active')
})


//the effect for the carousel
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.caro');
let listHTML = document.querySelector('.caro .list');

//the function for the next button
nextButton.onclick = function(){
    showSlider('next');
}

//function for the pevious button
prevButton.onclick = function(){
    showSlider('prev');
}

let unAcceptClick;

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.caro .list .item');
    if (type === 'next') { //the next buttom is click
        listHTML.appendChild(items[0]); //the next item will shown
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);//the previous item will be shown
        carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

////////////////////
