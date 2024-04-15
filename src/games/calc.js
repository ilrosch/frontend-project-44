import launchGame from '../index.js';
import getRandomNumber from '../random.js';

// Функция, которая выполняет выбранную операцию над числами
const calc = (a, b, operation) => {
  switch (operation) {
    case '*': return a * b;
    case '+': return a + b;
    case '-': return a - b;
    default: throw new Error(`No operation - ${operation}`);
  }
};

// Функция, которая генерирует вопрос к игре с вычислениями
const generateQuestionCalc = () => {
  // Создаем два случайных числа number1 и number2
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  // Создаем случайное число для определения операции
  const operations = ['*', '+', '-'];
  const operation = operations[getRandomNumber(3)];
  // Создаем вопрос
  const question = `${number1} ${operation} ${number2}`;
  // Правильный ответ на вопрос и приобразуем к типу строка для правильной работы
  const correctAnswer = String(calc(number1, number2, operation));
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [question, correctAnswer];
};
// Правила игры
const rulesGame = 'What is the result of the expression?';
// Функция запуска игры
const startCalcGame = () => launchGame(rulesGame, generateQuestionCalc);
export default startCalcGame;
