

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  
  return { days, hours, minutes, seconds};
}

export function render(count, time) {
  const valuesCounter = Object.values(count);
  const valuesCounterSum = valuesCounter.reduce((acc, item) => {
    acc += item
    return acc
  })
  
  if (valuesCounterSum === 0) {
    clearInterval(time);
  }
};
