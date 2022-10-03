const span = document.querySelector('#text');
const input = document.querySelector('#font-size-control');
input.addEventListener('input', onBlur );
function onBlur(event) {
    span.style.fontSize = `${event.currentTarget.value}px`;
  }

