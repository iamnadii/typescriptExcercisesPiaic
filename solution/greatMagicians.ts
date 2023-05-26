// func() to add 'The Great' with every magician name
const makeGreat = (magician: string): any => {
    return `The Great, ${magician}`;
};
// func() to display the name of magicians
const showMagicians01 = (list: string[]): any => {
    list.map((el, i) => {
        console.log(`Magician#${i + 1} :${el}`);
        return;
    });
    return '';
};
const magiciansName01: string[] = [
    'James Ward Marshall',
    'Philip Thorner Goldstein',
    'Val Valentino',
    'James Lister Cook',
];

const greatMagicians: string[] = magiciansName01.map((el) => {
    return makeGreat(el);
});

console.log('----------Magicians with original names----------');
showMagicians01(magiciansName01);
console.log('----------Magicians with (The Great Added) names----------');
showMagicians01(greatMagicians);
