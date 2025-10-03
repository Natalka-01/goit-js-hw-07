// Збираємо посилання на потрібні елементи в один об’єкт
const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

// слухаємо подію input на полі вводу
refs.input.addEventListener('input', () => {
  // прибираємо пробіли зліва і справа
  const trimmedValue = refs.input.value.trim();

  // якщо пусто → Anonymous
  refs.output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
