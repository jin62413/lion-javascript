/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs: 4, // enumerable : true
//   tail: true, // enumerable : true
//   stomach: [], // enumerable : true
/* // setter: 세팅을 해주는 것
  eat(food) {
    this.stomach.push(food);
  },
  // getter: 불러오는 것
  getEat() {
    return this.stomach;
  }, */

//자바스크립트에서는 setter과 getter를 만들 수 있게 키워드 제공해줌
//   set eat(food) { // enumerable : false
//     this.stomach.push(food);
//   },
//   // 키워드가 달라서 함수의 이름은 같아도 된다
//   get eat() { // enumerable : false
//     return this.stomach;
//   },
// };

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   },
// };

// const fox = {
//   prey: '',
// };

// fox.__proto__ = animal;
// tiger.__proto__ = animal; // tiger에 animal의 객체를 prototype 넣어줘서 사용 가능하게 만든다.

/* -------------------------------------------------------------------------- */

// 생성자 함수

// 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다.)

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수

function button() {
  console.log('a');
} // 일반 함수(권장하지 않음)

function Button(name) {
  this.name = name;
} //생성자 함수

const a = Button(); // 일반 함수

const b = new Button('버튼'); // 생성자 함수(권장하는 표기법)

// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// const person1 = new User('선범', 32, 'tiger@naver.com');

function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true,

  this.eat = function (food) {
    this.stomach.push(food);
  };
  
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};

const cat = new Animal();
cat.say = () => '냐옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();
// const str = new String('a');
// const num = new String(1);
