const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = document.querySelector("#ingredients");

const ingredient = ingredients.map((product) => {
  // Додати клас
  const item = document.createElement("li");
  item.textContent = product;
  item.classList.add("item");

  return item;
})

createList.append(...ingredient);

console.log(ingredient);