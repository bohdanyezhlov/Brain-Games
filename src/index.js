import readlineSync from 'readline-sync';

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
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let step = 0; step <= 3;) {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const number = getRandomNum();
    console.log(`Qusetion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const solution = isEven(number);

    if ((answer === 'yes') && solution) {
      console.log('Correct!');
      step += 1;
    } else if ((answer === 'no') && !solution) {
      console.log('Correct!');
      step += 1;
    } else if ((answer !== 'no') && !solution) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      return;
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
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
      return;
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
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
      return;
    }
  }
};

// brain-progression.js

const brainProgres = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}!`);

  console.log('What number is missing in the progression?');

  for (let step = 0; step <= 3;) {
    if (step === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

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

    console.log('Question:', progression.join(' '));

    const answer = readlineSync.question('Your answer: ');
    const solution = originalNumber;

    if (Number(answer) === solution) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
      return;
    }
  }
};

export {
  brainEven,
  brainCalc,
  brainGcd,
  brainProgres,
};
