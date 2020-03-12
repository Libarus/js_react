
let money = +prompt('Ваш буюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

let expense = prompt('Введите обязательную статью расходов в этом месяце');
let summ = prompt('Во сколько обойдется?');

appData.expenses[expense] = summ;
alert('Весь бюджет на месяц ' + appData.budget + '; Бюджет на 1 день: ' + appData.budget / 30);

console.log(appData);
console.table(appData);