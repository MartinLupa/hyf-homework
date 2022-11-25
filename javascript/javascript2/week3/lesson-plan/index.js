//===================================================================
//Counter
const button1 = document.querySelector("#button-1")
const button2 = document.querySelector("#button-2")
const counterContainer = document.querySelector("#counter-container")

let counter = 0

button1.addEventListener("click", () => {
  counterContainer.textContent = counter
  counter = counter + 1
})

button2.addEventListener("click", () => {
  counterContainer.textContent = counter
  counter = counter + 1
})
//===================================================================
//Delay clicker
const button3 = document.querySelector("#button-3")
const delayClickerContainer = document.querySelector("#delay-container")
button3.addEventListener("click", () => {
  setTimeout(() => {
    delayClickerContainer.textContent = "This was delayed 3 seconds."
  }, 3000)
})

//===================================================================
//Page onload
const onLoadContainer = document.querySelector("#on-load-container")
const onLoadCallback = () => {
  onLoadContainer.textContent = "DOM fully loaded and parsed."
  console.log("DOM fully loaded and parsed.")
}
document.addEventListener("DOMContentLoaded", onLoadCallback)

//===================================================================
//Mouse position
const mousePosition = document.querySelector("#mouse-position")
const averagePosition = document.querySelector("#average-position")
let xPositions = []
let yPositions = []
let averageX
let averageY

//Coordinates listener
document.addEventListener("mousemove", logKey)

function logKey(e) {
  //Push data into arrays
  xPositions.push(e.clientX)
  yPositions.push(e.clientY)

  //Render coordinates
  mousePosition.innerText = `
    Client X/Y: ${e.clientX}, ${e.clientY}`
}

const calculateAveragePosition = (xValues, yValues) => {
  setTimeout(() => {
    const totalX = xValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    const totalY = yValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    const averageX = totalX / xValues.length
    const averageY = totalY / yValues.length

    averagePosition.textContent = `Average X/Y: ${averageX || 0}, ${
      averageY || 0
    }`
  }, 3000)
}

calculateAveragePosition(xPositions, yPositions)

//Calculate average position
