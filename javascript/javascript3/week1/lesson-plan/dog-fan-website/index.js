const dogImage = document.getElementById("dog-image")
const dogBreed = document.getElementById("breed-name")

const getBreedImages = (breed) => {
  setInterval(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response) => response.json())
      .then((data) => dogImage.setAttribute("src", data.message))
  }, 2000)
}

const getRandomDogBreed = (url) => {
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const keys = Object.keys(data.message)
      return keys[Math.floor(Math.random() * keys.length)]
    })
    .catch((error) => console.log(error))

  return data
}

const displayDogImages = async () => {
  const randomBreed = await getRandomDogBreed(
    "https://dog.ceo/api/breeds/list/all"
  )
  dogBreed.textContent = randomBreed
  console.log(randomBreed)

  getBreedImages(randomBreed)
}

displayDogImages()
