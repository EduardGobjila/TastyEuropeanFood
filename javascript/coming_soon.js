let newCountDownDate = new Date("Jan 20 2023, 15:37:25").getTime()



let timer = setInterval(() => {

  let timeNow = new Date().getTime()

  let difference = newCountDownDate - timeNow


  // console.log(difference)
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / (1000));


  document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm '
  + seconds + 's '

  if (difference < 0) {
    clearInterval(timer)
    document.getElementById('demo').innerHTML = 'EXPIRED'
  }

}, 1000);
