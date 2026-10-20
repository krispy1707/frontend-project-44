import runGame from "../index.js";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? "yes" : "no";

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(instruction, generateRound);
};

export default runPrimeGame;
