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

/*=============================== SWIPER DISCOVER ================================*/

var swiper = new Swiper('.discover--container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*==================================== VIDEO =====================================*/

const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

// play and pause functionality
const playPause = () => {
    if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove('ri-pause-line');
    }
};

videoButton.addEventListener('click', playPause);

// video end functionality
const videoEnd = () => {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
};

videoFile.addEventListener('ended', videoEnd);

/*==================================== SWIPER PLACE =====================================*/

var swiper = new Swiper('.place--container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});
