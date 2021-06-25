import readlineSync from 'readline-sync';

const game = (description, makeNewStep) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const data = makeNewStep();
    const [question, solution] = data;

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
