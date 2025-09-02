const firstArray = [1, 3, 5];
const secondArray = [2, 4, 6];

// сучасний спосіб: spread
const merged = [...firstArray, ...secondArray];

// або: const merged = firstArray.concat(secondArray);

console.log("Об’єднаний:", merged);