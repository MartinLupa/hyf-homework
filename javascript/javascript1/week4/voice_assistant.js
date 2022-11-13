//Initializing assistant
const assistant = {
  userName: "",
  myToDo: [],
}

//processCommandAndExtractToDo cleans the command form unwanted
//words and returns a cleanToDo to add to myToDo array.
const processCommandAndExtractToDo = (command) => {
  const splittedCommand = command.split(" ")

  //Clean splittedCommand from "Add" and "to my todo" and join
  let cleanToDo = splittedCommand.slice(1, splittedCommand.length - 3).join(" ")

  if (splittedCommand[0] === "Add") {
    console.log(`Added ${cleanToDo.slice(0)} to my todos`)
  } else if (splittedCommand[0] === "Add") {
    console.log(`Removed ${cleanToDo.slice(0)} from my todos`)
  }

  //Capitalize toDo first letter
  return (cleanToDo =
    cleanToDo.charAt(0).toUpperCase() + cleanToDo.slice(1, cleanToDo.length))
}

//getReply processes commands and returns predetermined response
const getReply = (command) => {
  if (command.includes("Hello my name is")) {
    userName = command.split(" ").pop()
  } else if (command.includes("What is my name")) {
    if (userName !== "") {
      console.log(`Your name is ${userName}`)
      return
    }
    console.log("Please present yourself first.")
  } else if (command.includes("Add")) {
    const cleanToDo = processCommandAndExtractToDo(command)
    assistant.myToDo.push(cleanToDo)
    console.log(assistant.myToDo)
  } else if (command.includes("Remove")) {
    const cleanToDo = processCommandAndExtractToDo(command)
    const index = assistant.myToDo.indexOf(cleanToDo)
    assistant.myToDo.splice(index, 1)
  } else if (command.includes("What is on my todo?")) {
    if (assistant.myToDo.length === 0) {
      console.log("You have no todos today.")
    } else if (assistant.myToDo.length === 1) {
      console.log(`You have one todo today: ${assistant.myToDo}`)
    } else {
      console.log(`You have ${assistant.myToDo.length} todos today:`)
      assistant.myToDo.forEach((todo) => console.log(`- ${todo}`))
    }
  } else if (command.includes("What day is it today?")) {
    const date = new Date()
    const day = date.getDay()
    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()
    console.log(`Today is: ${day} of ${month} of ${year}`)
  } else if (command.includes("What is")) {
    const numbers = command.match(/\d+/g)
    const mathOperator = command.match(/[-+*\/]+/g)

    switch (mathOperator[0]) {
      case "+":
        console.log(
          `The result of ${numbers[0]} ${mathOperator} ${numbers[1]} is: ${
            parseInt(numbers[0]) + parseInt(numbers[1])
          }`
        )
        break

      case "-":
        console.log(
          `The result of ${numbers[0]} ${mathOperator} ${numbers[1]} is: ${
            parseInt(numbers[0]) - parseInt(numbers[1])
          }`
        )
        break

      case "*":
        console.log(
          `The result of ${numbers[0]} ${mathOperator} ${numbers[1]} is: ${
            parseInt(numbers[0]) * parseInt(numbers[1])
          }`
        )
        break

      case "/":
        console.log(
          `The result of ${numbers[0]} ${mathOperator} ${numbers[1]} is: ${
            parseInt(numbers[0]) / parseInt(numbers[1])
          }`
        )
        break

      default:
        break
    }
  } else if (command.includes("Set a timer")) {
    const minutes = command.match(/\d+/g)
    setTimeout(() => {
      console.log("Timer is finished")
    }, parseInt(minutes) * 60 * 1000)
    console.log(`Timer set for ${minutes} minutes.`)
  }
}

getReply("Hello my name is Martin")
getReply("Add singing in the shower to my todo")
getReply("Add cycling to my todo")
getReply("Add studying to my todo")
getReply("Remove singing in the shower from my todo")
getReply("What is on my todo?")
getReply("What day is it today?")
getReply("What is 2 + 2?")
getReply("Set a timer for 1 minutes")
