const burgerBtn = document.querySelector(`.nav-button`);
const minNav = document.querySelector(`.min-nav`);
const minNavCross = document.querySelector(`.min-nav__cross`);

burgerBtn.addEventListener(`click`, () => {
    minNav.classList.add(`active`);
    document.body.style.overflow = `hidden`;

    setTimeout(() => {
        document.body.classList.add(`white`);
    }, 300);
})

minNavCross.addEventListener(`click`, () => {
    minNav.classList.remove(`active`);
    document.body.style.overflow = `visible`;
    document.body.classList.remove(`white`);

})

AOS.init();