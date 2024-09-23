'strict';
// ===== FUNCTIONS ======
function logger() {
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
console.log(appleOrOrangeJuice);



