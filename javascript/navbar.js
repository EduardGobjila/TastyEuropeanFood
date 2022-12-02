//  on scroll appendd the navabr on top

const navbar = document.getElementById('navbar')


window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('fixed-top')
  }
})


// when current page change the color of the text on tha navabar

const navItem = document.querySelectorAll('.nav-item')

// navItem.forEach(item => {
  if (window.location.hash === '#delivery') {
   navItem[5].classList.add('active')
   navItem[0].classList.remove('active')
   navItem[1].classList.remove('active')
   navItem[2].classList.remove('active')
   navItem[3].classList.remove('active')
   navItem[4].classList.remove('active')
  }
// })
