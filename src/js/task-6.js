function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});