#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос к игре арифметическая прогрессия
const randomQuestionPrime = () => {
    // Создаем случайное число, с которого будет начинаться прогрессия
    const number = getRandomNumber(200);
    // Правильный ответ на вопрос
    let correctAnswer = 'yes';
    // Ищим делители числа
    for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) { correctAnswer = 'no'; }
    }
    // Создаем вопрос
    const question = number;
    // Возвращаем из функции созданный вопрос и правильный ответ на него
    return [question, correctAnswer];
};

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // Правила игры

game(rulesGame, randomQuestionPrime); // Начало игры