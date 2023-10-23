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
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    return [userAnswer, correctAnswer, correctAnswer === userAnswer];
};

// Основная функция игры
const gameParity = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

gameParity();


