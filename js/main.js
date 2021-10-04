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

/*====================================  SHOW SCROLL UP =====================================*/

const scrollUp = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
    if (this.scrollY >= 200) {
        scrollUp.classList.add('scrollup--show');
    } else {
        scrollUp.classList.remove('scrollup--show');
    }
});

/*============================== SCROLL SECTIONS ACTIVE LINK =================================*/

const sections = document.querySelectorAll('section[id]');

const activeSectionScroll = () => {
    const verticalScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (verticalScroll > sectionTop && verticalScroll <= sectionTop + sectionHeight) {
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', activeSectionScroll);

/*============================== DARK/LIGHT THEME =================================*/

const themeBtn = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// console.log(selectedTheme);
// console.log(selectedIcon);

// We get the current theme that the interface has by validating the theme-dark class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeBtn.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// We validate if the user previously chooses a theme
if (selectedTheme) {
    // If the validation is fulfilled, the task was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / Deactivate the theme manually with the button
themeBtn.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: false,
});

sr.reveal(
    `.home--data, .home--social-link, .home--info,
           .discover--container, .place--container,
           .experience--data, .experience--overlay,
           .sponsor--content,
           .footer--data, .footer--rights`,
    {
        origin: 'top',
        interval: 100,
    }
);

sr.reveal(
    `.about--data, 
           .video--description,
           .subscribe--description`,
    {
        origin: 'left',
    }
);

sr.reveal(
    `.about--img-overlay, 
           .video--content,
           .subscribe--form`,
    {
        origin: 'right',
        interval: 100,
    }
);
