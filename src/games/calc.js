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

  switch (operation) {
    case '+':
      solution = firstNumber + secondNumber;
      break;
    case '-':
      solution = firstNumber - secondNumber;
      break;
    case '*':
      solution = firstNumber * secondNumber;
      break;
    default:
      console.log('Unexpected operator');
  }

  return solution;
};

const makeNewStep = () => {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();
  const operation = getOperation();

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const solution = String(getSolution(firstNumber, secondNumber, operation));

  return [question, solution];
};

const brainCalc = () => {
  game(description, makeNewStep);
};

export default brainCalc;
