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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.observe')
hiddenElements.forEach(el => observer.observe(el))