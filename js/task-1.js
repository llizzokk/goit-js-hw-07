"use strict";

const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  console.log(`Category: ${item.querySelector(".item-title").textContent}`);

  console.log(
    `Elements: ${item.querySelectorAll(".item-list .item-list-text").length}`
  );
});
