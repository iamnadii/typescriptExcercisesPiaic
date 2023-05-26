const magiciansName: string[] = [
    'James Ward Marshall',
    'Philip Thorner Goldstein',
    'Val Valentino',
    'James Lister Cook',
];
const showMagicians = (list: string[]): any => {
    list.map((el, i) => {
        console.log(`Magician#${i + 1} :${el}`);
        return;
    });
    return '';
};
showMagicians(magiciansName);
