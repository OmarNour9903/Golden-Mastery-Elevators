const navLinks = document.querySelectorAll('.nav__link');
const sections = {
    '#home': '.information',
    '#offers': '.services',
    '#services': '.products',
    '#projects': '.projects',
    '#contact': '.contact'
};

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = sections[this.getAttribute('href')];
        if (targetSection) {
            document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
