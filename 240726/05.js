//해당 문제를 forEach로 변경하여 풀어주세요
1.
let arr = [10, 20, 30]
let resultArr = [];
arr.forEach(function (num) {
    resultArr.push(num * 10);
});
console.log(resultArr);
// 해당 로직을 작성하세요  

// 결과 값: [100, 200, 300] 출력해주세요 

2.
let arr1 = [10, 22, 33]
let resultArr2 = [];
arr1.forEach(function (num) {
    if (num % 5 === 0) {
        resultArr2.push(num);
    }
});
console.log(resultArr2);
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]