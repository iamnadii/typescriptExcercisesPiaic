const storeCarInfo = (
    name: string,
    manufacturer: string,
    color: string,
): object => {
    return { 'Car Name': name, 'Made by': manufacturer, 'Car Color': color };
};

console.log(storeCarInfo('Mehran', 'Suzuki', 'Grey'));
