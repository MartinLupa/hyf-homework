let products = getAvailableProducts()
const productsUl = document.querySelector("section.products ul")
const nameFilter = document.querySelector("#name-filter")
const priceFilter = document.querySelector("#price-filter")

function renderProducts(products) {
  //Add a safeguard to clean the ul tag from existing elements
  while (productsUl.children.length !== 0) {
    productsUl.removeChild(productsUl.childNodes[0])
  }
  //Then generate the required ul and li elements according to the products array
  products.forEach((product) => {
    const li = document.createElement("li")

    let shipsToHTML = ""
    product.shipsTo.forEach((country) => (shipsToHTML += `<li>${country}</li>`))

    li.innerHTML = `
    <ul>
    <li>${product.name}</li>
    <li>${product.price}</li>
    <li>${product.rating}</li>
    <ul class="ships-to">${shipsToHTML}</ul>
    </ul>
    `
    productsUl.appendChild(li)
  })
}

//Initial rendering of the products
renderProducts(products)

//2.2) filter products based on name
nameFilter.addEventListener("input", (event) => {
  const searchQuery = event.target.value.toLowerCase()
  if (!searchQuery) {
    //When searchQuery is cleaned, return to the initial state of rendered products
    renderProducts(products)
  } else {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    )
    //If filterQuery, then filter the rendered products
    renderProducts(filteredProducts)
  }
})

//2.3) filter products based on max price
priceFilter.addEventListener("input", (event) => {
  const searchQuery = parseInt(event.target.value)
  console.log(searchQuery)
  if (!searchQuery) {
    //When searchQuery is cleaned, return to the initial state of rendered products
    renderProducts(products)
  } else {
    const filteredProducts = products.filter(
      (product) => product.price <= searchQuery
    )
    //If filterQuery, then filter the rendered products
    renderProducts(filteredProducts)
  }
})
