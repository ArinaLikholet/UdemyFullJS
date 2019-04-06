let money = +prompt("Ваш бюджет на месяц", ""),
    time = +prompt("Введите дату", "YYYY-MM-DD"),
    mandatoryExpenses = +prompt("Введите обязательную статью расходов", ""),
    howMuch = +prompt("Во сколько обойдется?", ""),
    periodInDays = 30,
    income = [],
    savings = false,

    appData = {
        budget: money,
        timeData: time,
        expenses: {
            mandatoryExpenses: howMuch
        }
    },

    dayBudget = (appData.budget - appData.expenses.mandatoryExpenses) / periodInDays;

alert("Ваш дневной бюджет " + Math.floor(dayBudget));