import { getRandomHexColor, intervalFn, body, start, stop } from './fn01/api';

function startInterval(event) {
  if (!intervalFn) {
    intervalFn = setInterval(() => {
      body.style.background = getRandomHexColor();
      console.log(intervalFn);
    }, 1000);
  }
}
function stopInterval(event) {
  intervalFn = null;
  clearInterval(intervalFn);
}

start.addEventListener('click', startInterval);
stop.addEventListener('click', stopInterval);
