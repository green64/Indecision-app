function square (x) {
  return x * x;
};

console.log(square(3));


// all arrow functions are anonymous 
// you have to assign them to a variable

// const squareArrow = (x) => {
//   return x * x;
  
// };

//this is identical to the function above
const squareArrow = (x) => x * x;

console.log(squareArrow(4));

//version 1

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };
//   console.log(getFirstName('Samantha McCall'));

//version 2 shorthand but same above
  const getFirstName = (fullName) => fullName.split(' ')[0];
    console.log(getFirstName('Pippa McCall'));
  
  

