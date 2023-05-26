"use strict";
const printSandwichItems = (list) => {
    list.forEach((list, index) => {
        console.log(`Ingredient#${index + 1} : ${list}`);
    });
    return '';
};
console.log('----------Summary#01----------');
console.log(printSandwichItems(['Water', 'Tea', 'Sugar']));
console.log('----------Summary#02----------');
console.log(printSandwichItems(['Tomato', 'Milk', 'Salt']));
console.log('----------Summary#03----------');
console.log(printSandwichItems(['Bottle', 'Coffee', 'Chocolate']));
