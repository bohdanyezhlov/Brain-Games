import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const makeNewStep = () => {
  const firstNumber = getRandomNum(0, 100);
  const secondNumber = getRandomNum(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const solution = String(getGcd(firstNumber, secondNumber));

  return [question, solution];
};

const runBrainGcd = () => {
  runGame(description, makeNewStep);
};

export default runBrainGcd;
