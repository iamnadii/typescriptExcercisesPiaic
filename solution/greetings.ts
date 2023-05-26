// initializing an array of string with my friends names
const friendNames01: string[] = [
    "Ahmed Hassan",
    "Aoun Jabbar",
    "Muhammad Ali",
    "Bilal Iqbal",
];
// looping the array and print the names with greetings one by one
friendNames01.map((name) => {
    console.log(`Hey ${name}! Nice to meet you.`);
    return;
});
