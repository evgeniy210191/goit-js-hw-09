import { getRandomHexColor, body, start, stop } from './fn01/api.js';

let intervalFn = null;
function startInterval(event) {
  if (intervalFn) {
    return;
  } else {
    intervalFn = setInterval(() => {
      body.style.background = getRandomHexColor();
    }, 1000);
  }
}

function stopInterval(event) {
  clearInterval(intervalFn);
  intervalFn = null;
}

start.addEventListener('click', startInterval);
stop.addEventListener('click', stopInterval);
