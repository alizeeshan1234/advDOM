'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ------ Selecting Elements ------

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// ----- Creating and inserting Elements -----

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

header.prepend(message);
// header.append(message);
// header.before(message);
header.after(message);

// Delete Elements --------------------------

document.querySelector('.cookie-message').addEventListener('click', () => {
    message.remove();
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

// -- implementing Smoothscroll --

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', () => {
    section1.scrollIntoView({ behavior: 'smooth' });
    const nav = document.querySelector('.nav');
    const cordinates = section1.getBoundingClientRect();

    window.addEventListener('scroll', () => {
        if (window.scrollY > cordinates.top) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky')
        }
    })
});

// const btnScrollSec2 = document.querySelector('#operations');
// const section2 = document.querySelector('#section--2');

// btnScrollSec2.addEventListener('click', (e) => {
//     e.preventDefault();
//     section2.scrollIntoView({ behavior: 'smooth' });
// });

// const btnScrollsec1 = document.querySelector('#features');

// btnScrollsec1.addEventListener('click', (e) => {
//     e.preventDefault();
//     section1.scrollIntoView({ behavior: 'smooth' });
// });

// const btnScrollSec3 = document.querySelector('#testimonial');
// const section3 = document.querySelector('#section--3');
// btnScrollSec3.addEventListener('click', (e) => {
//     e.preventDefault();
//     section3.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alerth1 = function (e) {
//     e.preventDefault();
//     alert('addEventListener : BrovoOO! You are reading the heading :D');
//     h1.removeEventListener('mouseenter', alerth1);
// };

// h1.addEventListener('mouseenter', alerth1);

// Event Deligation 
// Adding EventListener to the parent Element rather than all Child element

// document.querySelector('.nav__links').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);

//     if (e.target.classList.contains('nav__link')) {
//         const id = e.target.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }
// })

document.querySelector('.nav__links').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const h1 = document.querySelector('h1');
console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// h1.closest('.header').style.background = 'var(--gradient-primary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (element) {
    if (element !== h1) {
        element.style.fontSize = '2.7rem'
    }
})

const h3 = document.querySelector('#last');
[...h3.parentElement.childNodes].forEach((element) => {
    if (element === h3) {
        element.style.color = 'lightgreen';
    }
});

console.log(h1.parentNode);
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstChild);
console.log(h1.firstElementChild);
console.log(h1.lastChild);
console.log(h1.lastElementChild);
console.log(h1.previousSibling);
console.log(h1.previousElementSibling);
console.log(h1.nextSibling);
console.log(h1.nextElementSibling);

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;

    // Active Tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    console.log(clicked.dataset.tab);
    // Active content area
    tabsContent.forEach(content => content.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu Fade Animation
(function () {
    const nav = document.querySelector('.nav');
    nav.addEventListener('mouseover', (e) => {
        e.preventDefault();
        console.log(e.target);

        if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');
            console.log(siblings);

            siblings.forEach(e => {
                if (e !== link) {
                    e.style.opacity = '0.5';
                }
            })
        }
    })
})();

(function () {
    const nav = document.querySelector('.nav');
    nav.addEventListener('mouseout', (e) => {
        e.preventDefault();
        console.log(e.target);

        if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link');
            console.log(siblings);

            siblings.forEach(e => {
                if (e !== link) {
                    e.style.opacity = '1';
                }
            })
        }
    })
})();

// ----- Implementing Sticky Navigation -----
const nav = document.querySelector('.nav');
const cords = section1.getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (window.scrollY > cords.top) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// -- Reveling Elements --

const sections = document.querySelectorAll('.section');
const revelSections = function (section) {
    const [entry] = section;

    if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
        observer.observe(entry.target);
    }
}

const sectionObserver = new IntersectionObserver(revelSections, {
    root: null,
    threshold: 0.15
});

sections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})