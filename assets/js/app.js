const btnToggle = document.querySelector('.menu__toggle');
const menuMobile = document.querySelector('.menu__mobile')
const closeMenuMobile = document.querySelector('.menu__mobile__close');

btnToggle.addEventListener('click',()=>{
    menuMobile.classList.add('menu__mobile__active')
})

closeMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('menu__mobile__active')
})

const searchbar = document.querySelector('.menu__search__row');
document.querySelector('.menu__search').addEventListener('click',function () {
    searchbar.classList.add('active')
})


document.querySelector('.menu__search__row__close').addEventListener('click',function () {
    searchbar.classList.remove('active')
})