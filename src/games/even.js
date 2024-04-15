import launchGame from '../index.js';
import getRandomNumber from '../random.js';

// Число четное?
const isEven = (num) => num % 2 === 0;

// Функция, которая генерирует вопрос для игры в четность числа
const generateQuestionParity = () => {
  // Создается случайный число
  const number = getRandomNumber(100);
  // Получаем правильный ответ на созданный вопрос
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [number, correctAnswer];
};
// Правила игры
const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
// Функция запуска игры
const startEvenGame = () => launchGame(rulesGame, generateQuestionParity);
export default startEvenGame;
