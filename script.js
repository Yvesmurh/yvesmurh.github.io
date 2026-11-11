/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});




/* ===================================
   TYPING EFFECT
/* ===================================
     script.js — cleaned & style50-formatted
     - consistent 2-space indentation
     - guard clauses for DOM access
     - concise, readable blocks
=================================== */

'use strict';

/* -----------------------------------
     LOADER
----------------------------------- */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (!loader) return;
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
});


/* -----------------------------------
     TYPING EFFECT
----------------------------------- */
const titles = [
    'Computer Science Student',
    'Aspiring Data Scientist',
    'Software Engineering Enthusiast'
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingElement = document.getElementById('typing');

function typeEffect() {
    if (!typingElement) return;
    const currentTitle = titles[titleIndex];

    if (!deleting) {
        typingElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentTitle.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            titleIndex++;
            if (titleIndex >= titles.length) titleIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


/* -----------------------------------
     MOBILE MENU
----------------------------------- */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}


/* -----------------------------------
     PORTFOLIO FILTER
----------------------------------- */
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterButtons.length && portfolioCards.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter || 'all';

            portfolioCards.forEach(card => {
                const category = card.dataset.category || '';

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(.8)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });
}


/* -----------------------------------
     SCROLL PROGRESS BAR
----------------------------------- */
window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100 || 0;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = `${progress}%`;
}, { passive: true });


/* -----------------------------------
     BACK TO TOP BUTTON
----------------------------------- */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (!backToTop) return;
    if (window.scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
}, { passive: true });

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* -----------------------------------
     SCROLL REVEAL
----------------------------------- */
const hiddenElements = document.querySelectorAll('.stat-card, .info-card, .project-card');

hiddenElements.forEach(el => el.classList.add('hidden'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.15 });

hiddenElements.forEach(el => observer.observe(el));


/* -----------------------------------
     CONTACT FORM VALIDATION
----------------------------------- */
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.border = '1px solid red';
                valid = false;
            } else {
                input.style.border = '1px solid #d4b08c';
            }
        });

        // Valid: the form's mailto action opens the visitor's email app
        if (!valid) {
            e.preventDefault();
            alert('Please fill all fields.');
        }
    });
}


/* -----------------------------------
     SMOOTH NAVBAR HIGHLIGHT
----------------------------------- */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;
        if (pageYOffset >= top && pageYOffset < top + height) current = section.id;
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}, { passive: true });


/* -----------------------------------
     OPTIONAL FLOAT EFFECT
----------------------------------- */
const profile = document.querySelector('.profile-container');
if (profile) profile.classList.add('float');


