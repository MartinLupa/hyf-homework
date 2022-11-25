const gitRepositories = [
  "https://api.github.com/search/repositories?q=user:martinLupa",
  "https://api.github.com/search/repositories?q=user:fjpolo",
  "https://api.github.com/search/repositories?q=user:rafaelalma",
]

let promises = gitRepositories.map((url) => {
  return fetch(url).then((response) => response.json())
})

//API response structure:
//promises[user1, user2, user3]
//  promise[i]
//    items[repository1, repository2, ...]
//      items[i]
//        full_name --> repository full name
//        url --> full repo url
//        owner.login --> owner name

//Desired outcome
// Repository full name
// Repository url
// Repository owner
// Horizontal rule

Promise.all(promises)
  .then((data) => {
    const body = document.querySelector("body")
    const ul = document.createElement("ol")

    data.forEach((repositoryList) => {
      repositoryList.items.forEach((repo) => {
        const repositoryName = document.createElement("li")
        const repositoryUrl = document.createElement("p")
        const repositoryOwner = document.createElement("p")
        const horizontalRule = document.createElement("hr")

        repositoryName.innerText = repo.full_name
        repositoryUrl.innerText = repo.url
        repositoryOwner.innerText = repo.owner.login

        ul.appendChild(repositoryName)
        ul.appendChild(repositoryUrl)
        ul.appendChild(repositoryOwner)
        ul.appendChild(horizontalRule)
      })
      body.appendChild(ul)
    })
  })
  .catch((error) => {
    console.log("Error: ", error)
  })
