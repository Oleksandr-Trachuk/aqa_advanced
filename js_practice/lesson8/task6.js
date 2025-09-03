const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// створюємо копію
const sorted = [...numbersList].sort((a, b) => a - b);

console.log('Оригінал:', numbersList);
console.log('Відсортований:', sorted);
