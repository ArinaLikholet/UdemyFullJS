let money = +prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату", "YYYY-MM-DD"),
    periodInDays = 30;


let appData = {
    budget: money,

    expenses: {},
    timeData: time,
    income: [],
    savings: false
};
/* 1-й вариант
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдется?", "");

 if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        alert("Введите верные данные!");
        i--;
    }
}*/
/*
2-й вариант
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдется?", "");

if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        ++i;
    } else {
        alert("Введите верные данные!");
        break;
    }
} while (i < 2) ;
*/
//3-й вариант

let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        ++i;
    } else {
        alert("Введите верные данные!");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay > 0) {
    alert("Ваш дневной бюджет " + appData.moneyPerDay);
} else {
    alert("Невозможно рассчитать бюджет");
}


if (appData.moneyPerDay <= 0 && appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


