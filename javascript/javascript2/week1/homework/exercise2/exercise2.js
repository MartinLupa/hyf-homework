//=================================================================
//DOM Selectors
//=================================================================
const optionSelect = document.querySelector("select")
const spiritAnimalList = document.querySelector("ul")
const addUserButton = document.getElementById("add-user-button")
const userInput = document.getElementById("user-input")
const animalSpiritButton = document.getElementById("spirit-animal-button")
const animalSpiritText = document.querySelector("h1")

//spiritAnimal array
const spiritAnimal = [
  "Alligator",
  "Anaconda",
  "Albatross",
  "Antelope",
  "Armadillo",
  "Beaver",
  "Buffalo",
  "Bat",
]

/*
assignRandomSpiritAnimal generates a random number between 0 and
the length of the spiritAnimal array and returns the given random
spirit animal.
*/
const assignRandomSpiritAnimal = (spiritAnimalList) => {
  const randomIndex = Math.floor(Math.random() * spiritAnimalList.length)
  return spiritAnimal[randomIndex]
}

//=================================================================
//Events handlers
//=================================================================
// 2.2 - 2.3
const handleAddUserClick = (event) => {
  event.preventDefault()

  //2.5
  if (userInput.value === "") {
    alert("Please enter a text")
    return
  }
  const listItem = document.createElement("li")
  listItem.textContent = `${userInput.value} - ${assignRandomSpiritAnimal(
    spiritAnimal
  )}`
  spiritAnimalList.appendChild(listItem)

  userInput.value = ""
}

//=================================================================
//Events
//=================================================================
// 2.2 - 2.3
addUserButton.addEventListener("click", handleAddUserClick)

//2.4
animalSpiritText.textContent = assignRandomSpiritAnimal(spiritAnimal)
animalSpiritButton.addEventListener("click", () => {
  animalSpiritText.textContent = assignRandomSpiritAnimal(spiritAnimal)
})
