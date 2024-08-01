const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function sumScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        scores[i] = calc(scores[i], "+", 3);
    }
    return scores;
}

function calc(num1, cal, num2) {
    switch (cal) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }

}
sumScores(scores);
console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]