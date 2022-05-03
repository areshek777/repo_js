"use strict";

//Задание 4

const products4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let photo = products4.filter(function (presence) {
    return presence.photos != 0 && presence.photos != undefined;
});

console.log(photo);

let values = products4.sort(function (price1, price2) {

    if (price1.price > price2.price) {
        return 1;
    }
    if (price2.price > price1.price) {
        return -1;
    }

    return 0;

});

console.log(values);