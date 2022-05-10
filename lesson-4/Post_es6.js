"use strict"

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }

}

const inh_es6 = new AttachedPost_es6("Dostoevskiy", "Brothers Karamazovy", "1878");
console.log(inh_es6.author);
console.log(inh_es6.text);
console.log(inh_es6.date);
console.log(inh_es6.highlighted);
inh_es6.makeTextHighlighted();
console.log(inh_es6.highlighted);
inh_es6.edit("Crime and Punishment");
console.log(inh_es6.text);