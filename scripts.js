// Smooth Scroll Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset to account for fixed header
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar
window.onscroll = function() {
    let nav = document.querySelector('header');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

// Scroll Animations
// Use the Intersection Observer API to animate sections when they come into view.
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null, // Viewport is the root
    threshold: 0.5 // 50% of the section is in view
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);
sections.forEach(section => observer.observe(section));

// Optional: Contact Form Validation (Client-Side)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Basic Validation
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
        return false;
    }

    // Basic Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return false;
    }

    // If everything is valid, allow form submission
    return true;
});
