import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'Answer "yes" if given number is even. Otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainStep = () => {
  const number = getRandomNum();

  const question = `Qusetion: ${number}`;

  const solution = isEven(number) ? 'yes' : 'no';

  return [question, solution];
};

const brainEven = () => {
  game(description, brainStep);
};

export default brainEven;
