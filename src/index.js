import readlineSync from 'readline-sync';

const runGame = (description, makeNewStep) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const numberOfGameRounds = 3;

  for (let i = 0; i < numberOfGameRounds; i += 1) {
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

export default runGame;
