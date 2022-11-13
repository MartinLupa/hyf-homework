const darkModeContainer = document.getElementById("dark-mode-container")

let isDarkMode = false

const button = document.createElement("button")
button.innerText = "Select dark mode"
darkModeContainer.appendChild(button)

button.addEventListener("click", () => {
  isDarkMode = !isDarkMode
  if (isDarkMode) {
    document.body.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = "white"
  }
  console.log(isDarkMode)
})
