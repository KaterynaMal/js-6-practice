// const categoriesList = document.querySelector("#categories");

// const categoriesItem = categoriesList.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesItem.length}`);

// categoriesItem.forEach((item) => {
//   const categoriesTitle = item.querySelector("h2").textContent;
//   console.log(`Category: ${categoriesTitle}`);

//   const categoriesElement = item.querySelectorAll("li");
//   console.log(`Elements: ${categoriesElement.length}`);
// });

const table = document.querySelector('#userTable');

const tableUsers = table.querySelectorAll('.user');
console.log(`Number of users: ${tableUsers.length}`);

tableUsers.forEach((user) => {
  const userName = user.querySelector('td').textContent[Name];
  const userCountry = user.querySelector
  console.log(`${userName}, ${Country}`);
})