// Задача №1.

const category = document.querySelector('#categories');
console.dir("Number of categories:", category.children.length);

//Задача №2.

const itemsList = document.querySelectorAll(".item");

function createComponentsOfList(listOfItems) {
    listOfItems.forEach((item) => {
        let categoryName = item.firstElementChild.textContent;
        let categoryNumber = Number(item.lastElementChild.children.length);
        console.log(`Category: ${categoryName} \nElements: ${categoryNumber}`);
  });
return
}

createComponentsOfList(itemsList);
