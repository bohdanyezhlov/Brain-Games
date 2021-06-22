import readlineSync from 'readline-sync';

const game = (description, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const data = func();
    const question = data[0];
    const solution = data[1];

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === solution) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
