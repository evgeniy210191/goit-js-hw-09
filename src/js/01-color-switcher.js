import { getRandomHexColor, body, start, stop } from './fn01/api.js';

let intervalFn = null;

function startInterval(event) {
  intervalFn = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

function stopInterval(event) {
  clearInterval(intervalFn);
}

start.addEventListener('click', startInterval, {once:true});
stop.addEventListener('click', stopInterval);
