import Notiflix from 'notiflix';
const [delay, step, amount, submit] = [
  '[name="delay"]',
  '[name="step"]',
  '[name="amount"]',
  '[type="submit"]',
].map(item => document.querySelector(item));

function createPromise(position, delay) {
  return (promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;

    if (shouldResolve) {
      resolve(
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    } else {
      reject(
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      );
    }
  }));
}
const callPromise = event => {
  event.preventDefault()
  const date = Date.now()
  setTimeout(() => {
    for (let i = 1; i <= amount.value; i++) {
      setTimeout(() => {
      let timeNow = Date.now() - date;
      return createPromise(i, timeNow)
        .then(res => res)
        .catch(res => res);
    }, i * step.value);
  }
  }, delay.value)
};

submit.addEventListener('click', callPromise);