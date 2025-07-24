function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(number, onEven, onOdd) {
  if (number % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

// Example usage:
handleNum(7, handleEven, handleOdd);