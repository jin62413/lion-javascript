/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(typeof empty); // object, 언어상의 오류

// 2. 값이 할당되지 않은 상태
let unknown; // 값이 할당되지 않은 상태라서 let 사용
console.log(typeof unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); // 문자 생성자, 생성자를 통해 문자를 생성하지만 잘 쓰지 않는다.

const double = 'hello'; // 문자 리터럴

const single = 'hello';
const backtick = `hello`;

console.log(hi);
console.log(typeof hi); // object
console.log(typeof double); // string
// 지금은 object나 string이나 상관 없이 문자로 취급

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123);
const integer = 123;
const floatingPointNumber = 10.45;

console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); // new 없이 만들 수 있음

const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof bool); // typeof애 괄호를 넣어 표현할 수 있음.

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});

const obj = {};

console.log(obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid'); // Symbol과 bigInt는 비교적 최근에 만들어진거라 new를 붙이지 않음

console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof (1 + 2));

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function () {
    console.log('hello~');
  },
};

console.log(user.sayHi());

// Array
const newArray = new Array();

const arr = [10, 100, 1000, 1, 2, 3];

console.log(arr[3]);

const count = 0;
`li:nth-child($ { count + 1 })`; // 배열의 시작이 0이기 때문에 첫번째를 고르려면 1을 더해야 함

// function
const f = new fishBreadFrame();

function fishBreadFrame(재료) {
  return 재료 + '맛 붕어빵';
}

const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 팥붕어빵 = fishBreadFrame('팥');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(슈크림붕어빵);
// this
