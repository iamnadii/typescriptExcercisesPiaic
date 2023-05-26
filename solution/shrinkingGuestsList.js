"use strict";
let guests02 = ['Imran', 'Kashif', 'Farhan', 'Asif'];
console.log(`Hey [${guests02.join(',')}], we have more guests on borad so need to change the table.`);
let newGuestsList = ['Ali', 'Numan', 'Bilal'];
console.log('new guest on board========>', newGuestsList.join(','));
newGuestsList.map((newGuest, i) => {
    if (i == 0) {
        guests02.unshift(newGuest);
    }
    if (i == 1) {
        guests02.push(newGuest);
    }
    if (i == 2) {
        if (guests02.length % 2 === 1) {
            guests02.splice(Math.round(guests02.length / 2), 0, newGuest);
        }
        else {
            guests02.splice(guests02.length / 2, 0, newGuest);
        }
    }
});
console.log('all guests after shifting table========>', guests02.join(','));
console.log('We are unable to find a big table for you guyss, so just 2 guests are allowed for now.');
while (guests02.length > 2) {
    const removedGuest = guests02.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests02.forEach((guest) => {
    console.log(`You're still invited to dinner, ${guest}!`);
});
guests02.splice(0, guests02.length);
console.log(`The guest list is now empty: ${guests02}`);
