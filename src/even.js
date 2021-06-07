import readlineSync from 'readline-sync';
import { welcome, name } from './cli.js';
// import getRandomNum from './randomNum.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getRandomNum = () => {
  const randomNum = Math.round(Math.random() * 100);
  return randomNum;
};

const brainEven = () => {
  welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let step = 0; step <= 3;) {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const number = getRandomNum();
    console.log(`Qusetion: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(number) && (answer === 'yes')) {
      console.log('Correct!');
      step += 1;
    } else if (!(isEven(number)) && (answer === 'no')) {
      console.log('Correct!');
      step += 1;
    } else if (!(isEven(number)) && (answer !== 'no')) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
    }
  }
};

export default brainEven;
