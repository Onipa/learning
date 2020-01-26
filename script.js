'use strict'

let money = prompt ('Ваш бюджет на месяц?');
let time = prompt ('Введите дату в формате YYYY-MM-DD');
let first = prompt ('Введите обязательную статью расходов в этом месяце');
let second = prompt ('Во сколько обойдется?');

let appData = {
    budget: money,
    timeData: time,
    saving: false,
    expenses: {
        [first]: second
    },
    optionalExpenses: {
    },
    income: []
};

alert("Ваш бюджет на день: "+money/30)
