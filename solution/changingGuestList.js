"use strict";
const guests01 = ['Imran', 'Kashif', 'Farhan', 'Asif'];
console.log('all guests======>', guests01.join(','));
console.log('Kashif is not coming on dinner');
const newGuestName = 'Aoun';
const modifiedGuestList = guests01.map((guest) => {
    if (guest == 'Kashif') {
        return newGuestName;
    }
    else {
        return guest;
    }
});
console.log('all guests (modified list)======>', modifiedGuestList.join(','));
modifiedGuestList.map((guest) => {
    console.log(`Hey ${guest}, i would like you to invite on dinner.`);
});
