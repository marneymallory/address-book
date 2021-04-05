// Creating the shapes of the objects we're going to use eventually

// Object AddressBook
// Address has one or more Con tacts
function AddressBook() {
  this.contacts = []
  this.idCounter = 0
}

AddressBook.prototype.increment = function() {
  this.idCounter = this.idCounter + 1
}

AddressBook.prototype.addContact = function(newContact) {
  newContact.id = this.idCounter
  this.increment()
  this.contacts.push(newContact)
}

AddressBook.prototype.findContact = function(contactId) {
  return this.contacts[contactId]
}

AddressBook.prototype.removeContact = function(contactId) {
  delete this.contacts[contactId]
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






// // This is instantiating objects/actually creating real world objects with values
// const tom = new Contact("tom", "geraghty", "5552323")

// console.log(tom.firstName) // => "tom"
// const marney = new Contact("marney", "mallory", "8888888")
// console.log(marney.firstName)
// // new Contact("one","two","three")

// const myAddressBook = new AddressBook()
// myAddressBook.addContact(tom)

// UI LOGIC
// Helper Functions
function generateHtmlFor(contact) {
  let html = `<div class="card">`
  html += "Name: " + contact.firstName + " " + contact.lastName
  html += "Phone: " + contact.phoneNumber
  html += "<div>"
  return html
}

function generateAddressBookHtml(addressBook) {
  let html = `<div class="container">`
  addressBook.contacts.forEach(function(contact) {
    html += generateHtmlFor(contact)
  })
  html += "</div>"
  return html
}

$(document).ready(function() {
  // now our page is loaded, we can select elements and do stuff...
  const myAddressBook = new AddressBook()

  $("form").submit(function (event) {
    event.preventDefault();
    const firstName = $("#firstName").val()
    const lastName = $("#lastName").val()
    const phoneNumber = $("#phoneNumber").val()

    // now our form is submitted, and we have the value of the 3 inputs...
    // use the input info to create a new contact
    const newContact = new Contact(firstName, lastName, phoneNumber)
    // add that new contact to the address book (myAddressBook)
    console.log(newContact)
    AddressBook.addContact(newContact)


    // const albert = new Contact("albert", "einstein", "1111111")
    // console.log(albert.firstName)
  })
})



