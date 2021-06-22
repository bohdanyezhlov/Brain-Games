import game from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'What number is missing in the progression?';

const brainStep = () => {
  const firstNumber = getRandomNum();
  const countProgression = Math.floor((Math.random() * 6) + 5);
  const d = Math.floor((Math.random() * 10) + 1);
  const hiddenNumber = Math.floor(Math.random() * countProgression);
  const progression = [];
  let temp = firstNumber;

  for (let i = 0; i < countProgression; i += 1) {
    progression.push(temp);

    temp += d;
  }

  const originalNumber = progression[hiddenNumber];
  progression[hiddenNumber] = '..';

  const question = progression.join(' ');

  const solution = String(originalNumber);

  return [question, solution];
};

const brainProgression = () => {
  game(description, brainStep);
};

export default brainProgression;
