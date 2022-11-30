'use strict';


// console.log(addExpenses.length);
// function myS() {
//     let a = period;
//     let b = mission;
//     console.log('период равен ' + a + ' ' + 'цель заработать ' + b + ' ' +'рублей' );
// }
// myS()
// console.log(addExpenses.toLowerCase()); - приводит строку к нижнему регистру

// console.log(addExpenses.split(','))  - разбивает слова на массив с помощью указания разделителя

// let budgetDay = money / 30;
// console.log(budgetDay.toFixed(2)) - фиксед метод для обрезки знаков после запятой

// let cuestion = confirm('Тебе есть 18 лет?'); - модальное окно с выбором да/отмена
// console.log(cuestion);
// let cuestion2 = prompt('Сколько тебе лет?') - модальное окно для ввода данных
// console.log(cuestion2);
// parseInt - вытаскивает целые числа из смешанных данных (строка + число) если число идёт первым
// parseFloat - вытаскивает дробные числа из смешанных данных (строка + число)

// let n = 4
// if (n === 5){
//     console.log('команда 1');
// } else if (n === 4){
//     console.log('команда 2');
// } else {
//     console.log('команда 3');
// } - ветвление в зависимости от изменения переменной n

// let n = 5
// switch(n){
//     case 3:
//     console.log(3);
//          break;
//     case 4:
//     console.log(4);
//          break;
//     case 5:
//     case 6:
//     console.log('5-6'); //- группировка кейсов.
//          break;
//     default:
//         console.log('no');
// } - ветвление с помощью swirch и кейсов.

// let n = 3
// let result = n === 5 ? 'верно' : 'неверно';
// console.log(result); - тернарный оператор ? из трёх условий
// (булевое ? 1вар:2вар) первое условие сработает при совпадении с переменной
// const sum = function (a, b) {
//      return a + b; // - return возвращает итог выражения для дальнейшей работы.
// }

// let res = sum(3, 5);
// console.log(res);

// let showTypeOf = function (data) {
//      console.log(data, typeof (data)); // data используется для подставления любых данных
// }
// showTypeOf(money)

// Домашка
let money = 40000,
     income = 'фриланс',
     addExpenses = 'Комуналка,Интернет,Еда,Приколдесы',
     deposit = true,
     mission = 200000,
     period = 6;

let monthlyIncome = +prompt('Ваш месячный доход?')
money = monthlyIncome;

let possibleCosts = prompt('Перечислите ваши возможные расходы за период через запятую')
addExpenses = possibleCosts;

let bank = prompt('Есть ли у вас дипозит в банке?(Да/Нет)')
deposit = bank === 'Да' ? true : false;

let eхpenses1 = prompt('Введите обязательную статью расходов'),
     amount1 = +prompt('Во сколько это обойдется?'),
     eхpenses2 = prompt('Введите обязательную статью расходов'),
     amount2 = +prompt('Во сколько это обойдется?');


let getStatusIncome = function () {
     if (budgetDay > 1200) {
          return ('У вас высокий уровень дохода');
     }
     else if (1200 > budgetDay && budgetDay > 600) {
          return ('У вас средний уровень дохода');
     }
     else {
          return ('У вас низкий уровень дохода');
     }
};


function getExpensesMonth() {
     return (amount1 + amount2);
}

function getAccumulatedMonth() {
     return (money - getExpensesMonth());
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
     return (mission / accumulatedMonth);
}

console.log(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30);




