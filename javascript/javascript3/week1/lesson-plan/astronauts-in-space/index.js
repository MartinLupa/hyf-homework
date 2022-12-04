const generateHTML = (data) => {
  const astronautsCount = document.getElementById("astronauts-count")
  const astronautsList = document.getElementById("astronauts-list")

  astronautsCount.innerHTML = `<p>There are ${data.number} astronauts in space, they are:</p>`

  data.people.forEach((person) => {
    const listItem = document.createElement("li")
    listItem.textContent = person.name
    astronautsList.appendChild(listItem)
  })
}

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => generateHTML(data))
  .catch((error) => console.log(error))
