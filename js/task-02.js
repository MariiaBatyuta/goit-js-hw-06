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
  item.classList.add("item");

  const itemName = document.createElement("p");
  itemName.textContent = product;
  item.appendChild(itemName);

  return item;
})

createList.append(...ingredient);

console.log(ingredient);