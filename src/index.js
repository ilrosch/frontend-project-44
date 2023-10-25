import readlineSync from 'readline-sync';
import getGreeting from './cli.js'; // Импортируем функцию, которая приветствует пользователя

// Имя игрока (пользователя)
const userName = getGreeting();

// Функция, которая создает случайный вопрос
const randomQuestion = (defGame) => {
  // Получаем наш вопрос и правильный ответ на него
  const [question, correctAnswer] = defGame(); // Вызов функции конкретной игры

  // Выводим вопрос в консоль
  console.log(`Question: ${question}`);

  // Спрашиваем ответ пользователя
  // Метод toLowerCase() используется для текстовых игр, чтобы 'yes' === 'Yes' === 'YES' и т.д.
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  // Возвращаем из функции ответ игрока, правильный ответ, boolean значение (правильно ли ответил игрок?)
  return [userAnswer, correctAnswer, correctAnswer === userAnswer];
};

// Функция, которая генерирует случайные числа в заданном диапазоне
// Функция, которая создает число в заданном диапазоне [ x, y )
const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

// Основная функция игры
const game = (rules, defGame) => {
  // Выводим в консоль правила игры
  console.log(rules);

  // С помощью цикла задаем кол-во раундов
  for (let i = 0; i < 3; i += 1) {
    const [userAnswer, correctAnswer, answer] = randomQuestion(defGame); // defGame - функция конкретной игры
    if (answer) { // answer - boolean значение (правильно ли ответил игрок?)
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
      return;
    }
  }

  // Выводим на экран поздравление с победой
  console.log(`Congratulations, ${userName}!`);
};

export { game, getRandomNumber };

