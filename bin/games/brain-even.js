#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос для игры в четность числа
const randomQuestionParity = () => {
  // Создается случайный вопрос с числом
  const question = getRandomNumber(100);
  // Получаем правильный ответ на созданный вопрос
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [question, correctAnswer];
};

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".'; // Правила игры

game(rulesGame, randomQuestionParity); // Начало игры
