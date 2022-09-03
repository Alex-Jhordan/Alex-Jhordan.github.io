const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('show');
    menuList.classList.toggle('show');
})

menuLink.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.toggle('show');
        menuList.classList.toggle('show');
    })
});