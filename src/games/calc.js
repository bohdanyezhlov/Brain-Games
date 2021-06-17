import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'What is the result of the expression?';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * 3);
  const operation = operations[randomNum];
  return operation;
};

const getSolution = (firstNumber, secondNumber, operation) => {
  let solution = 0;

  if (operation === '+') {
    solution = firstNumber + secondNumber;
  } else if (operation === '-') {
    solution = firstNumber - secondNumber;
  } else {
    solution = firstNumber * secondNumber;
  }

  return solution;
};

const brainStep = () => {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();
  const operation = getOperation();

  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  const solution = String(getSolution(firstNumber, secondNumber, operation));

  return [question, solution];
};

const brainCalc = () => {
  game(description, brainStep);
};

export default brainCalc;
