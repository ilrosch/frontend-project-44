#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getGreeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    return name;
};

const userName = getGreeting();

const gameParity = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const questions = [15, 6, 7];
    const correctAnswers = ['no', 'yes', 'no'];

    for (let i = 0; i < questions.length; i += 1) {
        console.log(`Question: ${questions[i]}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = correctAnswers[i];

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

gameParity();


