"use strict";
/*без использования функции конструктора
function conversion(num) {
    let conv = {
        units: null,
        tens: null,
        hundreds: null
    };
    while (true) {
        if (!Number.isInteger(num)) {
            alert("Вы ввели не целое число");
            num = +prompt('Введите целое число от 0 до 999');
        }
        else if (Number.isInteger(num)) {
            conv.units = num % 10;
            conv.tens = Math.floor(num / 10);
            conv.hundreds = Math.floor(num / 100);
            return conv;
        }
    }
}

let result = conversion(+prompt('Введите целое число от 0 до 999'));
console.log(result);
*/

function Conversion(num) {
    while (true) {
        if (!Number.isInteger(num)) {
            alert("Вы ввели не целое число");
            num = +prompt('Введите целое число от 0 до 999');
        }
        else if (Number.isInteger(num)) {
            this.units = num % 10;
            this.tens = Math.floor(num / 10);
            this.hundreds = Math.floor(num / 100);
            return;
        }
    }
}

let result = new Conversion(+prompt('Введите целое число от 0 до 999'));
console.log(result);