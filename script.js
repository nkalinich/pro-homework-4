// debugger;

question_1 = +prompt("Сколько будет 2+2?");
question_2 = prompt("Солнце встает на востоке?");
question_3 = prompt("Сколько будет 5 / 0?");
question_4 = prompt("Какого цвета небо?");
question_5 = +prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?");

x = 0;

if (!question_1) {
    console.log (x);
} else if (question_1 === 4) {
    console.log (x += 10);
} else {
    console.log(x);
}

if (!question_2) {
    console.log (x);
} else if (question_2 === "Да") {
    console.log (x += 10);
} else {
    console.log(x);
}

if (!question_3) {
    console.log (x);
} else if (question_3 === "Делить на 0 нельзя") {
    console.log (x += 10);
} else {
    console.log(x);
}

if (!question_4) {
    console.log (x);
} else if (question_4 === "Голубое") {
    console.log (x += 10);
} else {
    console.log(x);
}

if (!question_5) {
    console.log (x);
} else if (question_5 === 42) {
    console.log (x += 10);
} else {
    console.log(x);
}

alert(`Ваш результат: ${x}`);