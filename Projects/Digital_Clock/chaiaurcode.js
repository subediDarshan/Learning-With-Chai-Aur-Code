let clock = document.querySelector('#clock');

setInterval(() => {
  let currDate = new Date();
  let time = currDate.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
