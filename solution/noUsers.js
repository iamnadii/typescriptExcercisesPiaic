"use strict";
const noUsers = [];
if (noUsers.length < 1) {
    console.log('We need to find some users...');
}
else {
    noUsers.forEach((user) => {
        if (user === 'Admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    });
}
