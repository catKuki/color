button.onclick = function () {
  const leftColor = leftInput.value;
  const rightColor = rightInput.value;
  document.body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
};
