import B2D from './modules/B2D.js';

const input = document.getElementById('input');

const output = document.getElementById('output');

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  input.value = '';

  output.value = '';

  clear.classList.add('disabled');

  clear.setAttribute('disabled', 'true');
});

input.addEventListener('input', () => {
  let value = input.value;

  if (value.length === 0) {
    input.value = '';

    output.value = '';

    clear.classList.add('disabled');

    clear.setAttribute('disabled', 'true');

    return;
  }

  if (!value.match(/^[01]+$/)) {
    input.value = input.value.substring(0, value.length - 1);

    return;
  }

  clear.classList.remove('disabled');
  
  clear.removeAttribute('disabled');

  output.value = B2D.convert(input.value);
});
