import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'What is the result of the expression?';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNum = getRandomNum(0, operations.length - 1);
  const operation = operations[randomNum];
  return operation;
};

const getSolution = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw Error(`Unexpected operator ${operation}`);
  }
};

const generateQeustionAnswer = () => {
  const firstNumber = getRandomNum(0, 100);
  const secondNumber = getRandomNum(0, 100);
  const operation = getOperation();

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const solution = String(getSolution(firstNumber, secondNumber, operation));

  return [question, solution];
};

const runBrainCalc = () => {
  runGame(description, generateQeustionAnswer);
};

export default runBrainCalc;
