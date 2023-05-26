const favLocations: string[] = ['Dubari', 'USA', 'Iran', 'Australia'];

console.log('-----------In Original Order-----------');
console.log(favLocations);

const alphabeticOrder: string[] = [...favLocations];
console.log('-----------In Alphabetic Order-----------');
console.log(alphabeticOrder.sort());

console.log('-----------In Original Order-----------');
console.log(favLocations);

const reverseAlphabeticOrder: string[] = [...alphabeticOrder];
console.log('-----------In Alphabetic (reverse) Order-----------');
console.log(reverseAlphabeticOrder.reverse());

console.log('-----------In Original Order-----------');
console.log(favLocations);
