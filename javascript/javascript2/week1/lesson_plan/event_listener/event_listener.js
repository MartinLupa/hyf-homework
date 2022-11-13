const eventListenerContainer = document.getElementById(
  "event-listener-container"
)

const button = document.createElement("button")
button.textContent = "Click me!"
eventListenerContainer.appendChild(button)

button.addEventListener("click", () => {
  button.textContent = "Button clicked!"
})
