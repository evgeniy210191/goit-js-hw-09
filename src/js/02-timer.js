import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './fn02/convertMs.js';
import Notiflix from 'notiflix';
const [start, days, hours, minutes, seconds] = [
  '[data-start]',
  '[data-days]',
  '[data-hours]',
  '[data-minutes]',
  '[data-seconds]',
].map(item => document.querySelector(item));

let date;

const config = {
  enableTime: true,
  altInput: true,
  altFormat: 'd m Y H:i',
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  minuteIncrement: 1,
  
  onClose: function (selectedDates) {
    date = selectedDates[0];
    if (selectedDates[0].getTime() - Date.now() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    start.disabled = false;

    // if (date.getTime() - Date.now() === 0) {
    //   clearInterval(timer);
    // }
  },
};

flatpickr('input[type="text"]', config);

let timer = null;

const startCounter = function (event) {
  
  timer = setInterval(() => {
    const counter = convertMs(date.getTime() - Date.now());
    days.innerHTML = counter.days;
    hours.innerHTML = counter.hours;
    minutes.innerHTML = counter.minutes;
    seconds.innerHTML = counter.seconds;
    addLeadingZero(counter);
    render(counter);
  }, 1000);
};

start.addEventListener('click', startCounter);
function render(count) {
  const valuesCounter = Object.values(count);
  const valuesCounterSum = valuesCounter.reduce((acc, item) => {
    acc += item
    return acc
  })
  
  if (valuesCounterSum === 0) {
    clearInterval(timer);
  }
};

function addLeadingZero(value) {
  const valuesCounter = Object.values(value);
  for (const item of valuesCounter) {
    console.log(item);
    
  };
};
// padStart();