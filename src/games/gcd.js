import launchGame from '../index.js';
import getRandomNumber from '../random.js';

// Функция для нахождения НОД
const gcd = (a, b) => ((a % b) ? gcd(b, a % b) : Math.abs(b));

// Функция, которая генерирует вопрос к игре наибольший общий делитель
const generateQuestionGcd = () => {
  // Создаем два случайных числа number1 и number2
  const number1 = getRandomNumber(101, 1);
  const number2 = getRandomNumber(101, 1);
  // Создаем случайный вопрос из двух чисел выше
  const question = `${number1} ${number2}`;
  // Получаем правильный ответ и преобразуем его к типу строка для корректной работы программы
  const correctAnswer = String(gcd(number1, number2));
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [question, correctAnswer];
};
// Правила игры
const rulesGame = 'Find the greatest common divisor of given numbers.';
// Функция запуска игры
const startGcdGame = () => launchGame(rulesGame, generateQuestionGcd);
export default startGcdGame;
