document.getElementById('mode_icon').addEventListener('click', () => {
    const modeIcon = document.getElementById('mode_icon');
    const forms = document.querySelectorAll('form');

    if (modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        modeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    forms.forEach(form => form.classList.toggle('dark'));
});





