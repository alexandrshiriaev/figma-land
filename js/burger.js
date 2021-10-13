const burger = document.querySelector('.header__burger');
const navbar = document.querySelector('.navbar');
const loginBtn = document.querySelector('.header__btn');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
        loginBtn.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden')
    })
}