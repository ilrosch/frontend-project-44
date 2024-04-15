import readlineSync from 'readline-sync';
import getGreeting from './cli.js';

// Кол-во раундов игры
const countRounds = 3;

// Основная функция игры
const launchGame = (rules, defGame) => {
  // Приветствие и запоминаем имя игрока (пользователя)
  const userName = getGreeting();
  // Выводим в консоль правила игры
  console.log(rules);
  // С помощью цикла задаем кол-во раундов
  for (let i = 0; i < countRounds; i += 1) {
    // defGame - функция конкретной игры
    // Получаем вопрос и ответ
    const [question, answer] = defGame();
    // Выводим вопрос в консоль
    console.log(`Question: ${question}`);
    // Спрашиваем ответ пользователя
    // Метод toLowerCase() используется для текстовых игр, чтобы 'yes' === 'Yes' === 'YES' и т.д.
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    // Если игрок ответил не верно завершить игру
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  // Выводим на экран поздравление с победой
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
