const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
]

const podcastContainer = document.getElementById("podcast-container")

const podcastList = document.createElement("ul")
podcasts.forEach((podcast) => {
  const listItem = document.createElement("li")
  const podcastName = document.createElement("h1")
  podcastName.innerHTML = podcast.name
  listItem.appendChild(podcastName)

  const podcastImage = document.createElement("img")
  if (podcast.imageUrl) {
    podcastImage.src = podcast.imageUrl
    listItem.appendChild(podcastImage)
  }

  podcastList.appendChild(listItem)
})

podcastContainer.appendChild(podcastList)
