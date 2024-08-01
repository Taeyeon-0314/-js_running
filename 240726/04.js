1.
//배열 API map 활용
var arr = [10, 20, 30]
var arr1 = arr.map(function (num) {
    return num * 10;
});
console.log(arr1);
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요


2.
//배열 API filter 활용
var arr = [10, 22, 33]
var filterArr = arr.filter(function (num) {
    return num % 5 === 0;
});
console.log(filterArr);
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

3.
const numbers = [5, 10, 15, 20, 25];
let result = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        result.push(numbers[i]);
    }
}
console.log(result);
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]


4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
let arrResult = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4) {
        arrResult.push(arr[i]);
    }
}
console.log(arrResult);


5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let arrResult1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
        arrResult1.push(arr[i]);
    }
}
console.log(arrResult1);
6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요

7.
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 }
];
student.sort(function (num1, num2) {
    return num2.age - num1.age;
});
console.log(student);
// age를 이용하여 내림차순으로 정렬하고 출력해주세요

8.
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" }
];
let nullCheck = false;
for (var i = 0; i < student.length; i++) {
    if (student[i].name === null) {
        nullCheck = true;
        break;
    }
}
console.log(nullCheck);
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];

let big5Arr = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
        big5Arr = true;
        break;
    }
}
console.log(big5Arr);
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.


10.
var arr = ["banana", "kiwi", "mango"];
arr.splice(2, 0, "apple");
console.log(arr);
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요

11.
var arr = [1, 5, -3, 10, 0, 8];
let checkArr = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        checkArr = true;
        break;
    }
}
console.log(checkArr);
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

12.
var arr = [1, 5, -3, 10, 0, 8];
let checkArr2 = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        checkArr2 = false;
        break;
    }
}
console.log(checkArr2);
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
