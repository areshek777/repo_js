"use strict";

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount_es6() {
        this.price = this.price * 0.75;
    }
}

const prod_es6 = new Product_es6("car", 110);
prod_es6.make25PercentDiscount_es6()
console.log(prod_es6.price)
