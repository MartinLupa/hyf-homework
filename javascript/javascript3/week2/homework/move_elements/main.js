const elements = document.querySelector(".marks")
const redCircle = elements.children[0]
const blueCircle = elements.children[1]
const greenCircle = elements.children[2]

//Async - await
const translateOneByOne = async () => {
  await moveElement(redCircle, { x: 20, y: 300 })
  console.log("Red circle was moved")
  await moveElement(blueCircle, { x: 400, y: 300 })
  console.log("Blue circle was moved")
  await moveElement(greenCircle, { x: 400, y: 20 })
  console.log("Green circle was moved")
}

//.then()
// const translateOneByOne = () => {
//   moveElement(redCircle, { x: 20, y: 300 })
//     .then(() => {
//       console.log("Red circle was moved")
//       return moveElement(blueCircle, { x: 400, y: 300 })
//     })
//     .then(() => {
//       console.log("Blue circle was moved")
//       return moveElement(greenCircle, { x: 400, y: 20 })
//     })
//     .then(() => {
//       console.log("Green circle was moved")
//     })
// }

translateOneByOne()

const translateAllAtOnce = () => {
  const red = moveElement(redCircle, { x: 20, y: 300 })
  const blue = moveElement(blueCircle, { x: 400, y: 300 })
  const green = moveElement(greenCircle, { x: 400, y: 20 })
  Promise.all([red, blue, green]).then()
}

translateAllAtOnce()
