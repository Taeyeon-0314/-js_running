function clac(num1, cal, num2) {
    // 코드를 작성해주세요.
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

clac(3, "+", 6); // 결과값 9
clac(11, "-", 6); // 결과값 5
clac(6, "*", 3); // 결과값 18
clac(15, "/", 3); // 결과값 5