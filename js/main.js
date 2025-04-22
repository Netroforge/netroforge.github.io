// Netroforge Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Turbo Mode toggle
    const turboToggle = document.getElementById('turbo-toggle');
    const body = document.body;

    // Check if turbo mode was previously enabled
    const turboEnabled = localStorage.getItem('turboMode') === 'true';
    if (turboEnabled) {
        body.classList.add('turbo-mode');
        if (turboToggle) turboToggle.checked = true;
    }

    // Toggle turbo mode when the switch is clicked
    if (turboToggle) {
        turboToggle.addEventListener('change', function () {
            body.classList.toggle('turbo-mode');
            localStorage.setItem('turboMode', this.checked);
        });
    }

    // Initialize glitch text elements
    const glitchElements = document.querySelectorAll('.glitch-text');
    glitchElements.forEach(el => {
        el.setAttribute('data-text', el.textContent);
    });
});

