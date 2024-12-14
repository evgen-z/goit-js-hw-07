const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2");
  const itemCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${itemCount}`);
});
