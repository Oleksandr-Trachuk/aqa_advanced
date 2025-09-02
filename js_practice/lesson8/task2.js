const src = [1, 2, 3, 4, 5];

// new array where each element is multiplied by its index
const mutated = src.map((value, index) => value * index);

console.log(mutated); // [0,2,6,12,20]