"use strict";

//Задание 3

const products3 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 5,
        price: 1000,
    },
];


products3.forEach(function (sale) {
    sale.price = sale.price - sale.price * 0.15;
});

console.log(products3);