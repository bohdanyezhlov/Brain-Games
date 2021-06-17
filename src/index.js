import readlineSync from 'readline-sync';

const game = (description, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const step = func();
    const [question, solution] = step;

    console.log(question);

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
