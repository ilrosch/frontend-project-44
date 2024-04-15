import launchGame from '../index.js';
import getRandomNumber from '../random.js';

// Функция, которая создает прогрессию
const getProgression = (num, difference, len) => {
  const progression = [];
  let number = num;
  // Создаем счетчик
  let count = 0;
  // Создаем арифметическую прогрессию
  while (count !== len) {
    progression.push(number);
    number += difference;
    count += 1;
  }

  return progression;
};

// Функция, которая генерирует вопрос к игре арифметическая прогрессия
const generateQuestionProgression = () => {
  // Создаем случайное число, с которого будет начинаться прогрессия
  const number = getRandomNumber(50);
  // Последовательность от 5 до 10
  const len = getRandomNumber(11, 5);
  // Получаем индекс, по которому будет пропущено число
  const skip = getRandomNumber(len);
  // Создаем случайное число для разности арифметической прогрессии
  const difference = getRandomNumber(21, -20);
  // Создаем арифметическую прогрессию
  const progression = getProgression(number, difference, len);
  // Правильный ответ на вопрос
  const correctAnswer = String(progression[skip]);
  // Создаем вопрос
  const question = String(progression).replaceAll(',', ' ').replace(correctAnswer, '..', 1);
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [question, correctAnswer];
};
// Правила игры
const rulesGame = 'What number is missing in the progression?';
// Функция запуска игры
const startProgressionGame = () => launchGame(rulesGame, generateQuestionProgression);
export default startProgressionGame;
