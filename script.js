'use strict'

let money, time;

function start() {
    while(isNaN(money) || money == '' || money ==null ) {
        money = +prompt ('Ваш бюджет на месяц?');
    }
    time = prompt ('Введите дату в формате YYYY-MM-DD');
}

start();

let appData = {
    budget: money,
    timeData: time,
    saving: true,
    expenses: {},
    optionalExpenses: {},
    income: [],
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++){
            let a  = prompt ('Введите обязательную статью расходов в этом месяце'),
                b = prompt ('Во сколько обойдется?');

            if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
                && a !== '' && b !== '' && a.length < 50){
                console.log('Done');
                appData.expenses[a] = b;
            } else {
                i = i - 1
            }
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome)
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка')
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let c = prompt('Статья необязательных расходов?');

            if ( (typeof(c)) === "string" && (typeof(c)) != null
                && c !== '' && c.length < 50) {
                appData.optionalExpenses[i+1] = c;
                console.log ('Done!');
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
            if (typeof(items) == 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i = i - 1
            }
        }
        appData.income.forEach(function (item, i) {
            alert('Способы доп. заработка: ' + ++i + '. ' + item);
        })
    },
    checkAppData: function () {
        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + key);
        }
    }
};


//Варианты цыклов
// let i = 0;
//
// while ( i < 2) {
//     let a  = prompt ('Введите обязательную статью расходов в этом месяце'),
//         b = prompt ('Во сколько обойдется?');
//
//     if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a !== '' && b !== '' && a.length < 50){
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//
//     };
//     i++;
// };
//
// do {
//     let a  = prompt ('Введите обязательную статью расходов в этом месяце'),
//         b = prompt ('Во сколько обойдется?');
//
//     if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a !== '' && b !== '' && a.length < 50){
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {
//
//     };
//     i++;
// }
// while (i < 2);
