returnTwo = () => {
  return 2
};

greeting = name => {
  return `Hello, ${name}.`
};

add = (num1, num2) => {
  let result = num1 + num2
  return result
}

subtract = (num1, num2) => {
  let result = num1 - num2
  return result
}

multiply = (num1, num2) => {
  let result = num1 * num2
  return result
}

divide = (num1, num2) => {
  let result = num1 / num2
  return result
}

module.exports = {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide
};
