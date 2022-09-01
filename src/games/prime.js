import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQeustionAnswer = () => {
  const number = getRandomNum(0, 100);

  const question = String(number);
  const solution = isPrime(number) ? 'yes' : 'no';

  return [question, solution];
};

const runBrainPrime = () => {
  runGame(description, generateQeustionAnswer);
};

export default runBrainPrime;
