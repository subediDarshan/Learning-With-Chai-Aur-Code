const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16) + 0];
  }

  return color;
};

let changeColor = null;

start.addEventListener('click', (e) => {
  if (!changeColor) {
    changeColor = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stop.addEventListener('click', (e) => {
  clearInterval(changeColor);
  changeColor = null;
});
