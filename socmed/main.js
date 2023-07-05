//  Responsive Navbar
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu ');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

ScrollReveal({

        reset: true,

        distance: '80px',
        duration: 1550,
        delay: 100
});

ScrollReveal().reveal('.home-img , .heading , .home-content , .headig , .ig-container , .tiktok , .twitter , .ig-box , .tiktok-box' , { origin: 'bottom' });
ScrollReveal().reveal('.tiktokcontainerpf', { origin: 'top' });
ScrollReveal().reveal('.igaccontainer', { origin: 'right' });