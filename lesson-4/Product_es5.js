"use strict";

function Product_es5(name, price) {
    this.name = name;
    this.price = price;
}

Product_es5.prototype.make25PercentDiscount_es5 = function () {
    this.price = this.price * 0.75;
}

const prod_es5 = new Product_es5("car", 100);
prod_es5.make25PercentDiscount_es5();
console.log(prod_es5.price);