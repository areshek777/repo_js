"use strict"

let enumeration = {
    questionAnswer(question) {
        let variant = "";
        for (let key in question.variants) {
            variant += `${key}: ${question.variants[key]}\n`;
        }
        let conclusionQuestion = prompt(`${question.text}\n ${variant}`);
        return conclusionQuestion === question.correctAnswer;
    }
}