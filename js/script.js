//  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"


//const message = prompt("Яка офіційна назва JavaScript?");
//console.log(message);
//if (message.toLowerCase() === "ECMAScript".toLowerCase()) {
//    alert("Вірно!");
//} else {
 //   alert("Не знаєте? ECMAScript!");
    
//};
//console.log(message);



//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//const globalMinutes = 90
//const hours = Math.floor(globalMinutes / 60);
//const minutes = globalMinutes % 60;
//const modyfyHours = string(hours).padStart(2, 0);
//const modyfyMinutes = string(minutes).padStart(2, 0);
//console.log('Час ${modyfyHours} : ${modyfyMinutes}`);


//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

//const max = 50
//const min = 23

//for (let i = max; i >= min; i -= 1){
//    if (!(i % 2)){
//        console.log(i);}
//}


// За допомогою цикла for додайте всі парні числа від min до max

//const max = 50
//const min = 0
//let sum = 0
//for (i = min; i <= max; i += 1){
//    if (!(i % 2)) sum += i;
//}
//console.log(sum)



// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

//let total = 0;
//let message = prompt("введіть число");
//do {
//     if (message) {
//      total += +message;
//       message = prompt("введіть число");
//       console.log(total);
//      }
//   } while (message);
//   console.log(total);





//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

//const string = 'abcde'
//const string2 = 'bcde'
//let message;

//function chekString(str) {
//if (str.indexOf('a') === 'a') {
//        console.log("так");
//    } else {
//        console.log("ні");
//    }
//}
//chekString(string);
//chekString(string2);


// Напишіть функцію, що прибирає значення, які повторюються
// Очікується[1, 2, 3, 1, 2] => [1, 2, 3]

//function removeItems(arr) {
//    const newArr = [];
//    for (const item of arr) {
//        if (!newArr.includes(item)) {
//            newArr.push(item)
//        }
//    }
//    return newArr;
//}

//console.log(removeItems([1, 2, 3]));


// Напиши функцію, яка на вхід приймає масив та елемент, який потрібно видалити
// виклик фукції повинен повертати нам новий масив без видаленого елелементу.
//
//const symbolArray = ['s', 'd', 'f', 'g']


//function removeItem(arr, symbol) {
//    const newArr = [];
//    for (const elt of arr) {
//        if (elt !== symb) {
//            newArr.push(elt);
//        }
//   }
//    return newArr;
//}

//console.log(removeItem(symbolArray, 'f'));['s', 'd', 'g']



// Напишіть функцію-пошук найменшого елемента в масиві.
//
//const numbers = [1, 3, -1, -6, 5, 4, -2, 6, 8]

//function findMin(arr) {
//    let min = numbers[0];
//
//    for (const number of arr) {
//        if (number < min) {
//            min = number;
//        }
//    }
//    return min;
//
//}
//console.log(findMin(numbers));


//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

//let message = promt(" введіть число більше 100");
//while (message < 100) {
//    message = promt(" введіть число більше 100");
//}


//const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати

//function reverseArr(arr) {
//    let newArr = [];
//    for (let i = arr.length -1 ; i >= 0; i -= 1){
//        newArr.push(arr[i])
//
//    }
//    return newArr;
//}

//console.log(reverseArr(arrNumber))


// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]


// function clearFalsy(arr) {
//     const newArr = [];
//     for (const item of arr) {
//         if (item)  {
//             newArr.push(item)
//         }
//     }
//     return newArr;
// }
// console.log(clearFalsy([0, 1, false, 2, undefined, '', 3, null]));

// ...spread
// const a = { x: 1, y: 2, f: 10};
// const b = { x: 5, a: -10 };
// const c = {
//     name: 555,
//     ...a,
//     ...b,
//     f: 'Marsik',
// };
// console.log(c)


// ------- деструктуризация -------
    
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const{
//     name,
//     tracks,
//     rating,
//     trackCount,
//     author = 'user',
// } = playlist;
// console.log(
//     name,
//     tracks,
//     rating,
//     trackCount,
//     author)
// Change code below this line


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions){
//      if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//      }
//     }
//     this.potions.push(newPotion);
//   },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1){
//        if (this.potion[i].name === potionName) {
//        return this.potions.splice(i, 1);
           
//         }
//        }
//     return `Potion ${potionName} is not in inventory!`;
     
//     },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potion)

//     if (potion.name = oldName ) {
//       return potion.name = newName;
//     }
// return `Potion ${oldName} is not in inventory!`;
//     },
  
//   // Change code above this line
// };


// // Напиши скрипт керування особистим кабінетом інтернет банку.
// // Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// // Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }

// // Кожна транзакція - це об'єкт із властивостями id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   //історія транзакцій
//   transactions: [],

//   // Метод створює та повертає об'єкт транзакцій
//   // Приймає суму та тип транзакції

//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     }
//   },

//   // Метод відповідає за додавання суми до балансу.
//   // Приймає суму транзакції
//   // Викликає createTransaction для створення об'єкта транзакції
//   // Після чого додає його до історії транзакцій

//   deposit(amount) { },
//   / Метод відповідає за зняття суми з балансу.
//   // Приймає суму тразакцій.
//   // Викликає createTransaction для створення об'єкта транзакції
//   // Після чого додає його до історії транзакцій
//   // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

//   withdraw(amount) {},

//   // Метод, що повертає поточний баланс
//   getBalance() {},

//   // Метод шукає та повертає об'єкта транзакції по id
//   getTransactionDetails(id) {},

//   // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
//   getTransactionType(type) {},
// }

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// const letMeSeeYourName = function (callback) {
//   const name = prompt("ведіть ім`я: ");
//   if (!name) {
//     return
//   }
//   callback(name)
// }
// const greet = function (userName) {
//   console.log(`Привіт ${userName}`)
// }
// letMeSeeYourName(greet);


// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

// function makeProduct(name, price, callback) {
//   const obj = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(obj);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('Яблуко', 30, showProduct);

// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
//     яка пам"ятає ім"я шефа під час свого виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`)
// }

// makeDish('Mango', 'apple pie')
// makeDish('Poly', 'muffins')



// const makeShef = function (shefName) {
  
//   return  function (dish) {
//   console.log(`${shefName} is cooking ${dish}`)
// }
// }
// const mango = makeShef('Mango');
// mango('muffins');



// / Напишіть функцію makeCounter, яка повертає іншу функцію,
// //     яка рахує та виводить у консоль кількість своїх викликів

// const makeCounter = () => {
//   let counter = 0;

//   return () => {
//     console.log((counter += 1));
//   };
// };

// const log = makeCounter();
// log();
// log();
// log();
// log();



// Напиши клас Client, який створює об"єкт із властивостями login та email
// оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email



// class Client {
//   #login;
//   #email;
//   constructor(email, login) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     console.log(this.#email);
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }

//   get login() {
//     console.log(this.#login);
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
// }

// const obj = new Client("qwert@gmail.com", "qwer");
// console.log(obj);

// obj.email;
// obj.login = "qweqwe";
// obj.login;


// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)


// class Notes {
//   static priority = {
//     high: 'high',
//     low: 'low',
//   };

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     // const i = this.items.findIndex(item => item.text === text);
//     // this.items.splice(i, 1);
//     this.items = this.items.filter(item => item.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     // const i = this.items.findIndex(item => item.text === text);
//     // return (this.items[i].priority = newPriority);

//     this.items = this.items.map(item => {
//       if (item.text === text) {
//         item.priority = newPriority;
//       }

//       return item;
//     })
//   }
// }
// const obj = new Notes();
// obj.addNote({ text: 'Hello!', priority: Notes.priority.high });
// obj.addNote({ text: 'Goodbye!', priority: Notes.priority.low });
// obj.addNote({ text: 'Food!', priority: Notes.priority.high });
// obj.addNote({ text: 'Meat!', priority: Notes.priority.low });
// console.log(obj);
// obj.removeNote('Food!');
// obj.updatePriority('Meat!', 'high')
// console.log(obj);



// Напишіть функцію для зберігання знижки.
// Функція повертає іншу функцію, яка приймає суму покупки
// та повертає фінальну суму зі збереженою знижкою

const foo = function (discount) {
  
  return function (sum) {
    return sum - (sum * discount/100)
  }
}
const n = foo(10);
console.log(n(100));