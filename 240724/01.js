//1. 
let uninitialized;
console.log(uninitialized); // 결과값 <undefined>
// 변수에 값을 정의하지 않았기 때문에
//2.
const apple = "사과";
// apple = "바나나";
// const는 값을 재할당이 불가능 하기때문에

//3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); //결과값 : 19
// 배열은 0부터시작하여 lotto[0]=3 , lotto[1]=8 , lotto[2]=13 ...

//4.
let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); //false
// console.log(mySchedule || false); mySchedule = false 이므로 false || false 로 false를 반환합니다.
// console.log(!!mySchedule); '!!'이중부정연산자로 mySchedule은 false -> !mySchedule은 true -> !!mySchedule은 false로 false를 반환합니다. 