// Функция, которая генерирует случайные числа в заданном диапазоне
// Функция, которая создает число в заданном диапазоне [ x, y )
const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNumber;
