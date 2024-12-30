// Hamburger menu functionality
const hamburgerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');

hamburgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--active');
});

// Carousel functionality
const carouselItems = document.querySelectorAll('.hero__image');
let currentIndex = 0;

function showNextItem() {
    carouselItems[currentIndex].classList.remove('hero__image--active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('hero__image--active');
}

setInterval(showNextItem, 5000);