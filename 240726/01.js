const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);

// 얉은 복사로 arr1의 주소값을 arr2에 할당하고 arr2의 0번째 인덱스 값을 10으로 변경하면 arr1의 0번째 인덱스 값도 10으로 변경됨
// 같은 객체를 참조하고 있으므로 true


const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1;// obj1을 얕은 복사하는 코드로 작성해주세요
console.log(obj2);
obj2.d = 4;
console.log(obj1);
console.log(obj2);

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

/* 해당값 obj1, obj2의 값을 출력해주세요 */