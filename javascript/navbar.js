const navbar = document.getElementById('navbar')


window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('fixed-top')
  }
})
