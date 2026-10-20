import runGame from "../index.js";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  const instruction = "Find the greatest common divisor of given numbers.";
  runGame(instruction, generateRound);
};

export default runGcdGame;
