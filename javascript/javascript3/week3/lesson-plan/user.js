class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName = () => {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

user1 = new User("Martin", "Lupa")
console.log(user1)
console.log(user1.firstName)
console.log(user1.getFullName())
