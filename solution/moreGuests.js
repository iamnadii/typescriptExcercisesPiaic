"use strict";
const guests03 = ['Imran', 'Kashif', 'Farhan', 'Asif'];
console.log(`Hey [${guests03.join(',')}], we have more guests on borad so need to change the table.`);
const newGuestsList01 = ['Ali', 'Numan', 'Bilal'];
console.log('new guest on board========>', newGuestsList01.join(','));
newGuestsList01.map((newGuest, i) => {
    if (i == 0) {
        guests03.unshift(newGuest);
    }
    if (i == 1) {
        guests03.push(newGuest);
    }
    if (i == 2) {
        if (guests03.length % 2 === 1) {
            guests03.splice(Math.round(guests03.length / 2), 0, newGuest);
        }
        else {
            guests03.splice(guests03.length / 2, 0, newGuest);
        }
    }
});
console.log('all guests after shifting table========>', guests03.join(','));
