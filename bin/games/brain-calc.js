#!/usr/bin/env node
import { game } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос к игре с вычислениями
const randomQuestionCalc = () => {
    // Создаем два случайных числа number1 и number2
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    // Создаем случайное число для определения операции
    const operation = Math.floor(Math.random() * 3);

    let correctAnswer = 0; // Правильный ответ на вопрос
    let question = ''; // Вопрос, на который отвечает игрок
    if (operation === 1) { // 1 === * 
        correctAnswer = String(number1 * number2);
        question = `${number1} * ${number2}`;
    } else if (operation === 2) { // 2 === +
        correctAnswer = String(number1 + number2);
        question = `${number1} + ${number2}`;
    } else { // 3 === -
        correctAnswer = String(number1 - number2);
        question = `${number1} - ${number2}`;
    }

    // Возвращаем из функции созданный вопрос и правильный ответ на него
    return [question, correctAnswer];
};

const rulesGame = 'What is the result of the expression?'; // Правила игры

game(rulesGame, randomQuestionCalc); // Начало игры