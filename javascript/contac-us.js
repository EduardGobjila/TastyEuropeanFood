let contacts = document.getElementById('numbers')

console.log(numbers)
if (window.innerWidth < 520) {
  contacts.innerHTML = `
  <p>Shop Telephone Number: <br> <a href="tel:+442083431431">+44 20 8343 1431</a></p>
  <p>Manager's Phone Number: <br> <a href="tel:+447464736368">+44 (74) 6473 6368</a></p>
  <p>Delivery Driver Phone Number: <br> <a href="tel:+447981801403">+44 (79) 8180 1403</a></p>
  <p>Orders Telephone Number: <br> <a href="tel:+442083431431">+44 20 8343 1431</a></p>
  <p>Email: <br> <a href="mailto:tastyeuropean@gmail.com">tastyeuropean@gmail.com</a></p>
  `
}
