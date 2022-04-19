"use strict";

//Задание 1
//пример 1
let a = 1, b = 1, c, d; // объявление переменных в одну строку
c = ++a;
alert(c); // Ответ: 2, потому что переменной с присваивается значение а с префиксным инкрементом (сначала к значению а прибавляется 1, затем идёт присвоение)

//пример 2
d = b++;
alert(d); // Ответ: 1, потому что переменоой d присваивается значение b с постфиксным инкрементом (сначала значение b присваивается d, затем идёт увеличение b на 1)

//пример 3
c = 2 + ++a;
alert(c); // Ответ: 5, потому что a уже равно 2, сначала идёт префиксный инкремент т.к. у него выше приоритет, потом сложение значения перменной 2 + а и получается 5

//пример 4
d = 2 + b++;
alert(d); // Ответ: 4, потому что b уже равно 2, сначала идёт постфиксный инкремент т.к. у него выше приоритет, потом сложение значения перменной 2 + b и получается 5

alert(a); //3 после всех инкрементов
alert(b); //3 после всех инкрементов

//Задание 2
let a2 = 2; //присвоение a2 значение 2
let x = 1 + (a2 *= 2);//шаг 1 выполняется вычисление в (), шаг 2 выполняется умножение a2 на 2, шаг 3 выполняется присвоение a2 результата уменожения, шаг 4 выполняется сложения результата () и 1, шаг 5 полученное значение в результате сложения присваивется переменной x

//Задание 3
let a3 = 2;
let b3 = -2;

/**
 * Функция для определения знака
 * @param {number} num1 определение знака переменной a3
 * @param {number} num2 определение знака переменной b3
 */

function determineSign(num1, num2) {
    let signature_a3 = Math.sign(num1);
    let signature_b3 = Math.sign(num2);
    if (signature_a3 >= 0 && signature_b3 >= 0) {
        let sum = num1 + num2;
        alert(sum);
    } else if (signature_a3 == -1 && signature_b3 == -1) {
        let sum = num1 * num2;
        alert(sum);
    } else if (signature_a3 || signature_b3 < 0) {
        let sum = num1 + num2;
        alert(sum);
    }

}

determineSign(a3, b3)

//Задание 4
/**
 * Функция сложения
 */

function summary(a, b) {
    return a + b;
}

let summa = summary(1, 5);

/**
 * Функция вычитания
 */

function subtraction(a, b) {
    return a - b;
}

let subtr = subtraction(1, 5);

/**
 * Функция деления
 */

function division(a, b) {
    return a / b;
}

let divis = division(1, 5);

/**
 * Функция умножения
 */

function multiplication(a, b) {
    return a * b;
}

let multiplic = multiplication(1, 5);

//Задание 5
/**
 * Функция для расчёта любой стандартных математических операций 
 * @param {number} arg1 значение 1
 * @param {number} arg2 значение 2 
 * @param {string} operation строка с названием операции
 * @returns 
 */
function mathOperation(arg1, arg2, operation) {
    let meaning = 0;
    switch (operation) {
        case "summary":
            meaning = summary(arg1, arg2);
            return meaning;
        case "subtraction":
            meaning = subtraction(arg1, arg2);
            return meaning;
        case "division":
            meaning = division(arg1, arg2);
            return meaning;
        case "multiplication":
            meaning = multiplication(arg1, arg2);
            return meaning;
    }
}

let math_value = mathOperation(5, 5, "multiplication");

//Задание 6

function num_word(value_money) {
    let words = ['рубль', 'рубля', 'рублей'];

    value_money = Math.abs(value_money) % 100;

    let num = value_money % 10;

    if (value_money > 10 && value_money < 20) return words[2];

    if (num > 1 && num < 5) return words[1];

    if (num == 1) return words[0];

    return words[2];

}

let value_money = +prompt("Сколько денег вы хотите положить на счёт");
let result = num_word(value_money);
alert(`Ваша сумма в ${value_money} ${result} успешно зачислена`);