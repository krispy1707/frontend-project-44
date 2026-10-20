import runGame from "../index.js";

const isEven = (num) => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? "yes" : "no";
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(instruction, generateRound);
};

export default runEvenGame;
