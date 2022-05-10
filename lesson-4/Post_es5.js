"use strict";

function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post_es5.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost_es5(author, text, date) {
    Post_es5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
AttachedPost_es5.prototype.constructor = AttachedPost_es5;

AttachedPost_es5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const inh_es5 = new AttachedPost_es5("King", "Misery", "1987");
console.log(inh_es5.author);
console.log(inh_es5.text);
console.log(inh_es5.date);
console.log(inh_es5.highlighted);
inh_es5.makeTextHighlighted();
console.log(inh_es5.highlighted);
inh_es5.edit("Kerry");
console.log(inh_es5.text);