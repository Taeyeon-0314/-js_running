function number(num) {
    if (num % 2 === 0) {
        return "짝수입니다.";
    } else {
        return "홀수입니다.";
    }
}

console.log(number(10)); // 결과값 "짝수";
console.log(number(7)); // 결과값 "홀수";