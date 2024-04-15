import launchGame from '../index.js';
import getRandomNumber from '../random.js';

// Число простое?
const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Функция, которая генерирует вопрос к игре простое число
const generateQuestionPrime = () => {
  // Создаем случайное число
  const number = getRandomNumber(200);
  // Правильный ответ на вопрос
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [number, correctAnswer];
};
// Правила игры
const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// Функция запуска игры
const startPrimeGame = () => launchGame(rulesGame, generateQuestionPrime);
export default startPrimeGame;
