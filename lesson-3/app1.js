"use strict";

//Задание 1

let i = 0;
for (i = 0; i <= 10; i++) {
    let j = i % 2;
    if (i === 0) {
        console.log("0 - это ноль");
    } else if (j === 1) {
        console.log(`${i} - нечетное число`)

    } else if (j === 0) {
        console.log(`${i} - четное число`)
    }
}