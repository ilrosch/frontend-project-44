#!/usr/bin/env node
import { game } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос к игре арифметическая прогрессия
const randomQuestionProgression = () => {
    // Создаем случайное число, с которого будет начинаться прогрессия
    let number1 = Math.floor(Math.random() * 50);
    // Функция, которая создает число в заданном диапазоне [ x, y )
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    // Последовательность от 5 до 10
    const len = getRandomNumber(5, 11);
    // Получаем индекс, по которому будет пропущено число
    const skip = getRandomNumber(0, len);
    // Создаем случайное число для разности арифметической прогрессии
    const difference = Math.floor(Math.random() * 20);
    // Создаем арифметическую прогрессию
    const progression = [];

    // Создаем счетчик
    let count = 0;
    // Создаем арифметическую прогрессию
    while (count != len) {
        progression.push(number1);
        number1 += difference;
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