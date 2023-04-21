export function addLeadingZero(value) {
  const valuesCounter = Object.values(value);
  for (const item of valuesCounter) {
      item.innerHTML = item.innerHTML.padStart(2, '0');
  }
}
