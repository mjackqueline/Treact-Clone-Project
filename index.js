function openMenu () {
    document.body.classList += " menu--open"
}

function closeMenu () {
    document.body.classList.remove('menu--open')
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);

    const fadeInElementsFromBottom = document.querySelectorAll('.fade-in-element');
    const fadeInElementsFromTop = document.querySelectorAll('.fade-in-element2');

    fadeInElementsFromBottom.forEach(element => observer.observe(element));
    fadeInElementsFromTop.forEach(element => observer.observe(element));
});