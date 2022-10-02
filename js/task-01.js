const numberOfCategories = document.querySelectorAll('.item');
console.log(numberOfCategories.length)
numberOfCategories.forEach(categories => {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length);
});

