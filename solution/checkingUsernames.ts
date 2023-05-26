const curntUsrs: string[] = ['adam', 'bob', 'john'];
const newUsrs: string[] = ['bob', 'rocky', 'dave'];

newUsrs.forEach((user, i) => {
    let isUsed = false;
    curntUsrs.forEach((curnt, i) => {
        if (user === curnt) {
            console.log('Already used, enter a new username');
            isUsed = true;
        }
    });
    if (!isUsed) {
        console.log('Username is available');
    }
});
