import readlineSync from 'readline-sync';
import { welcome, name } from './cli.js';

// brain-even.js

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

// brain-calc.js

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNum = Math.floor(Math.random() * 3);
  const operation = operations[randomNum];
  return operation;
};

const brainCalc = () => {
  welcome();

  console.log('What is the result of the expression?');

  for (let step = 0; step <= 3;) {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const firstNumber = getRandomNum();
    const secondNumber = getRandomNum();
    const operation = getOperation();
    console.log(`Qusetion: ${firstNumber} ${operation} ${secondNumber}`);

    const answer = readlineSync.question('Your answer: ');

    let solution = 0;

    if (operation === '+') {
      solution = firstNumber + secondNumber;
    } else if (operation === '-') {
      solution = firstNumber - secondNumber;
    } else {
      solution = firstNumber * secondNumber;
    }

    if (Number(answer) === solution) {
      console.log('Correct!');
      step += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
    }
  }
};

// brain-gcd.js

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const brainGcd = () => {
  welcome();

  console.log('Find the greatest common divisor of given numbers.');

  for (let step = 0; step <= 3;) {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const firstNumber = getRandomNum();
    const secondNumber = getRandomNum();
    console.log(`Qusetion: ${firstNumber} ${secondNumber}`);

    const answer = readlineSync.question('Your answer: ');
    const solution = getGcd(firstNumber, secondNumber);

    if (Number(answer) === solution) {
      console.log('Correct!');
      step += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
    }
  }
};

export { brainEven, brainCalc, brainGcd };
