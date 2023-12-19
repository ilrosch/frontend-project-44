import readlineSync from 'readline-sync';

// Функия, котрая приветствует пользователя и возвращает его имя
export default () => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  // Спрашиваем, как зовут игрока
  const userName = readlineSync.question('May I have your name?: ');
  // Приветствуем игрока
  console.log(`Hello, ${userName}!`);
  // Возвращаем из функции имя игрока
  return userName;
};
