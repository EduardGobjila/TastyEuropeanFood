//  on scroll appendd the navabr on top

const navbar = document.getElementById('navbar')


window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('fixed-top')
  }
})


// when current page change the color of the text on tha navabar
