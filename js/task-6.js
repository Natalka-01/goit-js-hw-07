
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get all needed elements by class 
const refs = {
  input: document.querySelector('.controls-input'),       // number field
  createBtn: document.querySelector('.controls-create'),  // "Create" button
  destroyBtn: document.querySelector('.controls-destroy'),// "Destroy" button
  boxes: document.querySelector('.boxes'),                // container for boxes
};

// Function that creates boxes using template strings
function createBoxes(amount) {
  const startSize = 30; // first box: 30x30 px
  const step = 10;      // each next box +10px larger
  let markup = '';      // will store all HTML for boxes

  // Build the HTML string for all boxes
  for (let i = 0; i < amount; i++) {
    const size = startSize + i * step;
    const color = getRandomHexColor();

    // Add one box to our markup string
    markup += `
      <div 
        style="
          width:${size}px;
          height:${size}px;
          background-color:${color};
          margin:4px;
          border-radius:4px;
        ">
      </div>`;
  }

  // Clear any old boxes, then insert new markup
  refs.boxes.innerHTML = markup;
}

// Function that removes all boxes
function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

// Event listener for "Create" button
refs.createBtn.addEventListener('click', () => {
  const value = Number(refs.input.value); // read input value as a number

  // Validation: only allow 1–100
  if (value < 1 || value > 100 || !value) {
    alert('Please enter a number from 1 to 100');
    refs.input.value = ''; // clear input
    return;
  }

  // Call our function to build boxes
  createBoxes(value);

  // Clear input after rendering
  refs.input.value = '';
});

// === Event listener for "Destroy" button ===
refs.destroyBtn.addEventListener('click', () => {
  destroyBoxes();
  refs.input.value = '';
});
