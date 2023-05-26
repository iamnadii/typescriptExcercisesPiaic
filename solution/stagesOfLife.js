"use strict";
const personAge = 23;
if (personAge < 2) {
    console.log('Baby Here...');
}
else if (personAge >= 2 && personAge < 4) {
    console.log('Toddler Here...');
}
else if (personAge >= 4 && personAge < 13) {
    console.log('Kid Here...');
}
else if (personAge >= 13 && personAge < 20) {
    console.log('Teenager Here...');
}
else if (personAge >= 20 && personAge < 65) {
    console.log('Adult Here...');
}
else if (personAge >= 65) {
    console.log('Elder Here...');
}
