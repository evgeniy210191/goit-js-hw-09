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

let timer = null

const config = {
  enableTime: true,
  altInput: true,
  altFormat: 'd m Y H:i',
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    if (selectedDates[0].getTime() - Date.now() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    start.disabled = false;
    
    // if (selectedDates[0].getTime() - Date.now() === 0) {
    //   clearInterval(timer);
    // }
  },
};

const startCounter = function (event) {
  timer = setInterval(() => {
    const time = convertMs(selectedDates[0].getTime() - Date.now());

    days.innerHTML = time.days;
    hours.innerHTML = time.hours;
    minutes.innerHTML = time.minutes;
    seconds.innerHTML = time.seconds;
  }, 1000);
};
// start.addEventListener('click', startCounter);
flatpickr('input[type="text"]', config);


