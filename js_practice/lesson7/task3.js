function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  if (denominator === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return numerator / denominator;
}

// Тести
const testCases = [
  [10, 2],
  [10, 0],
  [10, 'a'],
];

for (const [num, denom] of testCases) {
  try {
    const result = divide(num, denom);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log('Execution completed for', num, '/', denom);
  }
}
