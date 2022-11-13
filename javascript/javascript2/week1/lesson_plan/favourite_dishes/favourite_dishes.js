const favouriteDishes = ["Milanesa", "Hamburger", "Pizza", "Salad"]

const listContainer = document.getElementById("list-container")
const dishesList = document.createElement("ul")
favouriteDishes.forEach((dish) => {
  const listItem = document.createElement("li")
  listItem.textContent = dish
  dishesList.appendChild(listItem)
})
listContainer.appendChild(dishesList)
