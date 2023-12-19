import readlineSync from 'readline-sync';

const getBuy = (user, computer) => {
  if (user > computer) {
    console.log(`По итогу всех игр: \n Вы - победитель (${user}) \n Компьютер - проиграл (${computer})`);
  } else if (user < computer) {
    console.log(`По итогу всех игр: \n Вы - проиграли (${user}) \n Компьютер - выиграл (${computer})`);
  } else {
    console.log(`По итогу всех игр: \n Ничья! Вы играли с компьютером на равных (${user})`);
  }
  console.log('Спасибо за игру! До встречи!');
};

const playRockPaperScissors = (user = 0, computer = 0) => {
  // Интсрукция
  console.log('Выберите вашу фигуру: \n 1. Камень \n 2. Ножницы \n 3. Бумага');
  // Спрашиваем пользователя
  let userValue = readlineSync.question('Ваш выбор: ').toLowerCase();
  // Корректные значения
  const numbersAvailableValues = [1, 2, 3];
  const availableValues = ['камень', 'ножницы', 'бумага'];
  // Проверяем ответ пользователя на корректность
  if (!availableValues.includes(userValue)) {
    if (numbersAvailableValues.includes(Number(userValue))) {
      userValue = availableValues[Number(userValue) - 1];
    } else {
      console.log(`Ошибка. Введено некорректное значение! Доступные значения: ${numbersAvailableValues} или ${availableValues}`);
      return;
    }
  }
  // Выводим выбор пользователя
  console.log(`Вы выбрали: ${userValue}`);
  // Получаем ход компьютера
  const computerValue = availableValues[Math.floor(Math.random() * 3)];
  // Результат игры
  let resultMsg = '';
  let userResult = user;
  let computerResult = computer;

  if (userValue === 'камень') {
    if (computerValue === 'камень') {
      userResult += 0.5;
      computerResult += 0.5;
      resultMsg = 'Ничья! Компьютер читает ваши мысли. Он выбрал тоже что и вы.';
    } else if (computerValue === 'ножницы') {
      userResult += 1;
      resultMsg = 'Вы победили! Камень ломает ножницы.';
    } else {
      computerResult += 1;
      resultMsg = 'Вы проиграли! Компьютер обернул ваш камень в бумагу.';
    }
  } else if (userValue === 'ножницы') {
    if (computerValue === 'камень') {
      resultMsg = 'Вы проиграли! Компьютер сломал ваши ножницы о камень.';
    } else if (computerValue === 'ножницы') {
      userResult += 0.5;
      computerResult += 0.5;
      resultMsg = 'Ничья! Компьютер читает ваши мысли. Он выбрал тоже что и вы.';
    } else {
      userResult += 1;
      resultMsg = 'Вы победили! Ножницы режут бумагу.';
    }
  } else if (computerValue === 'камень') {
    userResult += 1;
    resultMsg = 'Вы победили! Бумага оборачивает камень';
  } else if (computerValue === 'ножницы') {
    computerResult += 1;
    resultMsg = 'Вы проиграли! Компьютер режит вашу бумагу ножницами.';
  } else {
    userResult += 0.5;
    computerResult += 0.5;
    resultMsg = 'Ничья! Компьютер читает ваши мысли. Он выбрал тоже что и вы.';
  }

  console.log(`Результат: ${resultMsg}`);
  console.log(`Общий результат за все игры: \n Вы: ${userResult} \n Компьютер: ${computerResult}`);

  // Хочет ли пользователь продолжить игру?
  const userStart = readlineSync.question('Хотите сыграть еще раз? (да/нет): ').toLowerCase();

  if (userStart === 'да') {
    playRockPaperScissors(userResult, computerResult);
  } else {
    getBuy(userResult, computerResult);
  }
};

const getGreeting = () => {
  // Приветствие
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
  // Запуск игры
  playRockPaperScissors();
};

getGreeting();
