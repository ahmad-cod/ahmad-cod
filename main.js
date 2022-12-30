const nav = document.querySelector('#navigation')
const navToggler = document.querySelector('.mobile-nav-toggle')

navToggler.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')
    if(visibility === 'false') {
        nav.setAttribute('data-visible', true)
        navToggler.setAttribute('aria-expanded', true)
    } else {
        nav.setAttribute('data-visible', false)
        navToggler.setAttribute('aria-expanded', false)
    }
})


// TO MAKE THE NAVBAR STYLISH AND STICKY WHEN A SCROLLS
window.addEventListener("scroll", function () {
    // var nav = document.querySelector("nav");
    // console.log('scrolling ...')
    nav.classList.toggle("sticky", window.scrollY > 0);
});


// // MAKE NAVBAR DISAPPEAR WHEN A USER SCROLLS DOWN AND APPEAR WHEN A USER SCROLLS UP
// var prevScrollpos = window.pageYOffset;

// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-10rem";
//     }
//     prevScrollpos = currentScrollPos;
// }


// // MOBILE NAVIGATION MENU
// const myMenu = document.querySelector('.menu-toggle');
// const myList = document.querySelector('.nav-list');

// myMenu.addEventListener('click', () => {
//     myMenu.classList.toggle('show');
//     myList.classList.toggle('show');
// });

// // SCROLL OUT
// ScrollOut({
//     targets: 'h2,p,a'
// })