//=============================================================
//Trigger delayed message
const triggerMessageButton = document.querySelector("#trigger-delayed-message")

const delayedMessage = (delay, stringToLog) => {
  setTimeout(() => {
    console.log(stringToLog)
  }, delay)
}

triggerMessageButton.addEventListener("click", () => {
  delayedMessage(2000, "Helloo after 2 seconds")
})

//=============================================================
//earth and saturn logger
const earthLogger = () => {
  console.log("Earth")
}
const saturnLogger = () => {
  console.log("Saturn")
}

const planetLogger = (loggingFunction) => {
  loggingFunction()
}

planetLogger(earthLogger)

//=============================================================
//Location logger
const locationButton = document.querySelector("#location-button")
const locationContainer = document.querySelector("#location-container")

const showCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    locationContainer.textContent = "Geolocation service not supported."
  }
}

const showPosition = (position) => {
  locationContainer.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude
}

locationButton.addEventListener("click", showCurrentLocation)

//=============================================================
//Check double click
//Option 1
window.addEventListener("click", (event) => {
  if (event.detail === 2) {
    console.log("Double click")
  }
})

//Option 2
// let counter = 0
// window.addEventListener("click", () => {
//   counter++
//   setTimeout(() => {
//     if (counter === 2) {
//       console.log("Double click")
//     }
//     counter = 0
//   }, 500)
// })

//=============================================================
//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke -
// function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function
// that should log out a funny joke. And vice versa.
