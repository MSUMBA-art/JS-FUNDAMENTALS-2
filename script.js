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
function calcAge1(birthday) {
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

