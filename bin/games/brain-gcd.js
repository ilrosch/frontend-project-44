#!/usr/bin/env node
import { game, getRandomNumber } from '../../src/index.js'; // Выполняем импорт функционала игр

// Функция, которая создает случайный вопрос к игре наибольший общий делитель
const randomQuestionGcd = () => {
    // Создаем два случайных числа number1 и number2
    const number1 = getRandomNumber(101, 1);
    const number2 = getRandomNumber(101, 1);
    // Создаем случайный вопрос из двух чисел выше
    const question = `${number1} ${number2}`;

    // Создаем переменные для цикла
    let maxNumber; // Максимальное из чисел
    let minNumber; // Минимальное из чисел
    let correctAnswer; // Наибольший общий делитель

    // Определяем максимальное и минимальное из чисел
    if (number1 > number2) {
        maxNumber = number1;
        minNumber = number2;
    } else {
        maxNumber = number2;
        minNumber = number1;
    }

    // Находим НОД
    for (let i = minNumber; i >= 1; i -= 1) {
        // Если два числа делятся без остатка на i, то i - НОД
        if (maxNumber % i === 0 && minNumber % i === 0) {
            correctAnswer = i;
            break; // НОД найден, останавливаем цикл
        }
    }

    // Преобразуем ответ к типу строка для корректной работы программы
    correctAnswer = String(correctAnswer);
    // Возвращаем из функции созданный вопрос и правильный ответ на него
    return [question, correctAnswer];
};

const rulesGame = 'Find the greatest common divisor of given numbers.'; // Правила игры

game(rulesGame, randomQuestionGcd); // Начало игры