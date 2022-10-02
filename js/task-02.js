const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const partsForInsert = ingredients.map(ingredient => {
  const currentItem = document.createElement('li');
  currentItem.textContent = ingredient;
  currentItem.classList.add('item');
  return currentItem;
});

const listRef = document.querySelector('#ingredients');
listRef.append(...partsForInsert);