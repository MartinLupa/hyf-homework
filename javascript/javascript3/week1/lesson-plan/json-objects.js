const orders = [
  {
    orderName: "Martin L.",
    orderId: 1,
    price: 120,
    listOfDrinks: ["fernet", "beer", "wine"],
    orderExtras: [],
  },
  {
    orderName: "Pablo L.",
    orderId: 2,
    price: 100,
    listOfDrinks: ["fernet", "beer"],
    orderExtras: [],
  },
  {
    orderName: "Franco P.",
    orderId: 3,
    price: 200,
    listOfDrinks: ["beer", "soda"],
    orderExtras: [],
  },
]

console.log(JSON.stringify(orders))
