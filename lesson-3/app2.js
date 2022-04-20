"use strict";

// Задание 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

let text_one = console.log(post.author);
let num_one = console.log(post.comments[0].rating.dislikes);
let num_two = console.log(post.comments[1].userId);
let text_two = console.log(post.comments[1].text);
