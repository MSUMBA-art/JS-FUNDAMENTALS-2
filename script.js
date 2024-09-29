'strict';
// ===== FUNCTIONS ======
/*function logger() {
  console.log('i am Alexander');
}

/// calling, running, invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice
}
const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);

const appleOrOrangeJuice = fruitProcessor(2, 9);
console.log(appleOrOrangeJuice);*/

////// function declaration
/*function calcAge1(birthday) {
  return 2024 - birthday;
}

const age1 = calcAge1(1983);
// console.log(age1);

/////  function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1999)
console.log(age1, age2);
*/


/*const calcAge3 = birthYear => 2024 - birthYear;
const age = calcAge3(1983)
console.log(age);

const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetire(1983, "Alexander"));
console.log(yearsUntilRetire(2012, 'Irene'));*/

function cutFourPieces(fruit) {
  return fruit * 4
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFourPieces(apples);
  const orangePieces = cutFourPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));






