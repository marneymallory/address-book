// Object AddressBook
// Address has one or more Con tacts
function AdressBook() {
  this.contacts = []
  // addContact = function(newContact) { 
  //   this.contacts.push(newContact) 
  // }
}

AddressBook.prototype.addContact = function(newContact) {
  this.contacts.push(newContact)
}


// Object Contact
// Contact has first name
// Contact has last name
// Contact has phone number
// parameter firstName
// parameter lastName
// parameter phoneNumber
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName
  this.lastName = lastName
  this.phoneNumber = phoneNumber
}


const tom = new Contact("tom", "geraghty", "5552323")

console.log(tom.firstName) // => "tom"
const marney = new Contact("marney", "mallory", "8888888")
console.log(marney.firstName) 
// new Contact("one","two","three")

// CRUD


// Create
// Read
// Update
// Delete



