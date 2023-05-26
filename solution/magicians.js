"use strict";
const magiciansName = [
    'James Ward Marshall',
    'Philip Thorner Goldstein',
    'Val Valentino',
    'James Lister Cook',
];
const showMagicians = (list) => {
    list.map((el, i) => {
        console.log(`Magician#${i + 1} :${el}`);
        return;
    });
    return '';
};
showMagicians(magiciansName);
