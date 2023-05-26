const personName02: string = "muhammad nadeem";

console.log(
    "Uppercase------->",
    personName02.toLocaleUpperCase(),
);
console.log(
    "Lowercase------->",
    personName02.toLocaleLowerCase(),
);

console.log(
    "Titlecase------->",
    personName02
        .split(" ")
        .map((word) => {
            return (
                word.slice(0, 1).toLocaleUpperCase() +
                word.slice(1).toLocaleLowerCase()
            );
        })
        .join(" "),
);
