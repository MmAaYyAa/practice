
/*************************lesson 2*****************************/


// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// premium = false;

// const keys = Object.keys(user);
// for (key of keys) {
//   console.log(`$[key] ': ' + user[key]`);
// }


// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// }

// let sum = 0;
// const values = Object.values(salaries);
// // for (const value of values) {
// //   sum += value;
// // }
// sum = values.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// console.log(sum);

// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stonesArray = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Брилліант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ]

// const calcTotalPrice = function (stones, stonesName) {
//   for(stone of stones){
//   if (stone.name === stonesName) {
//     return stone.price * stone.quantity
//   }
// }
// }
// console.log(calcTotalPrice(stonesArray, 'Щебінь' ))

// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// }

// console.log(calculator.read(2, 3));
// console.log(calculator.sum(2, 3));
// console.log(calculator.mult(2, 3));
// console.log(calculator);
// this mozhno zamenit na calculator


// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// const updateObject = (obj, ...args) => {
//   const keys = Object.keys(obj);
//   const newObj = {};
//   for (const key of keys) {
//     if (!args.includes(key)) {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));
 
// const updateObject = (obj, ...args) => {
//   const keys = Object.keys(obj);
//   const newObj = { ...obj };
//   for (const key of keys) {
//     if (args.includes(key)) {
//       delete newObj[key];
//     }
//   }
//   return newObj;
// };
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));

// function updateObject(obj, ...args) {
//   const newObj = {...obj};
//   args.forEach(key => delete newObj[key]);
  
//   return newObj;
// }

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// const elements = (arr) => {
//   return arr.filter(el => Boolean(el) !== false);
// }
// console.log(elements([0, 1, false, 2, undefined, '', 3, null])
// );

// const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// // Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати

// const revArr = function (arr) {
//   return arr.map((el, i, arr) => arr[arr.length - 1 - i]);
// }