1.
const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] }

];
const result = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((num1, num2) => num1 + num2) / student.scores.length
})).filter(student => student.average >= 80).map(student => student.name);
// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

console.log(result);
2.
const numbers = [5, 10, 15, 20, 25];
const result2 = numbers.map(num => num * 2).filter(num => num <= 30);
console.log(result2);
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
