//Create an array here
var myPetsArray = ["Dog", "Cat"];
var myNewPets = ["Bird", "Fish"];
myNewPets.unshift("Lion")
var firstPet = "Bird";
var lastPet = "Fish"
//End of creating an array
function myArrayFunction(arr) {
  var myItems = [myNewPets[0], myPetsArray[1], firstPet];
  //Only change code below this line

  return myItems;
  //Only change code above this line
}

console.log(myArrayFunction());
module.exports = myArrayFunction;
