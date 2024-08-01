/* 1. Person이라는 이름의 클래스를 정의해주세요. 이 클래스는 name, age 이라는 속성을 갖고, info라는 메서드를 갖습니다.
 info 메서드는 "저의 이름은 [name] 나이는 [age] 입니다." 를 출력해야 합니다. */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 입니다.`);
    };
}

// 2. Person이라는 객체를 사용하여 jung이라는 인스턴스를 생성하고, 이름은 yuno 나이는 20으로 설정하고, jung의 info 메서드를 사용하여 출력해보세요
const jung = new Person("yuno", 20);
jung.info();
// => jung 인스턴스를 생성할때 name은 yuno , age는 20 으로 설정하고 info메서드를 호출하면 "저의 이름은 yuno 나이는 20 입니다." 출력됨

// 3. Person을 이용해서 Stuent 클래스를 정의해주세요. Student클래스는 추가적으로 Study라는 속성를 갖습니다
class Student extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }
}

// 4. student1이라는 인스턴스를 생성하고, 이름은 "준현" 나이는 12000 , study는 javascript로 생성하고 각 요소들을 출력해주세요
const student1 = new Student("준현", 12000, "javascript");
console.log(student1.name);
console.log(student1.age);
console.log(student1.study);
/* => student1 인스턴스를 생성할때 name은 준현 , age는 12000, study는 javascript로 설정한후 출력하면
    student1.name = 준현 , student1.age = 12000 , student1.study = javascript 출력됨*/

/* 5. Tutee 클래스를 만들어주세요 Tutee는 Person을 상속받습니다.
Tutee 클래스는 name, age, study의 속성을 갖고 있습니다.  
info 메서드를 오버라이드해서 "저의 이름은 [name] 나이는 [age] 현재 [study]를 학습하고 있습니다" 라는 메시지를 출력하게 만들어주고, 인스턴스는 tutee이라고 만들어주세요. */
class Tutee extends Person {
    constructor(name, age, study) {
        super(name, age);
        this.study = study;
    }

    info() {
        console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다.`);
    };
}

const tutee = new Tutee("yuno", 300, "javascript");
tutee.info();

// 6. Student 클래스가 Person 클래스의 하위 클래스인 확인하고, tutee 인스턴스가 Studnet 클래스의 인스턴스인지 확인하여 출력해보세요.
console.log(Student.prototype instanceof Person); // true , Student클래스는 Person클래스를 상속받았기 때문에 true
console.log(tutee instanceof Student); // false // Tutee클래스는 person클래스를 상속받았지만 student클래스를 상속받지 않았기 때문에 false
