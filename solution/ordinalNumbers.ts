const ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinalNumbers.forEach((nmbr) => {
    if (nmbr === 1) {
        console.log(`${nmbr}st`);
    } else if (nmbr === 2) {
        console.log(`${nmbr}nd`);
    } else if (nmbr === 3) {
        console.log(`${nmbr}rd`);
    } else {
        console.log(`${nmbr}th`);
    }
});
