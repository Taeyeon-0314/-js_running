// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
    var name = "yuno2";
    function a() {
        console.log(name);
    }
    return a();
}

myName();
// 출력값 : yuno2
/* => var name = "yuno"; 는 전역변수로 선언되어 있고, myName함수 내부에 var name = "yuno2"; 지역변수로 선언
    myName를 호출 했을때 a함수를 호출하고 a함수 내부에 console.log(name);을 호출하면 name은 지역변수로 선언된 yuno2가 출력됨 */

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if (true) {
        var x = 2;
    }

    console.log(x);
}

test();
// 출력값 : 2
/* => test함수 내부에 var x = 1; 지역변수로 선언되어 있고, if문 내부에 var x = 2; 지역변수로 선언되어 있음
    test함수를 호출하면 if문 내부에 선언된 x = 2;가 출력됨 */

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj = {
    name: "yuno",
    method: function () {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

// 출력값 : 화살표 함수 : yuno , 일반 함수 : undefined
// => 화살표 함수는 this는 nameObj를 가르키고, 일반함수는 this는 window를 가르키고 있기 때문에 출력값이 다름