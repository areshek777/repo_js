"use strict";

//Задание 6

/* не оптимальный вариант, но рабочий
let value_x = "";
console.log(`${value_x}` + "x\n");
for (let i = 0; i < 19; i++) {
    let j = -1;
    if (i > j)
        value_x += "x";
    console.log(`${value_x}` + "x\n");
}   */

for (let value_x = 'x'; value_x.length <= 20; value_x += 'x') {
    console.log(value_x);
}