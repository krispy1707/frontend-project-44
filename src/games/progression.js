import runGame from "../index.js";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = "..";

  const question = progression.join(" ");

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const instruction = "What number is missing in the progression?";
  runGame(instruction, generateRound);
};

export default runProgressionGame;
