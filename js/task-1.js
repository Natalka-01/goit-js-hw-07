// TODO 1
const categoriesList = document.querySelector('.js-categories');

const categories = categoriesList.children

console.log('Number of categories:', categories.length)

//TODO 2
for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  
  const title = category.querySelector('.js-title').textContent;

  const itemsCount = category.querySelector('.js-list').children.length;

  console.log('Category:', title);
  console.log('Elements:', itemsCount);
}
