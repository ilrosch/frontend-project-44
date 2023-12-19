#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос к игре арифметическая прогрессия
const randomQuestionProgression = () => {
  // Создаем случайное число, с которого будет начинаться прогрессия
  let number = getRandomNumber(50);
  // Последовательность от 5 до 10
  const len = getRandomNumber(11, 5);
  // Получаем индекс, по которому будет пропущено число
  const skip = getRandomNumber(len);
  // Создаем случайное число для разности арифметической прогрессии
  const difference = getRandomNumber(21, -20);
  // Создаем арифметическую прогрессию
  const progression = [];

  // Создаем счетчик
  let count = 0;
  // Создаем арифметическую прогрессию
  while (count !== len) {
    progression.push(number);
    number += difference;
    count += 1;
  }

  // Правильный ответ на вопрос
  const correctAnswer = String(progression[skip]);
  // Создаем вопрос
  const question = String(progression).replaceAll(',', ' ').replace(correctAnswer, '..', 1);
  // Возвращаем из функции созданный вопрос и правильный ответ на него
  return [question, correctAnswer];
};

const rulesGame = 'What number is missing in the progression?'; // Правила игры

game(rulesGame, randomQuestionProgression); // Начало игры
