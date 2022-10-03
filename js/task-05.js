const formEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value || "Anonymous";
});

