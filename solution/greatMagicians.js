"use strict";
// func() to add 'The Great' with every magician name
const makeGreat = (magician) => {
    return `The Great, ${magician}`;
};
// func() to display the name of magicians
const showMagicians01 = (list) => {
    list.map((el, i) => {
        console.log(`Magician#${i + 1} :${el}`);
        return;
    });
    return '';
};
const magiciansName01 = [
    'James Ward Marshall',
    'Philip Thorner Goldstein',
    'Val Valentino',
    'James Lister Cook',
];
const greatMagicians = magiciansName01.map((el) => {
    return makeGreat(el);
});
console.log('----------Magicians with original names----------');
showMagicians01(magiciansName01);
console.log('----------Magicians with (The Great Added) names----------');
showMagicians01(greatMagicians);
