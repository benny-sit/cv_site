const burger = document.querySelector('.mobile-nav-toggle');
const header = document.getElementById('header');

burger.addEventListener('click', function() {
    header.classList.toggle('active');
    burger.classList.toggle('bi-list');
    burger.classList.toggle('bi-x');
    });

window.addEventListener("DOMContentLoaded", event => {
    const navbar = document.body.querySelector('#navbar');
    if(navbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar',
            offset: 20,
        });
    };
});
