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


function clearFalsy(arr) {
    const newArr = [];
    for (const item of arr) {
        if (item)  {
            newArr.push(item)
        }
    }
    return newArr;
}
console.log(clearFalsy([0, 1, false, 2, undefined, '', 3, null]));