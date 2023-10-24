#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функия, котрая приветствует пользователя и запоминает его имя
const getGreeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    return name;
};

// Имя игрока (пользователя)
const userName = getGreeting();

// Функция, которая создает случайный вопрос
const randomQuestion = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operations = ['*', '+', '-'];
    const operation = operations[Math.floor(Math.random() * 3)];

    let correctAnswer = 0;
    if (operation === '*') { correctAnswer = number1 * number2; }
    if (operation === '+') { correctAnswer = number1 + number2; }
    if (operation === '-') { correctAnswer = number1 - number2; }

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    return [userAnswer, correctAnswer, correctAnswer === userAnswer];
};

// Основная функция игры
const gameCalc = () => {
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i += 1) {
        const [userAnswer, correctAnswer, answer] = randomQuestion();
        if (answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

gameCalc();