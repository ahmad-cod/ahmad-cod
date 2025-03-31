const nav = document.querySelector('#navigation')
const navToggler = document.querySelector('.mobile-nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')

navToggler.addEventListener('click', (event) => {
    event.stopPropagation()
    const visibility = nav.getAttribute('data-visible')
    if(visibility === 'false') {
        nav.setAttribute('data-visible', true)
        navToggler.setAttribute('aria-expanded', true)
    } else {
        nav.setAttribute('data-visible', false)
        navToggler.setAttribute('aria-expanded', false)
    }
})
// close menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = nav.contains(event.target) || navToggler.contains(event.target)
    if(!isClickInside) {
        nav.setAttribute('data-visible', false)
        navToggler.setAttribute('aria-expanded', false)
    }
})
// close menu when pressing escape
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        nav.setAttribute('data-visible', false)
        navToggler.setAttribute('aria-expanded', false)
    }
})

// Using IntersectionObserver API for scroll animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } /*else {
            entry.target.classList.remove('show')
        }*/
    })
})

const hiddenElements = document.querySelectorAll('.observe')
hiddenElements.forEach(el => observer.observe(el))

// close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.setAttribute('data-visible', false)
        navToggler.setAttribute('aria-expanded', false)
    })
}
)