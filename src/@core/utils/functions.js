export function scrollToSection (id) {
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
}

export function toggleNavShadow () {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 75) {
        navbar.classList.add('shadow-nav');
    } else {
        navbar.classList.remove('shadow-nav');
    }
}