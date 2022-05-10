"use strict"

let game = {
    score: 0,
    questionNumber: 0,
    run() {
        if (!this.questionCheck()) {
            console.log("Игра окончена");
            alert(`Игра окончена, ваш счёт ${this.score}`);
            this.score = 0;
            this.questionNumber = 0;
            if (confirm("Хотите сыграть ещё раз?")) {
                this.run();
            }
            return;
        }
        let started_game = enumeration.questionAnswer(questions[this.questionNumber]);
        if (started_game) {
            this.score++;
        }
        this.questionNumber++;
        this.run();
    },
    questionCheck() {
        return questions[this.questionNumber] !== undefined;
    },
    init() {
        console.log("Приветствуем тебя в игре кто хочет стать миллионером!");
        console.log("Для начала игры напиши game.run()");
    }

};

game.init()