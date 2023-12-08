
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.navbar a, .btn-box');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Form submitted! You can add your form handling logic here.');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.querySelector('.top');

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close');

    projects.forEach(function (project, index) {
        project.addEventListener('click', function () {
            modals[index].style.display = 'block';
        });
    });

    closeModalButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            modals[index].style.display = 'none';
        });
    });

    window.onclick = function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
});
