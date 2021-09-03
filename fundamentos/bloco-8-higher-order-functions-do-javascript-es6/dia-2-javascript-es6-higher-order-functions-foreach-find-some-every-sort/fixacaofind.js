const numbers = [19, 21, 30, 3, 45, 22, 15];

const findNum = findDivisibleBy3And5 = (number) => {if (number % 3 === 0 && number % 5 === 0) { console.log(number)}};
numbers.find(findNum);