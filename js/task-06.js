
const input = document.querySelector("#validation-input");
input.addEventListener("input", onBlur);
function onBlur(event) {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
  }
}