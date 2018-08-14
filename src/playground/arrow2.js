//argument object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));


// this keyword - no longer bound

// const user = {
//   name: 'Sam',
//   cities: ['Topeka', 'Kansas City', 'Liverpool'],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };
// user.printPlacesLived();

//es6ified
const user = {
  name: 'Sam',
  cities: ['Topeka', 'Kansas City', 'Liverpool'],
  printPlacesLived() {
     return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());


//challenge

const multiplier = {
  //array of numbers
  numbers: [2, 5, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
    }
  //multiple return a new array with numbers multiplied
};
console.log(multiplier.multiply());