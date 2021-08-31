// const greetPeople = (people) => {
//     let greeting = 'Hello ';
  
//     for (const person in people) {
//       greeting += people[person];
//     }
//     return greeting;
//   };
  
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// const removeVowels = (word) => {
//     const characters = word.split('');
//     const results = [];
  
//     for (let index = 0; index < characters.length; index += 1) {
//       if (
//         characters[index] === 'a' ||
//         characters[index] === 'o' ||
//         characters[index] === 'i' ||
//         characters[index] === 'e' ||
//         characters[index] === 'u'
//       ) {
//         results.push(characters[index]);
//       } else {
//         results.push('_');
//       }
//     }
//     return results;
//   };
  
  
//   const parameter = 'Dayane';
//   const result = 'D1y2n3';

const greaterThanTen = (array) => {
    let results = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results += array[index];
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];