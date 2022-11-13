const danishLetters = ["æ", "ø", "å", "Æ", "Ø", "Å"]

const danishString = "Jeg har en blå bil"
const danishString2 = "Blå grød med røde bær"

const findAndCountDanishLetters = (danishSpecialCharacters, stringToCount) => {
  let counter = { total: 0 }
  const splittedString = stringToCount.split("")

  /*
  Compare each character from the splittedString with each
  character of the danishCharacter dictionary. 
  */
  splittedString.forEach((character) => {
    danishSpecialCharacters.forEach((danishCharacter) => {
      if (character === danishCharacter) {
        if (danishCharacter in counter) {
          counter[danishCharacter] += 1
          counter.total++
        } else {
          counter[danishCharacter] = 1
          counter.total++
        }
      }
    })
  })
  console.log(counter)
}

findAndCountDanishLetters(danishLetters, danishString)
findAndCountDanishLetters(danishLetters, danishString2)
