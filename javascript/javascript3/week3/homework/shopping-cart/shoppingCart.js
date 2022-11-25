class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class ShoppingCart {
  constructor() {
    this.products = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  removeProduct(product) {
    const newProductList = this.products.filter(
      (existingProduct) => existingProduct !== product
    )

    this.products = newProductList
  }

  searchProduct(productName) {
    const product = this.products.filter(
      (existingProduct) => existingProduct.name === productName
    )

    return product
  }

  getTotal() {
    const total = this.products.reduce(
      (currentTotal, product) => currentTotal + product.price,
      0
    )

    return total
  }

  renderProducts() {
    const shoppingCartList = document.getElementById("shopping-cart")

    this.products.forEach((product) => {
      const productItem = document.createElement("li")
      productItem.innerHTML = `<b>${product.name}</b> - kr. ${product.price}`
      shoppingCartList.appendChild(productItem)
    })
  }

  getUser(user) {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        const requestedUser = data.filter(
          (fetchedUser) => fetchedUser.name === user
        )
        console.log("Requested user: ", requestedUser)
      })
  }
}

//Generating new instance of Shopping cart
const shoppingCart = new ShoppingCart()

//Creating new Products
const flatscreen = new Product("flat-screen", 5000)
const tv = new Product("tv", 3500)
const headphones = new Product("headphones", 1200)

//Adding products to Shopping Cart
shoppingCart.addProduct(flatscreen)
shoppingCart.addProduct(tv)
shoppingCart.addProduct(headphones)

//Remove product from Shopping Cart
shoppingCart.removeProduct(flatscreen)

console.log(shoppingCart.searchProduct("tv"))
shoppingCart.getUser("Ervin Howell")
console.log(shoppingCart.getTotal())

shoppingCart.renderProducts()
tv.convertToCurrencyWithApi("USD").then((value) => console.log(value))
