
//Задание 1
"use strict"; //использовать строгий

let Tc = 10; //температура в цельсиях
let Tf = (9 / 5) * Tc + 32; //пересчёт на Фаренгейты
alert("Температура по Фаренгейту = " + Tf); //выводим результат в Фаренгейтах

//Задание 2
let admin = null;
let name = "Василий";
admin = name;
alert(admin)

//Задание 3
let a = 10 + 10 + "10";
let b = 10 + "10" + 10;
let c = 10 + 10 + +"10";
let d = 10 / -"";
let e = 10 / +"2,5";

/*
a. 10+10+"10" - получается 2010. Сперва идёт сложение потом конкатенация (не явное приведение типа число 20 в строку)
b. 10 + "10" + 10 - получается 101010. Сперва идёт конкатенация числа 10 и строковой 10, потом идёт конкатенация строковой 1010 с числом 10
с. 10 + 10 + +"10" - получается 30. Сперва унарный + преобразует строковую 10 (приоритет выше чем у сложения) в число, затем идёт сложение 
d. 10 / -"" - получается -Infinity. Сперва унарный - преобразует "" в -0, потом происходит деление 10 на -0 и получается отрицательная бесконечность
e. 10 / +"2,5"; - получается Nan. Сперва унарный + пытается преобразовать в число 2,5, но так как в синтаксисе js числа с плавающей точкой записываются через "." происходит ошибка.
*/
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


