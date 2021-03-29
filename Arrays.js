// to store multiple data in a single variable
// to store a collection of datd
// we call them as array

// declaring an array

var shoppingList = ["rice", "maggi", "shampoo", "sugar", "ToorDal"];

shoppingList = [
    ["rice", 56],
    ["maggi", 56],
    ["shampoo", 56],
    ["sugar", 56],
    ["ToorDal", 50],
    ["GroundnutOil", "cocnutOil"],
];

//indexes --> numbers assigned to each elements/data in the array
var shampoo = shoppingList[2];
var shampooPrice = shoppingList[2][1];
console.log(shampooPrice);
console.log(shoppingList[5][1]);

console.log(`removed element`)

//to remove a last element from an array we will use pop()built only for an array

var numbers = [1,2,3]
var removeElement = numbers.pop();
console.log(removedElement);
console.log(numbers);

var fruit = ["apple", "mango",];
