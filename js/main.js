//  Responsive Navbar
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu ');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};

const typed = new Typed('.multiple-text', {
        strings: [ 'Ohayou! Konichiwa! Oyasumi! Aku ingin ada di setiap harimu.', 'Welcome to the Ellatheria Official Website!', 'Selamat Datang Di Website Resmi Ellatheria!'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 5000,
        loop: true
});

ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
});

ScrollReveal().reveal('.home-img , .heading , .home-content , .headig , .ig-container , .tiktok , .twitter , .showroompf' , { origin: 'bottom' });
ScrollReveal().reveal('.data', { origin: 'top' });
ScrollReveal().reveal('.centerbtn', { origin: 'left' });