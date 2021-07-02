import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'Answer "yes" if given number is even. Otherwise answer "no".';

const isEven = (num) => num % 2;

const makeNewStep = () => {
  const number = getRandomNum(0, 100);

  const question = String(number);
  const solution = isEven(number) ? 'no' : 'yes';

  return [question, solution];
};

const runBrainEven = () => {
  runGame(description, makeNewStep);
};

export default runBrainEven;
