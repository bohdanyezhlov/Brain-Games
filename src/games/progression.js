import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstNumber, lengthOfProgression, delta) => {
  const progression = [];
  let current = firstNumber;

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(current);

    current += delta;
  }

  return progression;
};

const generateQeustionAnswer = () => {
  const firstNumber = getRandomNum(0, 100);
  const lengthOfProgression = getRandomNum(5, 10);
  const delta = getRandomNum(1, 10);

  const progression = createProgression(firstNumber, lengthOfProgression, delta);

  const indexOfHiddenNumber = getRandomNum(0, (lengthOfProgression - 1));
  const originalNumber = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';

  const question = progression.join(' ');
  const solution = String(originalNumber);

  return [question, solution];
};

const runBrainProgression = () => {
  runGame(description, generateQeustionAnswer);
};

export default runBrainProgression;
