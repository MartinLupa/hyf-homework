console.log("Script loaded")

const products = getAvailableProducts()
console.log(products)

//3.2

const renderProducts = (listOfProducts) => {
  const mainContainer = document.getElementById("main")
  const ul = document.createElement("ul")

  products.forEach((product) => {
    //Creating necessary HTML tags
    const li = document.createElement("li")
    const titleTag = document.createElement("h2")
    const priceTag = document.createElement("span")
    const horizontalRule = document.createElement("hr")
    const lineBreak = document.createElement("br")
    const ratingTag = document.createElement("span")

    //Adding content to tags
    titleTag.innerText = product.name
    priceTag.innerText = `Price: $ ${product.price}`
    ratingTag.innerText = `Rating: ${product.rating}`

    //Appending tags to li container element
    li.appendChild(titleTag)
    li.appendChild(priceTag)
    li.append(lineBreak)
    li.appendChild(ratingTag)
    li.appendChild(horizontalRule)

    ul.appendChild(li)
  })

  mainContainer.appendChild(ul)
}

renderProducts(products)
