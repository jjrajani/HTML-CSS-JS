console.log("Hello World");

var add = function(a, b) {
  return a + b;
}

let four = add(2, 2);
// console.log("four");
// console.log(add(2, 2));
console.log(four);

var multiply = function (a, b) {
  return a * b;
}

let six = multiply(2, 3);
// console.log("six");
// console.log(multiply(2, 3));
console.log(six);

var capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// uppercasing and lowercasing can be nifty when trying to compare strings.
var upperCase = function (string) {
  return string.toUpperCase();
}

var lowerCase = function (string) {
  return string.toLowerCase();
}
// Example:
// ---------------------------
// user input when entering a state name needs to match the recoreds in database.
// user can spell Georgia, georgia, GEORGIA, GeOrGiA, anything.
// how do we know if its Georgia?

// this next console should return false.
console.log('GEoRgIa === georgia', "georgia" === "Georgia");
// thats a problem. so, the fex
let userInput = "GEoRgIa";
let expected = "georgia";

let validateInput = function(givenInput, expectedInput) {
  return givenInput.toLowerCase() === expectedInput.toLowerCase();
}

let valid = validateInput(userInput, expected);
console.log("Valid?",userInput + ".toLowerCase()", "===", expected + ".toLowerCase()", valid);

// ---------------------------

// make functions for subtracting and dividing.. if you dare. BWAHAHAHA!!



//

// Itterative approach for creating html for a list

let names = [
  "Frankenstein", "Pumpernickle", "Les Canards"
];

names.forEach((name) => {
  var newLi = document.createElement("li");
  var newContent = document.createTextNode(name);
  newLi.appendChild(newContent); //add the text node to the newly created li

  document.getElementById("name-list").append(newLi);
});

//


let users = [
  {name: "humdrum", hobbies: "coding"},
  {name: "duhneekah", hobbies: "photography"},
  {name: "felix", hobbies: "pooping"},
];

// loop over users
users.forEach((user, i) => {
  // console.log("Looking At users[" + i + "]: ", users[i]);

  // create a new <li> element for our user info to live in.
  var newLi = document.createElement("li");
  // set "user-info" as the class for out new <li> element
  newLi.setAttribute("class", "user-info");
  // ask me what i is on the next line.
  let liIndex = document.createTextNode(( i + 1 ) + ") ");
  newLi.appendChild(liIndex);
  // create an array to hold user info pieces, ex: p tag for username, p tag for hobbies
  let pTags = [];

  // since we are itterating over users, we have access the users one at a time

  // The next line takes the current user and loops over its keys, in this case, username and hobbies
  Object.keys(user).forEach((key) => {
    // console.log('key', key);
    // console.log('user', user);
    // console.log('user[key]', user[key]);

    // we create a p tag for the current info (ex: user.username)
    let pTag = document.createElement("p");
    // we format the text that we desire for displaying user.username * represented as user[key]
    // in the next itteration user[key] will point at user.hobbies
    let pText = document.createTextNode(capitalize(key) + ": " + user[key]);
    // we put the text inside of the pTag
    pTag.appendChild(pText);
    // we push the ptag to the holder array of pTags
    pTags.push(pTag);
  });

  // Now, we have an array of p tags with user info but we haven't put them into the list yet.

  // We itterate over the pTags array and append each pTag onto the list.
  pTags.forEach((pTag) => {
    newLi.appendChild(pTag);
  });

  // Now all the pTags are in the list, but the list still isnt on the page

  // we append the list to the element in index.thml with the corresponding id
  // in this case we are pointing at a ul element with and id of "name-list"
  // go checkout index html line 23
  document.getElementById("user-list").append(newLi);
})
