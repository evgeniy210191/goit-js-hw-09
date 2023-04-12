export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const [body, start, stop] = ['body', '[data-start]', '[data-stop]'].map(
  item => document.querySelector(item)
);
