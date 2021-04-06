// Creating the shapes of the objects we're going to use eventually

// Object AddressBook
// Address has one or more Con tacts
function AddressBook() {
  this.contacts = []
  this.idCounter = 0
}

// Object Contact
// Contact has first name
// Contact has last name
// Contact has phone number
// parameter firstName
// parameter lastName
// parameter phoneNumber
function Contact(firstName, lastName, phoneNumber, email, addresses) {
  this.firstName = firstName
  this.lastName = lastName
  this.phoneNumber = phoneNumber
  this.email = email
  this.addresses = []
}

// Object Address
function Address(address, type) {
  this.address = address
  this.type = type// e.g. "Work", "Personal", "Mailing", etc.
}

// AddressBook methods
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

// Contact methods
// Object Address
// Structure:
// OBJECT: AddressBook
//          --- has lots of *Contacts* in an OBJECT
//          --- each gets a *contact ID* assigned
//              OBJECT: Contacts
//               --- each has lots of *Addresses* in an OBJECT
//               --- each gets an *address ID* assigned
//                   OBJECT: Addresses
Contact.prototype.increment = function() {
  this.idCounter = this.idCounter + 1
}

Contact.prototype.addAddress = function(newAddress) {
  newAddress.id = this.idCounter
  this.increment()
  this.addresses.push(newAddress)
}

Contact.prototype.findAddress = function(addressId) {
  return this.addresses[addressId]
}

Contact.prototype.removeAddress = function(addressId) {
  delete this.addresses[addressId]
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
function generateHtmlForAddress(address) {
  let html = `<div class="addy">`
  html = html + `<div class="col">Address Type: ${address.type}</div>`
  html = html + `<div class="col">Street Number: ${address.address}</div>`
  html = html + "</div>"
  console.log(html)
  return html
}

function generateHtmlForContact(contact) {
  let html = `<div class="card row m-1 p-2">`
  html = html + `<div class="col">Name: ${contact.firstName} ${contact.lastName}</div>`
  html = html + `<div class="col">Phone: ${contact.phoneNumber}</div>`
  html = html + `<div class="col">E-mail: ${contact.email}</div>`
  contact.addresses.forEach(function(address) {
    html += generateHtmlForAddress(address)
  })
  html = html + "</div>"
  console.log(html)
  return html
}

function generateAddressBookHtml(addressBook) {
  let html = `<div class="container m-3 mt-5 p-1">`
  addressBook.contacts.forEach(function(contact) {
    html += generateHtmlForContact(contact)
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
    const email = $("#email").val()
    const address1 = $("#address1").val()
    const address1Type = $("#address1Type").val()
    // const address2 = $("#address2").val()
    // const address2Type = $("#address2Type").val()
    // const address3 = $("#address3").val()
    // const address3Type = $("#address3Type").val()

    // document.querySelector("form").reset()

    // now our form is submitted, and we have the value of the 3 inputs...
    // use the input info to create a new contact
    const newAddress = new Address(address1, address1Type)
    const newContact = new Contact(firstName, lastName, phoneNumber, email, newAddress)
    // add that new contact to the address book (myAddressBook)
    console.log(newAddress)
    newContact.addAddress(newAddress)
    myAddressBook.addContact(newContact)

    $(".address").html(generateAddressBookHtml(myAddressBook))
    // const albert = new Contact("albert", "einstein", "1111111")
    // console.log(albert.firstName)
    console.log(myAddressBook)

  })
})



