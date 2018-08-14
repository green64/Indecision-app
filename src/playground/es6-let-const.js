var nameVar = 'Andrew';
var nameVar = "Mike";
console.log('nameVar', nameVar);

//you can reassign let but you can't use it 2x
let nameLet = "Jen";
nameLet = "Julia";
console.log('nameLet', nameLet);

//you can't even reassign const
const nameConst = "Frank";
console.log('nameConst', nameConst);

//unlike var, const and let have block level scope 

var fullName = 'Andrew Mead';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

//if you change to let or const you don't get second console.log
//because of block level scope
const thisName = 'Samantha McCall';

if (thisName) {
  const thisFirstName = thisName.split(' ')[0];
  console.log(thisFirstName);
}

console.log(thisFirstName);