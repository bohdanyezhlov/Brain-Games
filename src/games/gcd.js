import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const brainStep = () => {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();

  const question = `Qusetion: ${firstNumber} ${secondNumber}`;

  const solution = String(getGcd(firstNumber, secondNumber));

  return [question, solution];
};

const brainGcd = () => {
  game(description, brainStep);
};

export default brainGcd;
