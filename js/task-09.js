
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector(".color");
const buttonSel = document.querySelector(".change-color");

buttonSel.addEventListener("click", onChangedBackground);

function onChangedBackground(event) {
  const spanEl = (spanColor.textContent = getRandomHexColor());
  document.body.style.backgroundColor = spanEl;
}