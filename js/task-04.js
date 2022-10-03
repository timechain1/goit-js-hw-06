const btnDecrement = document.querySelector('button[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});