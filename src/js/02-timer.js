import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs, render, addLeadingZero } from './fn02/convertMs.js';
import { addLeadingZero } from './fn02/addLeadingZero.js';
import Notiflix from 'notiflix';
const [start, days, hours, minutes, seconds] = [
  '[data-start]',
  '[data-days]',
  '[data-hours]',
  '[data-minutes]',
  '[data-seconds]',
].map(item => document.querySelector(item));
const valueCounterStr = document.querySelectorAll('.value')
let date;
let getDate = new Date
const config = {
  enableTime: true,
  altInput: true,
  altFormat: 'd m Y H:i',
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),

  onClose: function (selectedDates) {
    date = selectedDates[0];
    if (selectedDates[0].getTime() - Date.now() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    start.disabled = false;
  },
};

flatpickr('input[type="text"]', config);

let timer = null;

const startCounter = function (event) {
  timer = setInterval(() => {
    const counter = convertMs(date.getTime() - Date.now());
    if (date.getTime() - Date.now() < 0) {
      return
    }
    days.innerHTML = counter.days;
    hours.innerHTML = counter.hours;
    minutes.innerHTML = counter.minutes;
    seconds.innerHTML = counter.seconds;
    addLeadingZero(valueCounterStr);
    render(counter, timer, start);
  }, 1000);
};

start.addEventListener('click', startCounter);

