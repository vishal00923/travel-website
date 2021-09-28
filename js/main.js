/*=============================== SHOW MENU ====================================*/

const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

let navMenu = document.getElementById('nav-menu');

// Show Menu
/* validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Close Menu
/* validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============================== MOBILE MENU REMOVE ================================*/

const navLinks = document.querySelectorAll('.nav--link');

// console.log(navLink);

navLinks.forEach((navLink) =>
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
);

/*=============================== CHANGE BACKGROUND HEADER ================================*/

const scrollHeader = () => {
    const header = document.getElementById('header');

    // console.log(this);

    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};

window.addEventListener('scroll', scrollHeader);
