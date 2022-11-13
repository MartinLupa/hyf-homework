const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]

//Option 1: with reduce( ) method
const findShortestWord = (wordsArray) => {
  console.log(
    wordsArray.reduce((a, b) => {
      return a.length <= b.length ? a : b
    })
  )
}

findShortestWord(danishWords)
