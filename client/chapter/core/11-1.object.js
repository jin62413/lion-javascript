/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

let htmlCode = /* html */ `
  <ul>
    <li class="box"></li>
    <li></li>
    <li></li>
  </ul>
`;

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization: 권한
// authentication: 인증
// 둘 다 auth로 표기하기 때문에 뭔지 확인해야 함

authUser = {
  uid: 'user-id-1238slkfj',
  name: 'beom',
  email: 'seonbeom2@gamil.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

/* console.log(authUser.uid);
console.log(authUser.permission);
console.log(authUser.email); */

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

/* console.log(authUser['uid']);
console.log(authUser['email']);
console.log(authUser['name']); */

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// class로 객체 만들기
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

// 함수로 객체 만들기
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name: name,
    email: email,
    [computedProp]: number, // 키 이름 조차 변수로 처리하고 싶을 때
  };
}

const user1 = createUser('tiger', 'tiger@naver.com', 'tel', '010-1234-1234');
// const user2 = createUser('lion', 'lion@gmail.com');

// 프로퍼티 포함 여부 확인

// key in user1

Object.prototype.SIGN = true;

// 자신(onw)의 속성(property)을 가지고 있는지

for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    // console.log(key);
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열 만들어주세요 Object.keys()

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

// getProp(objcet)
function getProp(objcet) {
  if (typeof objcet !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(objcet);
}

function getP(object) {
  let result = [];

  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

// console.log(getProp(authUser));

// 프로퍼티 제거(remove) or 삭제(delete)
//           null            없앰

/*
authUser.name = null; // 제거

delete authUser.uid; // 삭제

console.log(authUser); 
*/

function removeProperty(object, key) {
  if (typeof object === 'object') {
    throw new Error('...');
  }

  if (typeof object === 'string') {
    throw new Error('...');
  }

  if (key === 'all') {
    for (let key of Object.keys(object)) {
      object[key] = null;
    }

    return object;
  }

  object[key] = null;

  return object;
}

// removeProperty(authUser, 'all');

function deleteProperty(object, key) {
  delete object[key];

  return object;
}

deleteProperty(authUser, 'all');

console.log(authUser);

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(objcet) {
  if (Object.keys(objcet).length === 0) {
    return true;
  }

  return false;

  // return !(Object.keys(objcet).length);

  // return getProp(objcet).length === 0 ? true : false;
}

isEmptyObject(authUser); // false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// let [red, blue, green] = color; // 배열의 순서가 중요함
let [, , green] = color; // green만 가져오기

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(green);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  을: 3000,
  병: 500,
  정: 700,
};

// const 갑 = salaries.갑;
// const 을 = salaries.을;
// const 병 = salaries.병;
// const 정 = salaries.정;

const { 갑: 가 = 40, 을, 병, 정 } = salaries; // 객체를 분해해서 값을 담고 변수처럼 만들어주는 것
// 객체에 값이 없으면 만들어서 넣어줌

console.log(가);

// 배열의 구조분해할당 : 순서가 정해져 있다. 변수 이름을 바꿀 수 있다.
// 객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까? yes

function setElementCss(options) {
  // let width = options.width;
  // let color = options.color;

  // const { width, height, overflow, color } = options;

  const { width: w, height, overflow, color: c } = options; // 변수 이름 바꾸기

  // console.log(options.width, options.color);
  // console.log(width, color);
  console.log(w, c);
}

const defaults = {
  // 순서가 중요하지 않음
  width: 100,
  overflow: false,
  color: 'orange',
  height: 200,
};

setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
  width: 200,
});
